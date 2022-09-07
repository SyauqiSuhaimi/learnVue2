<template>
  <div>
    <h1>Chat App</h1>

    <div v-if="!joined">
        <input type="text" v-model="name">
        <button @click="joinChat">Join Chat</button>
    </div>

    <div v-if="joined" class="chatSection">
        <p>Member List</p>
        <p v-for="(member,index) in members" :key="index"> {{member.memberName}}</p>
        <button @click="leaveChat" style="margin:10px">Leave Chat</button>

        <input type="text" v-model="msg" @keyup.enter="sendMsg" class="msgBox" placeholder="Type here...">
        <div class="chatRoom">
            <div v-for="msg in chatMsg" :key="msg.id">
                <strong>{{msg.sender + " : "}}</strong>{{msg.body}}
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import io from "socket.io-client"


export default {

    data(){
        return{
            name:"",
            joined:false,
            msg:"",
            chatMsg:[],
            members:[]
        }
    },

    methods:{

        joinChat(){
            

            this.socketInstance = io("http://localhost:3000", {
                reconnection: false
            })

            this.socketInstance.on("connect", () => {

                this.joined = true

                this.socketInstance.on("message:received", (data) => {
                    this.chatMsg = this.chatMsg.concat(data)
                    }
                )

                //// Add new memberlist

                this.socketInstance.emit('members', this.name)

                this.socketInstance.on("members:new", (data) => {
                    this.members = data
                    console.log(this.members)
                    }
                )
                //////////
                
            });

            this.socketInstance.on("connect_error", (res) => {
                alert("cant connect : " + res)
            });

        },

        leaveChat(){

            this.joined = false
            const message = {
                id: new Date().getTime(),
                sender : this.name,
                body: "Left the chat"
            }

            this.socketInstance.emit('message', message)
            this.socketInstance.disconnect()
        },

        sendMsg(){
            const message = {
                id: new Date().getTime(),
                sender : this.name,
                body: this.msg
            }

            this.chatMsg = this.chatMsg.concat(message)

            this.socketInstance.emit('message', message)
            this.msg = ""
        },

    }

}
</script>

<style>

.chatSection{
    margin: 10px;
}

.chatRoom{
    /* max-width: 1000px; */
    min-height: 800px;
    margin: 5px auto;
    border: 2px solid rgb(123, 250, 125);
    text-align: start;
    padding: 5px;
}

.msgBox{
    width: 100%;
}

</style>