<template>
  <div>
    <h1>To Do List</h1>
    
  <input type="text" v-model="text" @keyup.enter="addTodo">
  <ul>
    <li v-for="(todo,index) in todolist" :key="index" :class="todo.done ? 'checked' : 'notchecked'">
      <i class="fa" aria-hidden="true" :class="todo.done ? 'fa-check' : 'fa-times'" @click="toggleTodo(index)"></i> 
      {{todo.value}}
      <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(index)"></i></li>
  </ul>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      todolist: [
        { value: "a", done: false },
        { value: "b", done: false },
        { value: "c", done: false },
      ],
      text: "",
    };
  },

  methods:{
    addTodo(){
      this.todolist.push({value:this.text, done:false})
      this.text = ""

    },
    toggleTodo(index){
      this.todolist[index].done = !this.todolist[index].done
    },
    deleteTodo(index){

      this.todolist.splice(index,1)

    },
  }
}
</script>

<style>
  ul{
        list-style-type: none;
    }

    i{
      margin: 0 10px;
    }

    i:hover{
      cursor: pointer;
    }

    .checked{
      background-color: rgb(102, 241, 102);
    }

    .notchecked{
      background-color: rgb(250, 188, 188);
    }

</style>