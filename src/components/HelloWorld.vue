<template>
  <div class="hello" style="border:2px solid green">
    <h2>This is Child</h2>
    <h3>This is age coming from parent ---> {{age}}</h3>
    <input @change="getName($event)"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    age:String
  },
  methods:{
    getName(e){
      // console.log(name)
      let name = e.target.value;
      this.$emit('name',name)
    }
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
