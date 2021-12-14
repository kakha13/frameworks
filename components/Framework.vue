<template>
  <div class="row gx-3">
    <article
      v-for="item in frameworks"
      :key="item.slug"
      class="col-sm-12 col-lg-4 mb-3"
    >
    <div class="card">
      
      <div class="d-inline-flex align-self-start flex-row card-body">
        <Logo
          :image="item.image"
          title="css"
          class="flex-shrink-0"
        />

        <NuxtLink
          :to="`${item.path ? item.path : '/'}`"
          class="text-decoration-none h4 flex-grow-1 ms-3"
          >{{ item.title }}</NuxtLink
        >
        
      </div>
      <div class="card-body pt-0">
      <p>{{ item.description }}</p>
        <NuxtLink
          v-if="languages"
          :to="`frameworks/${item.language ? item.language.toLowerCase() : ''}`"
          class="badge bg-light text-dark text-decoration-none rounded-pill"
          >{{ item.language.toUpperCase() }}</NuxtLink
        >
      </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    props: ['frameworks','languages']
};
</script>

<style>
</style>