<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          
          <div class="dropdown">
            <a href="#" @click="dropdownShow=!dropdownShow" class="d-flex align-items-center col-lg-4 mb-lg-0 link-dark text-decoration-none" >
             <h4 class="me-2 text-white fw-bold">FC</h4>
             <span class="after me-2 d-lg-none"></span>
            </a>
            <ul :class="`dropdown-menu text-small shadow ${dropdownShow ? 'show' : ''}`" aria-labelledby="dropdownNavLink" style="">
              <li><a class="dropdown-item" href="/frameworks">Frameworks</a></li>
              <li><a class="dropdown-item" href="/about">About</a></li>
            </ul>
          </div>

          
          <form class="col-10 col-lg-3 me-lg-auto mb-lg-0 me-lg-4">
              <Search/>
          </form>

          <ul class="nav col-md-12 col-lg-auto  mb-2 mb-md-0 d-none d-lg-flex">
            <li>
              <a href="/" class="nav-link px-2 text-light">Home</a>
            </li>
            <li>
              <a href="/frameworks" class="nav-link px-2 text-light">Frameworks</a>
            </li>
            <li>
              <a href="/about" class="nav-link px-2 text-light">About</a>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default ({
  data(){
    return {
      dropdownShow:false
    }
  }
})
</script>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.text-small {
  font-size: 85%;
}



.dropdown .after {
  color:white;
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
