<template>
  <div>
    <h1>Chat App</h1>

    <div v-if="!joined">
        <input type="text" v-model="name">
        <button @click="joinChat">Join Chat</button>
    </div>

    <div v-if="joined" class="chatSection">
        <p>Chat Room</p>
        <input type="text" v-model="msg" @keyup.enter="sendMsg" class="msgBox">
        <div class="chatRoom">
            <div v-for="msg in chatMsg" :key="msg.id">
                {{msg.sender + " : " + msg.body}}
            </div>
            <!-- <p>Me : </p> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            name:"",
            joined:false,
            msg:"",
            chatMsg:[]
        }
    },

    methods:{

        joinChat(){

            this.joined = true
            console.log(this.name)
        },

        sendMsg(){
            console.log(this.msg)
            this.addMsg()
            this.msg = ""
        },

        addMsg(){

            const message = {
                id: new Date().getTime(),
                sender : this.name,
                body: this.msg
            }

            this.chatMsg = this.chatMsg.concat(message)
        }
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