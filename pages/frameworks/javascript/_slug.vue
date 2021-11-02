<template>
  <div class="container">
    <div v-if="framework.image" class="frameworks">
      <Logo :src="require(`~/assets/logos/${framework.image}`)" :title="framework.title"/>
      <nuxt-content :document="framework" />
    </div>
    <div v-else>
      <div class="py-5 border-bottom">
        <div class="d-inline-flex align-self-center flex-row align-items-center">
          <Logo :image="require(`~/assets/logos/javascript.svg`)" title="Javascript" class="flex-shrink-0 img-fluid img-thumbnail"/>
          <h2 class="text-primary flex-grow-1 ms-3" style="justify-content: center;">Javascript</h2>
        </div>
      
        <p class="fs-5 col-md-8">
          Javascript is a language that has grown to become one of the most useful and popular programming languages on the web. 
        </p>
    </div>

    <div class="bd-content order-1 py-5">
      <div class="row">
        <article v-for="item in frameworks" :key="item.slug" class="col-sm-12 col-md-4 mb-5">
          <div class="d-inline-flex align-self-center flex-row">
            <Logo :image="require(`~/assets/logos/${item.image}`)" title="Javascript" class="flex-shrink-0"/>
            <h3 class="text-primary flex-grow-1 ms-3">{{item.title}}</h3>
          </div>
          <p>{{ item.description }}</p>
          <NuxtLink :to="`${item.path}`"
          >
            Read More
          </NuxtLink>
        </article>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData ({ $content, params }) {
    const framework = await $content('frameworks/javascript', { deep: true }, params.slug).fetch()
    const frameworks = await $content('frameworks/javascript',{ deep: true }, params.slug)
      .only(['title', 'image','language','description', 'slug'])
      .fetch()
    return { framework ,frameworks}
  },
  head () {
    return {
      title: `Framework/${this.framework.title ? this.framework.language+'/'+this.framework.title : this.frameworks[0].language}`,
      meta: [
        { hid: 'description', name: 'description', content: this.framework.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.framework.title },
        { hid: 'og:description', property: 'og:description', content: this.framework.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.framework.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.framework.description }
      ]
    }
  }
}
</script>
