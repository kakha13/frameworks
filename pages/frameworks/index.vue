<template>
  <main class="container">
    <div class="py-5 border-bottom">
      <h1 class="text-indigo">Frameworks</h1>
      <p class="fs-5 col-md-8">
        Quickly and easily get started with Bootstrap's compiled,
        production-ready files with this barebones example featuring some basic
        HTML and helpful links. Download all our examples to get started.
      </p>
    </div>

    <div class="bd-content order-1 py-5">
      <div class="row">
        <article v-for="(item, index) in frameworks" :key="index" class="col-4">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <NuxtLink
            :to="{ name: 'frameworks-slug', params: { slug: item.slug } }"
          >
            Read More
          </NuxtLink>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const frameworks = await $content('frameworks', params.slug)
      .only(['title', 'description', 'slug'])
      .fetch()

    return {
      frameworks
    }
  }
}
</script>
