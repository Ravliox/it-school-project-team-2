<template>
    <div class = " photo-and-tableScore ">
        <div class = "photo">
            <img src="@/assets/wbm.png" alt="">
        </div>      
        <div class = "table">
        <div v-bind:class = "{'currentPrize': index == currentQuestion }" v-for="(prize,index) in listOfPrizes" :key="index" >
            <p>{{prize}}</p>
        </div>
        </div>
    </div>   
</template>


<script>
import api  from '@/API.js'

// import image from "./assets/wbm.png"



export default {
    props: [
        'currentQuestion',
        'totalQuestions'
    ],
    data() {
        return {
            listOfPrizes: [],
            isActive :false,
            // image: image

        }
    },
    watch: {
        'currentQuestion': function (newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    created() {
        var base = 1;
        console.log(this.currentQuestion);
        console.log(this.totalQuestions);
        
        for( let i = 0; i < this.totalQuestions; i++ ) {
            this.listOfPrizes.push(i * 100);
        }   
        // this.listOfPrizes.reverse(); 
    }
}   
</script>



<style lang="scss" scoped>

.photo-and-tableScore {
    display: inline-flex;

}

.defaultPrizes{
    width: 100px;
    height: 50px;
    background-color: transparent;
    border-radius: 20%;
}


.currentPrize {
    background-color: yellow; 
}


</style>
