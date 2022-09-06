<template>
  <div class="todoSection">
    <h1 class="text-center">To Do List</h1>
    
    <div class="row q-mb-md">
      <div class="col">
        <q-input type="text" v-model="text" @keyup.enter="addTodo" label="Todo" :dense="dense"/>
      </div>
    </div>

  <div class="row todoList" v-for="(todo,index) in todolist" :key="index" :class="todo.done ? 'checked' : 'notchecked'" @click="toggleTodo(index)">
    <div class="col-1 text-center">
      <i class="fa" aria-hidden="true" :class="todo.done ? 'fa-check' : 'fa-times'"></i> 
    </div>
    <div class="col">
      {{todo.value}}
    </div>
    <div class="col-1 text-center">
      <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(index)"></i>
    </div>
  </div>
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

  .todoSection{
    max-width: 1000px;
    margin: auto;
    /* border: solid 5px; */
    text-align: left;
    font-size: 18px;
  }
  

  .todoList{
        list-style-type: none;
        padding: 10px 0;
        margin: unset;
    }

    .todoList:hover
    {
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      filter: contrast(80%);
      /* margin: 1px 0; */
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