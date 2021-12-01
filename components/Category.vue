<template>
  <div class="bg-white p-5 my-2 my-lg-5 rounded text-left border-bottom">
        <div class="d-inline-flex align-self-center flex-row align-items-center">
          <Logo :image="`${framework.toLowerCase()}.svg`" :title="framework" class="flex-shrink-0 border-0 img-fluid img-thumbnail"/>
          <h2 class="flex-grow-1 ms-3" style="justify-content: center;">{{framework}}</h2>
        </div>
      
        <p class="fs-5 col-md-8">
          {{description}}
        </p>
  </div>
</template>

<script>
export default {
    props: {
        framework: {
        type: String,
        default: ''
        },
        description: {
        type: String,
        default: ''
        }
    }
}
</script>

<style>

</style>