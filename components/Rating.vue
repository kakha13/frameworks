<template>
    <div class="position-absolute top-0 end-0">
        <star-rating v-model="rating" @rating-selected ="setRating" text-class="rating-number" :round-start-rating="false" :rounded-corners="true" :padding="1" :star-size="30"></star-rating>
    </div>
</template>

<script>
export default {
    components: {},
    data () {
        return {
        rating: 0,
        count:0,
        }
    },
    props: ['framework'],
    mounted(){
        this.fetchRating();
    },
    methods: {
        async fetchRating() {
            const rating = await this.$axios.$get(`http://localhost/frameworkscatalog/?stars=${this.framework.path}`);
            this.rating = rating.rating
            this.count = rating.count
        },

        async setRating(rating){
            try {
                const response = await this.$axios.$get('http://localhost/frameworkscatalog/?review=1',{ params :{
                path: this.framework.path,
                rating
                }});
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        },
    }

}
</script>

<style>

</style>