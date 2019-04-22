<template>
    <div id="helping-buttons" class = "buttons">
        <div class="helping-buttons">
            <a class="button is-warning" id="call-friend-button" :disabled="!helperDetails.callAFriend" @click="callFriend()">Call Friend</a>
            <a class="button is-warning" id="ask-public-button" :disabled="!helperDetails.askPublic" @click="askPublic()" >Ask the Public</a>
            <a class="button is-warning" id="fifty-fifty-button" :disabled="!helperDetails.fiftyFifty" @click="fiftyFifty()"> 50:50 </a>
        </div>

        <div id = "call-friend-banner-hidden" v-if="callFriendAppear" > 
            Raspunsul corect este: {{ helperDetails.correctAnswer }};
            <a class="button is-warning" @click="callFriendBannerDisappear()">Continue Game</a>
        </div>
        <div id = "ask-public-banner-hidden" v-if="askPublicAppear">
            Publicul spune ca raspunsul corect este: {{ helperDetails.correctAnswer }};
            <a class="button is-warning" @click="askPublicBannerDisappear()">Continue Game</a>
        </div>
    </div>    
</template>

<script>
import api from '@/API.js';
export default {
    props: [
        'helperDetails'
    ],
    data() {
        return {
            callFriendAppear: false,
            askPublicAppear: false,
        }
    },
    methods: {
        callFriend() {
            if(this.helperDetails.callAFriend) {
                this.helperDetails.callAFriend = false;
                this.callFriendAppear = true;
            }
        },
        askPublic() {
            if(this.helperDetails.askPublic == true) {
                this.helperDetails.askPublic = false;
                this.askPublicAppear = true;
            }
        },
        fiftyFifty() {  
            if(this.helperDetails.fiftyFifty == true) {
                this.helperDetails.fiftyFifty = false;
                this.$emit('fiftyFifty');
            }
        },
        callFriendBannerDisappear() {
            this.callFriendAppear = false;
        },
        askPublicBannerDisappear() {
            this.askPublicAppear = false;
        }

    }
 
}
</script>

<style lang="scss" scoped>

.buttons {
    display: flex;
    flex-direction: column;
}

.helping-buttons {
    display: flex;
    margin: auto;
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
    height: 100px;
    border: 2px solid yellow;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


#ask-public-banner-hidden {
    height: 100px;
    border: 2px solid yellow;
    color: #fff;
}


</style>
