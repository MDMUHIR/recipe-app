<script setup>
import RandomMeals from "../../components/RandomMeals.vue";
import loader from "../../components/uitools/loader.vue";
import Service from "../../components/Service.vue";
import { getMealsRandomly } from "../../store/actions";
import { data } from "../../store/state";

getMealsRandomly();
</script>

<template>
  <div class="main">
    <div class="container-md">
      <div class="heading bg-white p-3 rounded mt-3">
        <div class="heading-top d-flex justify-content-around w-100">
          <div class="h-logo w-25 text-end">
            <img
              class="heading-logo w-25"
              src="../../../public/Images/meal-icon.png"
              alt=""
            />
          </div>
          <div class="h-text text-center mt-3">
            <h4 class="">
              Welcome to
              <span class="navbar-brand fw-bold text-danger fst-italic"
                >HoMe Meal</span
              >
            </h4>
          </div>
          <div class="h-logo w-25">
            <img
              class="heading-logo w-25"
              src="../../../public/Images/meal-icon.png"
              alt=""
            />
          </div>
        </div>
        <div class="heading-bottom p-2 pb-0">
          <figure class="text-end">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="home-body border mt-4 p-1 bg-dark bg-opacity-50">
        <h2 class="bg-warning-subtle text-center p-2 mx-1 mb-3 rounded-4">
          🍴Random Meals🍴
        </h2>

        <div class="">
          <div class="">
            <RandomMeals :items="data.randomMeals" />
          </div>
        </div>
      </div>

      <div
        class="end bg-white bg-opacity-75 mt-4 p-2 text-center rounded-bottom"
      >
        <Service />
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-text {
  width: 315px;
}
</style>
