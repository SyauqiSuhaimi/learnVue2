<template>
  <div>
    <h1>Chat App V2</h1>

    <div v-if="!joined">
        <input type="text" v-model="userName">
        <button @click="joinChat">Join Chat</button>
    </div>

    <div v-else>
        <ChatDiv :userName="userName" @leaveChat="leaveChat" class="chatDiv"/>
    </div>
  </div>
</template>

<script>

import socket from "../plugin/socket.js";
import ChatDiv from "../components/ChatDiv.vue";

export default {

    components: {
    ChatDiv
},

    data(){
        return {
            userName:"",
            joined:false
        }
    },

    methods:{

        joinChat(){
            // socket.auth = this.userName
            socket.connect(); 
            socket.on("connect", () =>{
                this.joined = true

            })

            socket.on("connect_error", (res) => {
                alert("cant connect : " + res)
            });
        },

        leaveChat(){
            this.joined = false
            socket.disconnect()
        }
    }

}
</script>

<style>

.chatDiv{
    max-width: 1200px;
    /* border: solid 1px; */
    margin: auto;
}

</style>