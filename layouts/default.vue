<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Round" rel="stylesheet">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
.text-indigo {
  color:var(--bs-indigo)
}

li:hover a {
  color:var(--bs-blue) !important
}

.img-thumbnail {
    height: 80px !important;
    min-width: 80px !important;
    padding: 10px;
}
</style>
