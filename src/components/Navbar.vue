<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink
        :to="{ name: 'home' }"
        class="navbar-brand text-decoration-none fw-bold text-danger fst-italic p-0"
      >
        <img style="" src="../../public/Images/nav.png" alt="" />
        HoMe Meal</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <div
          class="d-flex flex-column flex-sm-row justify-content-between w-100"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink
                :to="{ name: 'aboutUs' }"
                class="text-decoration-none nav-link"
                aria-current="page"
              >
                About us</RouterLink
              >
            </li>
          </ul>

          <!-- Drop down -->
          <ul
            class="navbar-nav border rounded d-flex flex-row align-items-center justify-content-between ps-2"
          >
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Searching Options
              </a>
              <ul class="dropdown-menu">
                <!--  by letter -->
                <li>
                  <RouterLink
                    :to="{ name: 'byLetter' }"
                    class="dropdown-item text-decoration-none link-success fw-semibold"
                  >
                    By Letter</RouterLink
                  >
                </li>
                <!--  by Ingredients -->
                <li>
                  <RouterLink
                    :to="{ name: 'ingredients' }"
                    class="dropdown-item text-decoration-none link-success fw-semibold"
                  >
                    By Ingredients</RouterLink
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <RouterLink
                    :to="{ name: 'byName' }"
                    class="dropdown-item text-decoration-none link-success fw-semibold"
                  >
                    By Name</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item ms-2">
              <RouterLink
                :to="{ name: 'byName' }"
                class="btn btn-outline-success fw-bold text-decoration-none"
              >
                <i class="bi bi-search-heart fw-bold"></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style></style>
