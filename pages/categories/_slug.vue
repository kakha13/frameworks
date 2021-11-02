<template>
  <main class="container">
    <div class="py-5 border-bottom">
      <h1 class="text-indigo">{{title}}</h1>
      <p class="fs-5 col-md-8">
      </p>
    </div>

    <div class="bd-content order-1 py-5">
      <div class="row">
        <article v-for="item in frameworks" :key="item.slug" class="col-sm-12 col-md-3 mb-5">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
          <NuxtLink :to="`${item.path}`"
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
    const frameworks = await $content('frameworks',{ deep: true }, params.slug)
      .only(['title', 'description', 'slug'])
      .fetch()

    return {
      frameworks,title:`${params.slug.toUpperCase()} Frameworks`
    }
   
  }
}
</script>
