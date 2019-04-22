<template>
    <body>
        <br>
        <div>
            <img src="@/assets/wwbm.png" width = 250px>
        </div>
        <br>
        <div>
            <router-link to="/game" tag="button" >Start Game!</router-link>  
        </div>
        <div class = "form-frame">
            <div v-for="(question, index) in adminData.questions" :key="index">
                <hr>
                <span><b>Intrebare:</b></span>
                <input class = "input question" type = "text" v-model="adminData.questions[index].question">
                <div class = "flex-text">
                    <span><i>Raspunsuri:</i></span>
                </div>
                <div class = "flex-container">
                    <div class = 'flex-items' v-for="(answer, index) in question.answers" :key="index">
                        <span>{{index}}: </span>
                        <input class = "input answer" type = "text" v-model='question.answers[index]'>
                    </div>
                </div>
                <span class = "correct-answer">Varianta corecta:</span>
                <input class = 'input correct-input' type = 'text' v-model="adminData.questions[index].correctAnswerIndex"> 
            </div>
            <hr width="100%">
        </div>
        <br>
        <button @click='addNewQuestion'> Add new question </button>
        <br>
        <button @click = 'sendData'> Send </button>
    </body>
</template>

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
          this.adminData = data.body.session;
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
body {
    background-color: #000d1a;
}

span {
    color: white;
}

.form-frame {
    width: 600px;
    margin: auto;
    //border: 1px solid white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.question {
    width: 72%;
    height: 30px;
    margin-left: 20px;
}

.answer {
    width: 80%;
    height: 30px;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    //border: 1px solid red
}

.flex-items {
    width: 45%;
    height: 35px;
    //border: 1px solid white
}

.flex-text {
    width: 25%;
}

.correct-input {
    width: 30%;
    height: 30px;
    margin-left: 20px;

}

.correct-answer {
    color: lightblue;
    margin-left: 34%;
}

button {
    width: 15%;
    display:block;
    margin: auto;
}

hr {
    height: 0.5px;
}

</style>