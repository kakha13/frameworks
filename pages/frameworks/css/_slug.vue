<template>
  <div class="container">
    <div v-if="framework.title" class="frameworks">
      <FrameworkHeader :framework="framework" />
      <nuxt-content :document="framework" />
       <div class="comments mt-5">
        <Disqus />
      </div>
    </div>
    <div v-else>
      <Category
        framework="CSS"
        description="CSS can be a little bit of a pain. Which is to say, it has long been both underused and difficult for"
      ></Category>

      <div class="bd-content order-1 py-5">
          <Framework :frameworks="frameworks" />
      </div>
    </div>
  </div>
  
 <!-- 14 frameworks https://geekflare.com/best-css-frameworks/ -->
</template>
<script>
export default {
  components: {},
  async asyncData({ $content, params }) {
    const framework = await $content(
      "frameworks/css",
      { deep: true },
      params.slug
    ).fetch();
    const frameworks = await $content(
      "frameworks/css",
      { deep: true },
      params.slug
    )
      .only(["title", "image", "language", "description", "slug"])
      .fetch();
    return { framework, frameworks };
  },
  head() {
    return {
      title: `Framework/${
        this.framework.title
          ? this.framework.language + "/" + this.framework.title
          : this.frameworks[0].language
      }`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.framework.description,
        },
        // Open Graph
        {
          hid: "og:title",
          property: "og:title",
          content: this.framework.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.framework.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.framework.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.framework.description,
        },
      ],
    };
  },
};
</script>
