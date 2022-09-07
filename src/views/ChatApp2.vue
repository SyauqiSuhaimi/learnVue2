<template>
  <div>
    <h1>Chat App V2</h1>

    <div v-if="!joined">
        <input type="text" v-model="name">
        <button @click="joinChat">Join Chat</button>
    </div>

    <div v-else>
        chat

    </div>
  </div>
</template>

<script>
import socket from "../plugin/socket.js";

export default {

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
        }
    }

}
</script>

<style>

</style>