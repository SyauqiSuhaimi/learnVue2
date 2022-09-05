<template>
  <div>
    <h1>Conditional Rendering</h1>

    <div>
        <button @click="type = 'A'">Hit me for V-If</button> | 
        <button @click="type = 'B'">Hit me for V-Else-If</button> | 
        <button @click="type = 'c'">Hit me for V-Else</button>

        <p v-if="type === 'A'">Im V-If</p>
        <p v-else-if="type === 'B'">Im V-Else-If</p>
        <p v-else>Im V-Else</p>
    </div>

    <div>
        <button @click="toggle = !toggle">Toggle If-Else</button>
        <p v-if="toggle">Vue is toggle</p>
        <p v-else>Vue is toggle 2</p>
    </div>

    <div>
        <button @click="show = !show">Toogle V-Show</button>
        <p v-show="show">Im V-Show</p>
    </div>
  </div>
</template>

<script>
export default {

    data(){
        return {
            toggle:true,
            type:"A",
            show:true
        }
    }

}
</script>

<style>

</style>