<template>
    <div class="container my-2 my-lg-5">
        <div class="row">
        <div class="col-12 col-lg-9 ">
            <article>
                <h1>{{ article.title }}</h1>
                <p>{{ article.description }}</p>
                <img :src="article.img" :alt="article.alt" class="img-fluid" />
                <div class="mb-3"><time class="text-muted">updated: {{ formatDate(article.updatedAt) }}</time></div>

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
        <div class="col-12 col-lg-3">
            <h5 class="text-secondary py-2">Blog</h5>
            <ul class="list-group">
                <li class="list-group-item" v-for="item of blogs" :key="item.title">
                    <nuxt-link :to="`/blog/${item.slug}`" class="text-decoration-none text-dark">{{item.title}}</nuxt-link>
                </li>
            </ul>
        </div>
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

        const blogs = await $content('blogs')
        .only(['title','slug'])
        .sortBy('date','desc')
        .limit(5)
        .fetch()

        return {
            article,
            blogs,
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