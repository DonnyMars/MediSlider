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

  <input type="submit"></input>


  </div>
</template>

<script>
export default {
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

  }


  }
}
</script>

<style>

</style>
