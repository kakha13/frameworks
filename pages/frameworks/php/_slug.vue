<template>
  <div class="container">
    <div v-if="framework.title" class="frameworks">
      <FrameworkHeader :framework="framework"/>
      <nuxt-content :document="framework"  />
      <div class="comments mt-5">
          <!-- <Disqus /> -->
      </div>
    </div>
    <div v-else>
      <Category
        framework="PHP"
        description="PHP is a popular general-purpose scripting language that is especially suited to web development.
        Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world."
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
      "frameworks/php",
      params.slug
    ).fetch();
    
    const frameworks = await $content(
      "frameworks/php",
      { deep: true },
      params.slug
    )
    .only(["title", "image", "language", "path","description", "slug"])
    .fetch();

    return { framework, frameworks };
  },
  
  head() {
    return {
      titleTemplate: this.framework.title ?  + this.framework.title+' - %s' : this.frameworks[0].language+' - %s',
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