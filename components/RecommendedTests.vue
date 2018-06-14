<template>
    <div>
        <h3 style="margin-left:10%; font-family:sans-serif;">Recommended Tests: </h3>

        <div class="test" v-for="localTest in localTests">
        <h4>{{localTest.name}} <span style="float-right">{{localTest.price}}</span></h4>
        <p>{{localTest.description}}</p>
        </div>

    </div>
</template>

<script>
export default {
  components: {},
  props: ["tests"],
  beforeMount(){
    this.localTests = this.tests;
    console.log(this.localTests);
  },
  data () {
    return {
    localTests: {}
    }
  },
}
</script>
<style>
.test {
  width:80%;
  margin-left: 10%;
  border: 2px solid #FF286E;
  border-radius: 5px;
  margin-bottom: 1%;
  background-color: #fffcfd; 
  padding: 1%;
}
</style>
