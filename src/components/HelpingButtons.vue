<template>
    <div id class = "container">
        <div id = "call-friend-banner-hidden" v-if=callFriendAppear > 
            Raspunsul corect este: {{questions[currentQuestion].correctAnswerIndex}};
            <a class="button is-warning" @click=callFriendBannerDisappear()>Continue Game</a>
        </div>
        <div id = "ask-public-banner-hidden" v-if=askPublicAppear>
            Publicul spune ca raspunsul corect este: {{questions[currentQuestion].correctAnswerIndex}};
            <a class="button is-warning" @click=askPublicBannerDisappear()>Continue Game</a>
        </div>

        <div class="helping-buttons">
            <a class="button is-warning" id="call-friend-button" enabled:"callFriendEnabled" @click=callFriend()>Call Friend</a>
            <a class="button is-warning" id="ask-public-button" enabled:"askPublicEnabled" @click=askPublic() >askPublic()</a>
            <a class="button is-warning" id="fifty-fifty-button" enabled:"fiftyFiftyEnabled" @click=fiftyFifty()> 50:50 </a>
        </div>
    </div>    
</template>

<script>
import api from '@API.js';
export default {
    data() {
        return {
            callFriendAppear:false,
            askPublicAppear:false
        }
    },
    // created() {
    //     this.$http.get(`${api}/admin`).then(data => {
    //         var questions = data.body.questions;
    //     }),
    //     this.$http.get(`${api}/game/current-round`).then(data => {
    //         var currentQuestion = data.body.currentQuestion;
    //         var totalQuestions = data.body.totalQuestions;
    //     }),
    //     this.$http.get(`${api}/game/round/:roundNumber`).then(data => {
    //        var fiftyFiftyEnabled = data.body.actions.fiftyFifty;
    //        var callFriendEnabled = data.body.actions.callFriend;
    //        var askPublicEnabled = data.body.actions.askPublic;
    //     }) 

    // },
    methods: {
        callFriend() {
            if(callFriendEnabled == true) {
                callFriendEnabled = false;
                callFriendAppear = true;
            }
        },
        askPublic() {
            if(askPublicEnabled == true) {
                askPublicEnabled = false;
                askPublicAppear = true;
            }
        },
        fiftyFifty() {  
            if(fiftyFiftyEnabled == true) {
                fiftyFiftyEnabled = false;
                var count = 0;
                for(let i = 0; i <= 3 && count <=2;i++ ) {
                    if( questions[currentQuestion].correctAnswerIndex != i  ) {
                        count++;
                        if(count<=2) {
                            showAnswers[i] = false;
                        }
                    }
                }
            }
        },
        callFriendBannerDisappear() {
            callFriendAppear = false;
        },
        askPublicBannerDisappear() {
            askPublicAppear = false;
        }

    }
 
}
</script>

<style lang="scss" scoped>

.helping-buttons {
    display: inline-flex;
    width: 120px;
    height:50px;
    margin: auto;
    align-content: space-around;
}

.call-friend-button {
    background-color:blue;
    width: 30px;
    height: 30px;

}

.ask-public-button {
    background-color: red;
    width: 30px;
    height: 30px;

}

.fifty-fifty-button {
    background-color: green;
    width: 30px;
    height: 30px;

}

#call-friend-banner-hidden{
    width: 100px;
    height: 100px;
    border: 2px solid yellow;
    visibility: hidden;
}

.call-friend-banner-visible {
    visibility: visible;
}

#ask-public-banner-hidden {
    width: 100px;
    height: 100px;
    border: 2px solid yellow;
    visibility: hidden;
}

.ask-public-banner-visible {
    visibility: visible;
}




</style>
