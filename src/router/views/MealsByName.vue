<script setup>
import Meals from "../../components/Meals.vue";
import { computed, onMounted, ref } from "vue";
import { searchMealsByName } from "../../store/actions";
import { data } from "../../store/state";

const keyword = ref("");

import loader from "../../components/uitools/loader.vue";
import { showLoader } from "../../store/controller";
</script>

<template>
  <div class="container  Center" >
    <div class="searchPart mt-5">
      <form
        @submit.prevent="searchMealsByName(keyword)"
        class="d-flex rounded overflow-hidden"
        role="search"
      >
        <input
          class="form-control rounded-0"
          type="search"
          placeholder="Search For Meals"
          aria-label="Search"
          v-model="keyword"
        />

        <button class="btn btn-warning rounded-start-0" type="submit">
          <i class="bi bi-search-heart"></i>
        </button>
      </form>
      <!-- <input
        type="text"
        v-model="keyword"
        class="form-control"
        placeholder="Search for Meals"
        @change="searchMealsByName"
      /> -->
    </div>
    <div class="inventory mt-2 p-1 text-danger">
      <loader class="p-5 mt-5" v-if="showLoader" />
      <h5
        v-else-if="!showLoader && data.error"
        class="text-danger bg-white p-2 mt-5 rounded text-center"
      >
        {{ data.error }}
      </h5>
      <Meals v-else :items="data.searchedMeals" />
    </div>
  </div>
</template>

<style></style>
