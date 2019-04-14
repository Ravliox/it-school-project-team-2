<template>

<div class = " photo-and-tableScore ">
    <p> casdasd a</p>
  <div class = "photo">
   <!-- <img src="image">  -->
<!-- <img :src="require('./assets/wbm.png')" />  -->
<img src="@/assets/wbm.png" alt="">
  </div>      
  <div class = "table">
      
      <div v-bind:class = "{currentPrize: isActive  , defaultPrizes :1 }   " v-for="(question,index) in answer.questions" :key="index" >
          <p>{{index*100}}</p>
      </div>
    </div>

 </div>   
</template>


<script>
import api  from '@/API.js'

// import image from "./assets/wbm.png"



export default {
    data() {
        return {
            currentSituation,
            listOfPrizes: [],
            isActive  :false,
            // image: image

        }
    },
    created() {
        this.$http.get(`${api}/game/current-round`).then(data =>{
           this.currentSituation = data.body;
           var base = 1;
            for( let i =0; i < this.currentSituation.totalQuestions;i++ ) {
                this.listOfPrizes.push(base*10);
                if(i == this.currentSituation.currentQuestion )  
                   {
                       this.isActive = true;
                   }
            }   
            this.listOfPrizes.reverse(); 
    })
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
    width: 100px;
    height: 50px;
    background-color: yellow; 
    border-radius: 20%;
}


</style>
