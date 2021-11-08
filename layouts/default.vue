<template>
  <div class="bg-light min-vh-100">
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

.text-cyan {
  color:var(--bs-cyan)
}

.text-gray {
  color:var(--bs-gray-800)
}
.text-gray-400 {
  color:var(--bs-gray-400)
}

li:hover a {
  color:var(--bs-blue) !important
}
.bg-indigo {
  background-color:var(--bs-indigo);
}
.f-logo {
    height: 32px;
    min-width: 32px;
}
.img-thumbnail {
    height: 80px !important;
    min-width: 80px !important;
    padding: 10px;
}
.card {
    border: 0 !important;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}
.rating-number {
  box-shadow: 0 1px 3px rgb(3 0 71 / 9%);
  border: 1px solid #ecebf1;
  padding:0 4px;
  border-radius: .5rem;
  color: var(--bs-gray-900);
  width: 45px;
  text-align: center;
  background: #fff;
}

.search {
  background-color: #f1f3fa!important;
    border-color: #f1f3fa!important;
}
</style>
