<template>
    <div class= "container">
        <p> Game.vue</p>
        <IntrebareRaspuns v-if="!loading" :currentQuestion="currentQuestion"/>
        <b-loading :is-full-page="true" :active.sync="loading"></b-loading>    
    </div>
</template>

<script>
import IntrebareRaspuns from '@/components/IntrebareRaspuns.vue'
import api from '@/API.js'
export default {
    components: {
        IntrebareRaspuns
    },
    data() {
        return {
            currentQuestion: 0,
            loading: true,
            totalQuestions: 0
        }
    },
    created() {
        this.$http.get(`${api}/game/current-round`).then(data => {
            this.currentQuestion = data.body.currentQuestion === null ? 0 : data.body.currentQuestion;
            this.loading = false;
            this.totalQuestions = data.body.totalQuestions;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
