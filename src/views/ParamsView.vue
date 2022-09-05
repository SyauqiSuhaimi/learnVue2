<template>
  <div>
    <h1>Route Parameters</h1>

    <div v-for="param in params" :key="param">
        <router-link :to="{name:'ParamDetails', params: {id:param.name}}"><h3>{{param.name}} </h3></router-link>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return{

            params:[
                {name:"Parameter 1", id:1},
                {name:"Parameter 2", id:2},
                {name:"Parameter 3", id:3}
            ]
            }
        }

}
</script>

<style>

</style>