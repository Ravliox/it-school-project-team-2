<template>
    <div class= "container">
        <p> Game.vue</p>
        <IntrebareRaspuns @newQuestion="currentQuestion = currentQuestion + 1" v-if="!loading" :currentQuestion="currentQuestion"/>
        <TableScore :currentQuestion="currentQuestion" v-if="!loading" :totalQuestions="totalQuestions"/>    
        <b-loading :is-full-page="true" :active.sync="loading"></b-loading>
    </div>
</template>

<script>
import IntrebareRaspuns from '@/components/IntrebareRaspuns.vue'
import api from '@/API.js'
import TableScore from '@/components/TableScore'

export default {
    components: {
        IntrebareRaspuns,
        TableScore
    },
    data() {
        return {
            currentQuestion: 0,
            loading: true,
            totalQuestions: 0,
            score: {
                current: 0,
                total: 0
            }
        }
    },
    created() {
        this.$http.get(`${api}/game/current-round`).then(data => {
            this.currentQuestion = data.body.currentQuestion === null ? 0 : data.body.currentQuestion;
            this.loading = false;
            this.totalQuestions = data.body.totalQuestions;
            this.score.current = this.currentQuestion;
            this.score.total = this.totalQuestions;
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
