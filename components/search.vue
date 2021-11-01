<template>
    <div>
        <h1>search</h1>
        {{ article }}
    </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('categories', params.slug).fetch()

    return {
      article
    }
  }
}
</script>
