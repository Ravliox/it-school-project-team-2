<template>
    <div class = "container">
        <HelpingButtons @fiftyFifty='fiftyFiftyHandler()' :helperDetails="helperButtonsDetails" />
        <div class = "intrebare">
            <b-loading :is-full-page="false" :active.sync="loading"></b-loading>    
            {{question}}
        </div>
        <div class = "raspuns-container">
            <button @click="verificare(index)" class="raspuns-button" v-for="(answer, index) in answers" :key="index"> 
                {{ answer }} 
            </button>
        </div>
    </div>
</template>

<script>
import api from '@/API.js'
import HelpingButtons from '@/components/HelpingButtons.vue'

export default {
    props: [
        'currentQuestion',
        'totalQuestions'
    ],
    components: {
        HelpingButtons
    },
    data() {
        return {
            answers: [],
            question: "",
            correctAnswerIndex: null,
            api,
            loading: true,
            helperButtonsDetails: {
                callAFriend: true,
                fiftyFifty: true,
                askPublic: true,
                correctAnswerIndex: null,
                correctAnswer: ''
            }
        } 
    },
    created() {
        this.$http.get(`${api}/game/round/${this.currentQuestion}`).then(
            response => {
                this.answers = response.body.round.answers;
                this.question = response.body.round.question;
                this.correctAnswerIndex = response.body.round.correctAnswerIndex;
                this.helperButtonsDetails.correctAnswerIndex = this.correctAnswerIndex;
                this.helperButtonsDetails.correctAnswer = this.answers[this.correctAnswerIndex]; 

                this.loading = false;                
            }
        )
    },
    methods: {
        verificare(index) {
            if(this.correctAnswerIndex == index) {
                this.$emit('newQuestion');
                this.currentQuestion = this.currentQuestion + 1; 
                this.$http.get(`${api}/game/round/${this.currentQuestion}`).then(response  => {
                    this.answers = response.body.round.answers;
                    this.question = response.body.round.question;
                    this.correctAnswerIndex = response.body.round.correctAnswerIndex;

                    this.helperButtonsDetails.correctAnswerIndex = this.correctAnswerIndex;  
                    this.helperButtonsDetails.correctAnswer = this.answers[this.correctAnswerIndex];   
                })   
            }
        },
        fiftyFiftyHandler() {
            //to be done
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #333;
    width:1001px;

}

.intrebare{
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
