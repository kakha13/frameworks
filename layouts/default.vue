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

li:hover a {
  color:var(--bs-blue) !important
}

.img-thumbnail {
    height: 80px !important;
    min-width: 80px !important;
    padding: 10px;
}
.card {
    border: 0 !important;
    box-shadow: 0 1px 3px rgb(3 0 71 / 9%);    
    word-wrap: break-word;
    background-clip: border-box;
    background-color:#fff;
    border: 1px solid #ecebf1;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    min-width: 0;
    position: relative;
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
</style>
