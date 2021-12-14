<template>
  <div class="container">
    <div v-if="framework.title" class="frameworks">
      <FrameworkHeader :framework="framework"/>
      <nuxt-content :document="framework"  />
      <div class="comments mt-5">
          <Disqus />
      </div>
    </div>
    <div v-else>
      <Category
        framework="Javascript"
        description="Javascript is a language that has grown to become one of the most useful and popular programming languages on the web."
      ></Category>

      <div class="bd-content order-1 py-5">
        <Framework :frameworks="frameworks" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const framework = await $content(
      "frameworks/javascript",
      params.slug
    ).fetch();
    
    const frameworks = await $content(
      "frameworks/javascript",
      { deep: true },
      params.slug
    )
    .only(["title", "image", "language", "description", "slug"])
    .fetch();

    return { framework, frameworks };
  },
  
  head() {
    return {
      titleTemplate: this.framework.title ? this.framework.title+' - %s' : this.frameworks[0].language+' - %s',
    
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