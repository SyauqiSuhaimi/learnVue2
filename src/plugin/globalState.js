import { defineStore } from "pinia";

import socket from "../plugin/socket.js";

export const chatStore = defineStore({
    id: 'chatApp',

    state: () => ({
        userName:"",
        joined: false,
        members:[],
        chatMsg:[],
        msg:"",
        allChat:true
    }),

    actions:{
        joinChat(){
            socket.connect();

            socket.on("connect", () =>{
                this.joined = true
                socket.emit('members', this.userName)

                socket.on("updateMembers", data => {
                    this.members = data
                    }
                )

                socket.on("message:received", (data) => {
                    this.chatMsg = this.chatMsg.concat(data)
                    }
                )
            })

            socket.on("connect_error", (res) => {
                alert("cant connect : " + res)
            });
        },

        sendMsg()
        {
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
            this.joined = false
            socket.disconnect()
        }
    }

})