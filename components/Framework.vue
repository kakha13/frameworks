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
          :to="`${item.path}`"
          class="text-primary text-decoration-none h4 flex-grow-1 ms-3"
          >{{ item.title }}</NuxtLink
        >
      </div>
      <div class="card-body pt-0">
      <p>{{ item.description }}</p>
      </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    props: ['frameworks']
};
</script>

<style>
</style>