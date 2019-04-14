<template>
    <div class = "container">
        <div class = "intrebare">{{question}}</div>
        <div class = "raspuns-container">
            <button class="raspuns-button" v-for="(answers, index) in answers" :key="index" v-if={{showAnswers[index]}}>{{answers}}></button>
        </div>
    </div>


</template>

<script>
import api from '@/API.js'
export default {
    data() {
        return {
        answers: ["","","",""],
        question: "",
        showAnswers: [false, false, false, false],
        api
        } 
    },
    created() {
        this.$http.get(`${api}/game/current-round`).then(response => {
            this.$http.get(`${api}/game/round/${response.body.currentQuestion}`).then(
                response => {
                    this.answers = response.body.round.answers;
                    this.question = response.body.round.question;
                }
            )

        })

    },
    methods() {

    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #333;
    width:1001px;
    height:340px;
}

.intrebare{
    width:1001px;
    height:50px;
    background-color:gray;
    
    align-items:center;
        display:flex;
    align-items:center;
    justify-content:center;
    font-size:40px;
    font-family:sans-serif;

}

.raspuns-container{
    
    margin: 40px;
    width:961px;
    height:198px;
    background-color:#333;
    display:grid;
    grid-template-columns: 450px 450px;
    grid-row: auto auto;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }


.raspuns-button{
    background-color:#333;
    padding:10px;
    border-radius:10px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:40px;
    font-family:sans-serif;
  }





</style>
