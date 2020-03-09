<template>
<div>
  <navbar/>
    <div>
    <inputText age="25" @name="getName($event)"/>
    <h1>welcome {{userName}}</h1>
     <w-button/>
    </div>
</div>
</template>

<script>
import Button from "../widgets/Button.vue";
import navbar from '@/widgets/navbar';
import inputText from '@/components/HelloWorld';
  export default {
    components:{
      "w-button":Button,
      navbar,
      inputText
    },
    data () {
      return {
        userName : ''
      }
    },
    props: {
      name
    
    },
    methods:{
      getName(name){
        this.userName = name
      }
    }
  }
</script>