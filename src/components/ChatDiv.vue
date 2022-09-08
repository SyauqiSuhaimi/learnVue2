<template>
    <div class="row">
      <div class="col-2 userDiv">
          <div class="col-12 memberList" :class="chatAppStore.allChat ? 'chatSelected' : ''">All Chat</div>
          <div class="col-12 memberList" v-for="(member,index) in chatAppStore.members" :key="index">{{member.memberName}}</div>
          <div class="col-12 memberList" @click="chatAppStore.leaveChat">Leave Chat</div>
          
      </div>
      <div class="col-10 chatDiv">
        <input type="text" v-model="chatAppStore.msg" @keyup.enter="chatAppStore.sendMsg" class="msgBox" placeholder="Type here...">
        <div class="chatRoom">
            <div v-for="msg in chatAppStore.chatMsg" :key="msg.id">
                <strong>{{msg.sender + " : "}}</strong>{{msg.body}}
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import socket from "../plugin/socket.js";
  import { chatStore } from "@/plugin/globalState.js";
  
  export default {
    setup () {
        
        const chatAppStore = chatStore()
        return {chatAppStore}
            },

    props:{
      userName:String
    },

    data(){
      return {
        msg:"",
        chatMsg:this.chatAppStore.chatMsg,
        members:this.chatAppStore.members
      }
    },

    methods:{

      sendMsg(){
            const message = {
                id: new Date().getTime(),
                sender : this.userName,
                body: this.msg
            }

            this.chatMsg = this.chatMsg.concat(message)

            socket.emit('message', message)
            this.msg = ""
        },

        leaveChat(){

          this.$emit('leaveChat')

          // console.log("tekan")

          // this.joined = false
          // const message = {
          //     id: new Date().getTime(),
          //     sender : this.name,
          //     body: "Left the chat"
          // }

          // socket.emit('message', message)
          // socket.disconnect()
          },
    },

    created(){

      // socket.emit('members', this.userName)

      // socket.on("updateMembers", (data) => {
      //     this.members = data
      //     console.log(this.members)
      //     }
      // )

      // socket.on("message:received", (data) => {
      //     this.chatMsg = this.chatMsg.concat(data)
      //     }
      // )
    }
  
  }
  </script>
  
  <style>

  .userDiv{
    /* border: solid 1px; */
    padding: 5px;
  }

  .chatDiv{
    /* border: solid 1px; */
    padding: 5px;
  }

  .memberList{
    border: solid 1px;
    margin-bottom: 5px;
  }

  .memberList:hover{
    cursor: pointer;
  }

  .msgBox{
    width: 100%;
}

.chatRoom{
    /* max-width: 1000px; */
    min-height: 800px;
    margin: 5px auto;
    border: 2px solid rgb(123, 250, 125);
    text-align: start;
    padding: 5px;
}

.chatSelected{
  background-color: rgb(186, 186, 186);
}
  
  </style>