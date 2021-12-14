<template>
  <main class="container">
    <div class="bg-white p-5 my-2 my-lg-5 rounded text-left border-bottom">
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
              <div v-for="cat in categories" :key="cat" class="col-sm-6 col-md-4 mb-3" >
                <div class="card p-3">
                  
                  <div class="d-inline-flex align-self-start flex-row">
                    <Logo
                      :image="`${cat}.svg`"
                      :title="cat"
                      class="flex-shrink-0"
                    />
                    <NuxtLink :to="`/frameworks/${cat}/`" class="text-primary text-decoration-none h4 flex-grow-1 ms-3">{{cat.toUpperCase()}}</NuxtLink>
                </div>
                </div>
            </div>
          </div>
    </div>
    
    <div class="bd-content pt-5">
      <h2 class="pb-3">Frameworks</h2>
      <Framework :frameworks="frameworks" languages="1" />
    </div>
  </main>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    // function groupBy(arr, criteria) {
    //     const newObj = arr.reduce(function (acc, currentValue) {
    //         if (!acc[currentValue[criteria]]) {
    //         acc[currentValue[criteria]] = [];
    //         }
    //         if(currentValue) acc[currentValue[criteria]].push(criteria);
    //         return acc;
    //     }, {});
    //     return newObj;
    // }

    const frameworks = await $content('frameworks',{ deep: true }, params.slug)
      .only(['title', 'description','image','path', 'slug','language'])
      .fetch()
      
    // const categories = groupBy(frameworks, "language")
    const categories = [
      'javascript','css','php'
    ]
    return {
      frameworks,categories
    }
  },
  head () {
    return {
      titleTemplate: 'Frameworks - %s',
      
    }
  }
}
</script>
