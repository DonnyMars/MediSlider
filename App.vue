<template>
  <div id="app">

    <medi-slider style="padding-top:4%;"
    v-for="question in questions"
    v-bind:question="question"
    v-on:changeValue="updateValue($event)">
    </medi-slider>

    <button v-on:click="submit" class="button">Submit</button>

    <recommended-tests v-if="recommendedReturned === 1" v-bind:tests="this.recommendedTests"></recommended-tests>

  </div>
</template>

<script>

export default {
  mounted () {},
  name: 'App',
  data () {

    return {

      recommendedReturned: 0,
      questions: [
          {id: 0, title: 'What are your energy levels?', value: 'Low', answers: ["Low", "Medium", "High"]},
          {id: 1, title: 'How much excercise do you get?', value: 'Medium', answers: ["None", "Small", "Medium", "Lots"]},
          {id: 2, title: 'What are your stress levels like?', value: '2', answers: ["1", "2", "3"]},
          {id: 3, title: 'What is your body shape?', value: 'Apple', answers: ["Apple", "Orange" ,"Pear"]}
      ],

      recommendedTests: [],
     }
   },
   methods: {

     updateValue: function(updatedQuestion){
        this.questions[updatedQuestion.id] = updatedQuestion;
      },

      submit: function(){

          // For some reason, POST only works with URLSearchParams when theres no actual post data.
          const params = new URLSearchParams();
          // Stringify all the questions to pass through to php.
          var questionsString = JSON.stringify(this.questions);

          params.append('questions', questionsString);

          axios.post('http://localhost/action.php', params)

          .then((response) => {
          this.recommendedReturned = 1;
          this.recommendedTests = response.data;
          //console.log(response.data);
          })
          .catch(function (error) {
          console.log(error);
          });

      }

  }
}

</script>
<style>
.button {
    background-color: #ff286e; /* Pink */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius:12px;
    margin-top:5%;
    margin-left:10%;
    cursor: pointer;
}
</style>
