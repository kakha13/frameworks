<template>
  <header>
    <div class="px-3 py-2 bg-dark text-white">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <div class="container">
        <div
          class="
            d-flex
            flex-wrap
            align-items-center
            justify-content-center justify-content-lg-start
          "
        >
          <a
            href="/"
            class="
              d-flex
              align-items-center
              my-2 my-lg-0
              me-lg-auto
              text-white text-decoration-none
            "
          >
            <h2 class="fw-bold">FC</h2>
          </a>

          <ul
            class="
              nav
              col-12 col-lg-auto
              my-2
              justify-content-center
              my-md-0
              text-small
            "
          >
            <li>
              <a href="/" class="nav-link text-light">
                <span
                  class="d-block mx-auto mb-1 text-center material-icons-round"
                >home</span>
                Home
              </a>
            </li>
            <li>
              <a href="/frameworks" class="nav-link text-center text-light">
                <span
                  class="d-block mx-auto mb-1 text-center material-icons-round"
                >category</span>
                Frameworks
              </a>
            </li>
            <li>
              <a href="/about" class="nav-link text-light">
                <span
                  class="d-block mx-auto mb-1 text-center material-icons-round"
                >info</span>
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2 border-bottom mb-3">
      <div class="container d-flex flex-wrap justify-content-center">
        <div class="col-12 col-lg-3 mb-lg-0 me-lg-auto">
          <Search/>
        </div>
      </div>
    </div>
  </header>
</template>

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

.dropdown-toggle {
  outline: 0;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
