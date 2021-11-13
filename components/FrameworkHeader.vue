<template>
  <div class="my-3 my-lg-5 border-bottom">
    <div class="row">
      <div
        class="
          col-md-8
          col-sm-12
          d-inline-flex
          align-self-center
          flex-row
          align-items-center
        "
      >
        <Logo
          :image="framework.image.toLowerCase()"
          :title="framework.title"
          class="flex-shrink-0 img-fluid img-thumbnail"
        />
        <h2
          class="text-primary flex-grow-1 ms-3"
          style="justify-content: center"
        >
          {{ framework.title }}
        </h2>
      </div>

      <div class="col-md-4 col-sm-12 pt-3 pt-lg-0 align-self-center ">
        <Rating :framework="framework" />
      </div>
    </div>

    <p class="fs-5 col-md-8 mt-3">
      {{ framework.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    framework: {
      type: Object,
      default: "",
    },
  },
};
</script>

<style>
</style>