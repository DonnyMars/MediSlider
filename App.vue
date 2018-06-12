<template>
  <div id="app">
  <br>
  <br>
  <br>

  <medi-slider
  v-for="question in questions"

  v-bind:question="question"

  v-on:changeValue="updateValue($event)">

  </medi-slider>

  <button v-on:click="submit">Submit</button>


  </div>
</template>

<script>

export default {
  mounted () {


   },
  name: 'App',
  
  data () {


      return {
      questions: [
          {id: 0, title: 'What are your energy levels?', value: 'Low', answers: ["Low", "Medium", "High"]},
          {id: 1, title: 'How much excercise do you get?', value: 'Medium', answers: ["None", "Small", "Medium", "Lots"]},
          {id: 1, title: 'What are your stress levels like?', value: '2', answers: ["1", "2", "3"]},
          {id: 2, title: 'What is your body shape?', value: 'Apple', answers: ["Apple", "Orange" ,"Pear"]}

      ]

      }

  },

  methods: {

  updateValue: function(updatedQuestion){

    this.questions[updatedQuestion.id] = updatedQuestion;

  },

  submit: function(){

    axios({

        method: 'post',
        url: 'http://localhost/index2.php',

        data: this.questions
    });


  }



  }
}

</script>

<style>

</style>
