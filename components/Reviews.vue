<template>
  <div class="col-xl-12 col-12" v-show="reviews.length">
    <div class="card-fill card">
      <div class="card-header border-0 p-0">
        <h4 class="card-header-title">Reviews</h4>
      </div>
      <div class="card-body" >
        <div class="list-group-flush list-group-activity my-n3 list-group">
          <div class="list-group-item" v-for="review in reviews" :key="review.star">
            <div class="row">
              <div class="col-1 ms-n2 text-center fs-3 align-self-center">
                 ⭐<strong>{{ review.star }}</strong><br/>
                    
              </div>
                <div class="col">
                  <p class="text-gray-900 fs-3 mb-0">
                    {{ review.content }}
                  </p>
                  <time class="fs-6 fst-italic text-gray-400">{{ formatDate(review.updated_at) }}</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    reviews() {
      return this.$store.state.list;
    },
  },
  methods:{
    formatDate(date) {
            const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
  }
};
</script>

<style>
</style>