<template>
  <div class="position-relative">
    <input
      v-model="searchQuery"
      class="form-control"
      type="search"
      autocomplete="off"
      placeholder="Search frameworks"
    ></input>

    <ul v-if="frameworks.length" class="list-group position-absolute w-100">
      <li class="list-group-item d-flex border-bottom-0 pt0 pb-0 justify-content-between align-items-start">
        <div class="text-indigo">
          Frameworks
        </div>
      </li>
      <li v-for="item of frameworks" :key="item.slug" class="list-group-item">
        <NuxtLink
          :to="{ name: 'frameworks-slug', params: { slug: item.slug } }"
          class="fw-bold text-decoration-none"
          @click.native="handleClick"
        >
          {{ item.title }}
        </NuxtLink>

        <small> - {{ item.category }}</small>
        <p class="fst-italic lh-sm">
          <small>{{ item.description }}</small>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '',
      frameworks: []
    }
  },
  watch: {
    async searchQuery (searchQuery) {
      if (!searchQuery) {
        this.frameworks = []
        return
      }
      this.frameworks = await this.$content('frameworks')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
  methods: {
    handleClick (e) {
      this.searchQuery = ''
    }
  }
}
</script>

<style scoped>
ul {
  z-index: 10;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-top: -3px;
}
</style>
