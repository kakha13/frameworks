<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <NuxtLink to="/" class="d-none d-lg-block align-items-center text-decoration-none px-2">
              <h4 class="m-auto text-white fw-bold">FC</h4>
          </NuxtLink>
          <div class="d-lg-none dropdown">
            <a 
              @click="dropdownShow = !dropdownShow"
              class="d-flex align-items-center col-lg-4 mb-lg-0 link-dark text-decoration-none"
            >
              <h4 class="me-2 text-white fw-bold">FC</h4>
              <span class="after me-2 d-lg-none"></span>
            </a>
            <ul
              :class="`dropdown-menu text-small shadow ${dropdownShow ? 'show' : ''}`"
              aria-labelledby="dropdownNavLink"
              style
            >
              <li >
                <nuxt-link to="/" class="dropdown-item">Home</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/frameworks/" class="dropdown-item">Frameworks</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blogs/" class="dropdown-item">Blogs</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about/" class="dropdown-item">About</nuxt-link>
              </li>
              <li>
               <a href="https://github.com/kakha13/frameworks-catalog" class="dropdown-item">GitHub</a>
              </li>
            </ul>
          </div>

          <form class="col-10 col-lg-3 me-lg-auto mb-lg-0 me-lg-4">
            <Search />
          </form>

          <ul class="nav col-md-12 col-lg-auto mb-2 mb-md-0 d-none d-lg-flex">
            <li>
              <nuxt-link to="/" class="nav-link px-2 text-light">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/frameworks/" class="nav-link px-2 text-light">Frameworks</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs/" class="nav-link px-2 text-light">Blogs</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about/" class="nav-link px-2 text-light">About</nuxt-link>
            </li>
            <li>
              <a href="https://github.com/kakha13/frameworks" class="nav-link px-2 text-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default ({
  data() {
    return {
      dropdownShow: false
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
  color: white;
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
