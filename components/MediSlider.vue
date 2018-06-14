<template>
  <div>
      <h2 style="margin-left:10%; font-family:sans-serif;">{{question.title}}</h2>
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

  props: ["question"],

  //Mounts the local values of question. Fills the object so you can refer to it.
  beforeMount(){
    this.localQuestion = this.question;
  },

  data () {
    return {

    mutableValue: this.question.value,

    localQuestion: { },

    options: {
            width: "60%",
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

      // console.log('change');

      this.localQuestion.value = this.mutableValue;
      this.$emit('changeValue', this.localQuestion);

    }
  }


}
</script>
