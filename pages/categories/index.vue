<template>
  <main class="container">
    <div class="py-5 border-bottom">
      <h1 class="text-indigo">Frameworks Categories</h1>
      <p class="fs-5 col-md-8">
        Quickly and easily get started with Bootstrap's compiled,
        production-ready files with this barebones example featuring some basic
        HTML and helpful links. Download all our examples to get started.
      </p>
    </div>

    <div class="bd-content order-1 py-5">
      <div class="row">
         
           <div class="col-sm-12 col-md-3 mb-5" v-for="item in files" :key="item.slug">
   
                    <Logo :image="require(`~/assets/logos/${item[0].language.toLowerCase()}.svg`)" :title="item[0].language"></Logo>
                    <h4 class="text-uppercase">{{ item[0].language }}</h4>
                    <h6 class="mb-2 text-muted"> {{ item[0].category }}</h6>
                    <p class="card-text">{{`${item[0].title} ${item[1]?item[1].title:''}...`}}</p>
                   
                    <NuxtLink :to="`categories/${item[0].language.toLowerCase()}`">
                        More
                    </NuxtLink>
            </div>
        </div>
    </div>
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
        
    const files = await $content('frameworks',{ deep: true }).fetch()

    let newFiles = groupBy(files, "language")

    return { files: newFiles }
    
  }
}
</script>

<style scoped>
.masthead-followup-icon {
    background-image: linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0.01));
    border-radius: .75rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.1);
}
</style>