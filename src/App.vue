<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">To Do List</router-link> | 
    <router-link :to="{name:'DataView'}">Data Binding</router-link> | 
    <router-link :to="{name:'ConditionView'}">Conditional Rendering</router-link> | 
    <router-link :to="{name:'ParamsView'}">Route Parameter</router-link> | 
    <router-link :to="{name:'ChatApp'}">Chat App</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
