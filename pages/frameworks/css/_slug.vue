<template>
  <div class="container">
    <div v-if="framework.image" class="frameworks">
      <Logo :src="require(`~/assets/logos/${framework.image}`)" :title="framework.title"/>
      <nuxt-content :document="framework" />
    </div>
    <div v-else>
      <div class="py-5 border-bottom">
        <div class="d-inline-flex align-self-center flex-row align-items-center">
          <Logo :image="require(`~/assets/logos/css.svg`)" title="css" class="flex-shrink-0 img-fluid img-thumbnail"/>
          <h2 class="text-primary flex-grow-1 ms-3" style="justify-content: center;">css</h2>
        </div>
      
        <p class="fs-5 col-md-8">
          CSS can be a little bit of a pain. Which is to say, it has long been both underused and difficult for
        </p>
    </div>

    <div class="bd-content order-1 py-5">
      <div class="row">
        <article v-for="item in frameworks" :key="item.slug" class="col-sm-12 col-md-4 mb-5">
          <div class="d-inline-flex align-self-center flex-row">
            <Logo :image="require(`~/assets/logos/${item.image}`)" title="css" class="flex-shrink-0"/>
           
            <NuxtLink :to="`${item.path}`" class="text-primary text-decoration-none h4 flex-grow-1 ms-3">{{item.title}}</NuxtLink>
          </div>
          <p>{{ item.description }}</p>
          
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
    const framework = await $content('frameworks/css', { deep: true }, params.slug).fetch()
    const frameworks = await $content('frameworks/css',{ deep: true }, params.slug)
      .only(['title', 'language','image','description', 'slug'])
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
