<template>
  <div>123</div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const frameworks = await $content('frameworks',{ deep: true }, params.slug)
      .only(['title', 'description','image', 'slug'])
      .fetch()

    return {
      frameworks
    }
  },
  head () {
    return {
      title: 'Frameworks/'
      
    }
  }
}
</script>
