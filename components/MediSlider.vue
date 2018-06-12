<template>
  <div>

  <h1>{{question.title}}</h1>
  <br>

  <vue-slider ref="slider" v-model="mutableValue" v-bind="options"></vue-slider>


  </div>
</template>

<script>
import vueSlider from 'vue-slider-component';

export default {
  components: {
    vueSlider
  },
  props: [

  "question"

  ],

  data () {

    return {

    mutableValue: this.question.value,

    localQuestion: {

    id: this.question.id,
    title: this.question.title,
    value: this.question.value,
    answers: this.question.answers
     

    },

    options: {
            width: "80%",
            tooltip: "always",
            disabled: false,
            piecewise: true,
            piecewiseLabel: true,
            style: {
            "marginLeft": "10%"
            },
            //Data answers are passed from the answers prop.

            data: this.question.answers,

            piecewiseStyle: {
            "backgroundColor": "#ccc",
            "visibility": "visible",
            "width": "12px",
            "height": "12px"
            },

            piecewiseActiveStyle: {
            "backgroundColor": "#ff286e"
            },

            labelActiveStyle: {
            "color": "#ff286e"
            },

            processStyle: {
            "backgroundColor": "#ff286e"
            },

            tooltipStyle: {
            "backgroundColor": "#ff286e",
            "borderColor": "#ff286e"
          }
      }
    }
  },

  watch: {
    // whenever question changes, this function will run

    mutableValue: function () {

      console.log('change');

      this.localQuestion.value = this.mutableValue;
      this.$emit('changeValue', this.localQuestion);

    }
  }


}
</script>
