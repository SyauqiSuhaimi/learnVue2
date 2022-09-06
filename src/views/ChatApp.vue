<template>
  <div>
    <h1>Chat App</h1>

    <div v-if="!joined">
        <input type="text" v-model="name">
        <button @click="joinChat">Join Chat</button>
    </div>

    <div v-if="joined" class="chatSection">
        <p>Member List</p>
        <p v-for="(member,index) in members" :key="index"> {{member.sender}}</p>
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
            

            
            // console.log(this.name)

            const socket = io("http://localhost:3000");

            // this.socketInstance = io("http://localhost:3000")
            socket.on("connect", () => {
                console.log("masuk")
                this.joined = true
            });

            // if(socket.connected){
            //     this.joined = true
            // }
            // else{
            //     alert("cant connect")
            // }

            socket.on(
                "message:received", (data) => {
                    this.chatMsg = this.chatMsg.concat(data)
                }
            )

            const memberlist = {
                id: new Date().getTime(),
                sender : this.name
            }

            this.members = this.members.concat(memberlist)
        },

        leaveChat(){

            this.joined = false
            const message = {
                id: new Date().getTime(),
                sender : this.name,
                body: "Left the chat"
            }

            this.socketInstance.emit('message', message)
            // this.socketInstance.emit('disconnect')
            location.reload();
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