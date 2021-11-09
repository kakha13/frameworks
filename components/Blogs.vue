<template>
  <div class="row gx-3">
    <article v-for="item in blogs" :key="item.slug" class="col-12 mb-3">
      <NuxtLink :to="`blog/${item.slug}`" class="fs-4 text-dark text-decoration-none">{{ item.title }}</NuxtLink>
      <p>
        posted on
        <time :datetime="item.createdAt" class="fst-italic">{{formatDate(item.createdAt)}}</time> by
        <span class="text-primary">{{item.author}}</span>
      </p>
      <NuxtLink :to="`blog/${item.slug}`" class="text-decoration-none">Read more →</NuxtLink>
    </article>
  </div>
</template>

<script>
export default {
  props: ['blogs'],
  methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
  }
};
</script>

<style>
</style>