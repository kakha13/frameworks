<template>
    <div class="container">
        <article>
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <img :src="article.img" :alt="article.alt" class="img-fluid" />
            <p>updated: {{ formatDate(article.updatedAt) }}</p>

            <nuxt-content :document="article" />
        </article>
        <div class="d-flex justify-content-center">
            <NuxtLink
            v-if="prev"
            :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            class="fw-bold text-primary text-decoration-none"
            >
            ← {{ prev.title }}
            </NuxtLink>
            <span v-else>&nbsp;</span>
            <NuxtLink
            v-if="next"
            :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            class="fw-bold text-primary text-decoration-none"
            >
            {{ next.title }} →
            </NuxtLink>
            <span v-else>&nbsp;</span>
        </div>
        <div class="comments mt-5">
            <Disqus />
        </div>
    </div>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('blogs', params.slug).fetch()

        const [prev, next] = await $content('blogs')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()
            
        return {
            article,
            prev,
            next
        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    },
    head() {
    return {
      title: this.article.title + ' - Blog',
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  }
}
</script>