<template>
  <div>
    <h1>Data Binding</h1>

    <div class="row dataSection">
      <div class="col-6">
        <input v-model="firstName" placeholder="First Name" class="q-mb-md"/> <br>
        <input v-model="lastName" placeholder="Last Name" class="q-mb-md"/> <br>

        <input type="radio" id="male" value="male" v-model="gender" />
        <label for="male"> male </label>

        <input type="radio" id="female" value="female" v-model="gender" class="q-mb-md"/>
        <label for="female"> female </label>

        <br>

        <select v-model="pickedAdd" class="q-mb-md">
        <option v-for="add in address" :value="add.value" :key="add">
          {{ add.name }}
        </option>
        </select>

        <br>

        <textarea v-model="hobby" placeholder="Hobby" class="q-mb-md"></textarea> <br>

        <input type="checkbox" id="html" value="html" v-model="language">
        <label for="html"> html </label>

        <input type="checkbox" id="css" value="css" v-model="language">
        <label for="css"> css </label>

        <input type="checkbox" id="javascript" value="javascript" v-model="language">
        <label for="javascript"> javascript </label>
      </div>
      <div class="col-6">
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>
        <p>Full Name: {{ firstName + " " + lastName}}</p>
        <p>Gender: {{ gender }}</p>
        <p>Address: {{ pickedAdd }}</p>
        <span>Hobby :</span> <p style="white-space: pre-line;">{{ hobby }}</p>
        <div>Languages: {{ language }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
            firstName : "",
            lastName : "",
            hobby:"",
            language:[],
            gender:"",
            pickedAdd:"KL",
            address:[
                { name: 'Selangor', value: 'Selangor' },
                { name: 'KL', value: 'KL' },
                { name: 'N9', value: 'N9' }
            ]
        }
    }

}
</script>

<style>
  
  .dataSection{
    max-width: 1200px;
    margin: auto;
    /* border: solid 1px; */
    padding: 10px 0;
  }

</style>