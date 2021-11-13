<template>
  <div class="container">
    <div class="py-3 py-lg-5 border-bottom mb-3">
      <h1>Blogs</h1>
      <p class="fs-5 col-md-8">
        Read latest news about our website and frameworks
      </p>
    </div>
    <Blogs :blogs="blogs" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content("blogs", { deep: true }, params.slug)
      .only(["title", "description", "author", "slug", "createdAt"])
      .sortBy("date", "desc")
      .fetch();

    return {
      blogs,
    };
  },
};
</script>

<style>
</style>