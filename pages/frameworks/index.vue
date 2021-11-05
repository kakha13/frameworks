<template>
  <main class="container">
    <div class="pt-5 border-bottom">
      <h1 >Frameworks</h1>
      <p class="fs-5 col-md-8">
        Quickly and easily get started with Bootstrap's compiled,
        production-ready files with this barebones example featuring some basic
        HTML and helpful links. Download all our examples to get started.
      </p>
    </div>

    <div class="bd-content pt-5">
        <h2 class="pb-3">Languages</h2>
        <div class="row gx-3">
              <div v-for="cat in categories" :key="cat.slug" class="col-sm-6 col-md-4 mb-3" >
                <div class="card p-3">
                  <div class="d-inline-flex align-self-center flex-row">
                    <Logo
                      :src="require(`~/assets/logos/${cat[0].language.toLowerCase()}.svg`)"
                      :title="cat[0].language"
                      class="flex-shrink-0"
                    />
                    <NuxtLink :to="`/frameworks/${cat[0].language.toLowerCase()}`" class="text-primary text-decoration-none h4 flex-grow-1 ms-3">{{cat[0].language.toUpperCase()}}</NuxtLink>
                </div>
                </div>
            </div>
          </div>
    </div>
    
    <div class="bd-content pt-5">
      <h2 class="pb-3">Frameworks</h2>
      <Framework :frameworks="frameworks" />
    </div>
    <NuxtChild/>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {

    function groupBy(arr, criteria) {
        const newObj = arr.reduce(function (acc, currentValue) {
            if (!acc[currentValue[criteria]]) {
            acc[currentValue[criteria]] = [];
            }
            acc[currentValue[criteria]].push(currentValue);
            return acc;
        }, {});
        return newObj;
    }

    const frameworks = await $content('frameworks',{ deep: true }, params.slug)
      .only(['title', 'description','image', 'slug','language'])
      .fetch()
    
    const categories = groupBy(frameworks, "language")
    

    return {
      frameworks,categories
    }
  },
  head () {
    return {
      title: 'Frameworks/'
      
    }
  }
}
</script>
