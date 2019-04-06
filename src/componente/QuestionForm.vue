<template>
    <div class = "container">
        <div v-for="(question, index) in adminData.questions" :key="index">
            <p>Intrebare:</p>
            <input class = 'input question' type = "text" v-model="adminData.questions[index].question">
            <p>Raspunsuri:</p>
            <div v-for="(answer, index) in question.answers" :key="index">
                {{index}}: <input type = 'text' v-model="question.answers[index]">
            </div>
            <p> Varianta corecta: </p>
            <input type = 'text' v-model="adminData.questions[index].correctAnswerIndex" >
        </div>
        <hr>
        <button @click='addNewQuestion'> Add new question </button>
        <hr>
        <button @click = 'sendData'> Send </button>
    </div>
    
</template>

adminData.question[1].

<script>
import api from '@/API.js'

export default {
    data() {
        return {
            indexOfNextRound: 0,
            adminData: [],

        }
    },
    created() {
      this.$http.get(`${api}/admin`).then(data => {
          this.adminData = data.body;
      })

    },
     methods: {
         addNewQuestion() {
             this.adminData.questions.push({
                question: ' ',
                answers: [' ',' ',' ',' '],
                correctAnswerIndex: 0
            });
         },
         sendData() {
             this.$http.post(`${api}/admin`, JSON.stringify({session: this.adminData})).then(response => {
                 console.log(response);
             })
         }
     }
}

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
}

.question {
    width: 50%
}

button {
    width: 50%;
    display:block;
    margin: auto;
}

</style>