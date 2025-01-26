<script setup>
import { useRoute } from "vue-router";
import Meals from "../../components/Meals.vue";

import { data } from "../../store/state";
import { searchMealsByLetter } from "../../store/actions";
import loader from "../../components/uitools/loader.vue";
import { showLoader } from "../../store/controller";

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>

<template>
  <div class="container-md p-1 rounded   bg-opacity-50" >
    <div
      class="searchByLetter mt-3 d-flex justify-content-center list-group border border-warning border-opacity-25"
    >
      <div class="list-group-item text-center">
        <h5 class="text-dark mb-2">To search meals click on the letters</h5>
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          v-for="letter of letters"
          :key="letter"
          @click="searchMealsByLetter(letter)"
          class="text-decoration-none p-2 m-1 fs-4 btn btn-outline-dark shadow"
          style="width: 40px"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
    <div
      class="inventory mt-2 d-flex flex-column align-items -center justify-content-center"
    >
      <loader class="p-5 mt-5" v-if="showLoader" />
      <h5
        v-else-if="!showLoader && data.error"
        class="text-danger bg-white p-2 mt-5 rounded text-center"
      >
        {{ data.error }} with "{{ route.params.letter }}"
      </h5>

      <Meals v-else :items="data.searchedMeals" />
    </div>
  </div>
</template>

<style scoped>


.searchByLetter {
  max-width: 100% !important;
}
</style>
