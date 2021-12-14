<template>
    <main>
        <div class="container">
            <div class="bg-white p-5 my-2 my-lg-5 rounded text-left border-bottom">
                <div class="mx-auto">
                    <h1 class="text-dark">Welcome Frameworks Catalog</h1>
                    <p class="py-3 fs-4 col-md-8">
                        You can look for your type frameworks in any programming languages
                        and get latest information about best frameworks
                    </p>
                    <NuxtLink
                        to="/frameworks"
                        class="btn bg-indigo text-light btn-lg px-4"
                    >Explore Frameworks</NuxtLink>

                    <div class="row align-items-center g-0 mt-5">
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
                        <div class="d-flex align-items-center">
                            <span
                                class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4"
                            >
                                <i
                                    class="material-icons flex-shrink-0 fs-1 align-center align-self-center text-indigo"
                                >change_history</i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semi-bold">3 Languages</h4>
                                <p class="mb-0">Find frameworks from many programming languages</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 mb-lg-0 mb-4">
                        <div class="d-flex align-items-center">
                            <span
                                class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4"
                            >
                                <i
                                    class="material-icons flex-shrink-0 fs-1 align-center align-self-center text-indigo"
                                >category</i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semi-bold">Frameworks</h4>
                                <p class="mb-0">Find the right framework for you</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-12">
                        <div class="d-flex align-items-center">
                            <span
                                class="icon-sahpe icon-lg bg-light-warning rounded-circle text-center text-dark-warning fs-4"
                            >
                                <i
                                    class="material-icons flex-shrink-0 fs-1 align-center align-self-center text-indigo"
                                >reviews</i>
                            </span>
                            <div class="ms-3">
                                <h4 class="mb-0 fw-semi-bold">Reviews</h4>
                                <p class="mb-0">Give reviews to your favorite frameworks</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
       
        <section class="container mb-5">
            <div class="bd-content">
                <h2 class="pb-3 text-gray border-bottom">
                    Popular Languages
                    <NuxtLink to="/frameworks" class="text-decoration-none fs-6">More  →</NuxtLink>
                </h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
                    <div class="col-sm-6 col-md-4 mb-0 mb-lg-3">
                        <div class="card p-3">
                            <div class="d-inline-flex align-self-start flex-row">
                                <Logo
                                    image="javascript.svg"
                                    title="Javascript"
                                    class="flex-shrink-0"
                                    />
                                <NuxtLink
                                    to="/frameworks/javascript"
                                    class="text-primary text-decoration-none h4 flex-grow-1 ms-3"
                                >JAVASCRIPT</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 mb-0 mb-lg-3">
                        <div class="card p-3 ">
                            <div class="d-inline-flex align-self-start flex-row">
                                <Logo
                                    image="css.svg"
                                    alt="css"
                                    class="f-logo flex-shrink-0"
                                />
                                <NuxtLink
                                    to="/frameworks/css"
                                    class="text-primary text-decoration-none h4 flex-grow-1 ms-3"
                                >CSS</NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 mb-0 mb-lg-3">
                        <div class="card p-3 ">
                            <div class="d-inline-flex align-self-start flex-row">
                                <Logo
                                    image="php.svg"
                                    alt="php"
                                    class="f-logo flex-shrink-0"
                                />
                                <NuxtLink
                                    to="/frameworks/php"
                                    class="text-primary text-decoration-none h4 flex-grow-1 ms-3"
                                >PHP</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="bd-content">
                <h2 class="py-3 text-gray border-bottom">
                    Popular Framworks
                    <NuxtLink to="/frameworks" class="text-decoration-none fs-6">
                        More
                        →
                    </NuxtLink>
                </h2>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
                    <div v-for="item of popular" :key="item.name" class="col-sm-6 col-md-4 mb-0 mb-lg-3">
                        <div class="card p-3">
                            <div class="d-inline-flex align-self-start flex-row">
                                <Logo
                                    :image="`${item.name.toLowerCase()}.svg`"
                                    :alt="item.name"
                                    class="f-logo flex-shrink-0"
                                />
                                <NuxtLink :to="item.link"
                                    class="text-primary text-decoration-none h4 flex-grow-1 ms-3"
                                >{{item.name}}</NuxtLink>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section class="container mb-5">
            <div class="row">
                <div class="col-md-8">
                    <h2 class="pb-3 text-gray">Blogs</h2>
                    <Blogs :blogs="blogs" />
                </div>
              <div class="col-md-4">
                  <h2 class="pb-3 text-gray">Our Partners</h2>
                <div class="row gx-3">
                    <ul>
                        <li class="list-unstyled">
                            <a
                                href="https://any.ge"
                                class="fs-5 text-decoration-none"
                                target="_blank"
                            >any.ge online services</a>
                        </li>
                        <li class="list-unstyled">
                            <a
                                href="https://ergaleia.net/"
                                class="fs-5 text-decoration-none"
                                target="_blank"
                            >Ergaleia.net Free Online Web Tools</a>
                        </li>
                        <li class="list-unstyled">
                            <a
                                href="https://neverhaveiever.online"
                                class="fs-5 text-decoration-none"
                                target="_blank"
                            >Never Have I Ever Online - Questions & Game</a>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData ({ $content, params }) {
    
    const popular = [
        {
            name:"Vue",
            link:"/frameworks/javascript/vue",
        },
        {
            name:"Angular",
            link:"/frameworks/javascript/angular",
        },
        {
            name:"Bootstrap",
            link:"/frameworks/css/bootstrap",
        },
    ]

    const blogs = await $content('blogs',{ deep: true }, params.slug)
      .only(['title', 'description','author', 'slug','createdAt'])
      .sortBy('date','desc')
      .limit(5)
      .fetch()

    return {
      blogs,popular
    }
  },
    head() {
        return {
            titleTemplate: '%s - Main Page',
        };
    },
};
</script>

<style>
</style>

