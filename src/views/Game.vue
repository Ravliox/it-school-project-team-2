<template>
    <div class= "container">
        <p> Game.vue</p>
        <HelpingButtons/>
    </div>
    
</template>

<script>
import HelpingButtons from '@/components/HelpingButtons.vue'
import IntrebareRaspuns from '@/components/IntrebareRaspuns.vue'
import api from '@API.js'
export default {
    data() {
        return {
            indexOfNextRound: 0,
            adminData: [],
            showAnswers: [true, true, true, true]
        }
    },
    created() {
        this.$http.get(`${api}/admin`).then(data => {

            var callFriendEnabled = data.body.helperActions.callFriend;
            var askPublicEnabled = data.body.helperActions.askPublic;
            var fiftyFiftyEnabled = data.body.helperActions.fiftyFifty;
            var questions = data.body.questions;
            var currentQuestion = data.body.currentQuestion;
        }),
        this.$http.get(`${api}/game/current-round`).then(data => {
            var currentQuestion = data.body.round.answers;
            var totalQuestions = data.body.totalQuestions;
        }),
        this.$http.get(`${api}/game/round/:roundNumber`).then(data => {
            var fiftyFiftyEnabled = data.body.actions.fiftyFifty;
            var callFriendEnabled = data.body.actions.callFriend;
            var askPublicEnabled = data.body.actions.askPublic;
        })
    }

 
}
</script>

<style lang="scss" scoped>

</style>
