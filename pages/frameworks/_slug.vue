<template>
  <div class="container">
    <img class="img-thumb" height="100" :src="framework.image"></img>
    <nuxt-content :document="framework" />
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData ({ $content, params }) {
    const framework = await $content('frameworks', params.slug).fetch()
    return { framework }
  },
  head () {
    return {
      title: this.framework.title,
      meta: [
        { hid: 'description', name: 'description', content: this.framework.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.framework.title },
        { hid: 'og:description', property: 'og:description', content: this.framework.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.framework.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.framework.description }
      ]
    }
  }
}
</script>
