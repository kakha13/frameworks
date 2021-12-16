<template>
    <star-rating v-model="rating" @rating-selected ="setRating" text-class="rating-number" :round-start-rating="false" :rounded-corners="true" :padding="1" :star-size="30"></star-rating>
</template>

<script>
export default {
    components: {},
    data () {
        return {
        rating: 0,
        reviews: [],
        count:0,
        }
    },
    props: ['framework'],
    mounted(){
        this.fetchRating();
    },
    methods: {
        async fetchRating() {
          
            const rating = await this.$axios.$get(`https://frameworkscatalog.com/api.php?stars=${this.framework.path}`);
            this.rating = rating.rating
            this.reviews = rating.reviews
            this.count = rating.count
            this.$store.commit('add', rating.reviews)
        },

        async setRating(rating){
                let review = prompt("Review", "");

                if (review != null) {

                 try {
                        const response = await this.$axios.$get('https://frameworkscatalog.com/api.php?review=1',{ params :{
                        path: this.framework.path,
                        rating,
                        review_content:review
                        }});
                        alert(response.message)
                    } catch (error) {
                        console.error(error);
                    }
                    
                }
           
        },
    }

}
</script>