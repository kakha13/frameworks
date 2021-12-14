<template>
  <div class="container">
    <div class="bg-white p-5 my-2 my-lg-5 rounded text-left border-bottom">
      <h1 >Blogs</h1>
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
  head () {
    return {
      titleTemplate: 'Blogs - %s',
      
    }
  }
};
</script>

<style>
</style>