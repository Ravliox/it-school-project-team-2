<template>
  <div id="app">
    <router-view/>
    <QuestionForm />
  </div>
</template>


<script>
import api from '@/API.js'
import QuestionForm from "@/componente/QuestionForm.vue"

export default {
  components: {
    QuestionForm  
  },
   data() {
        return {
            indexOfNextRound: 0
        }
    },
  created() {

  }
}

</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
