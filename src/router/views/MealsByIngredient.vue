<template>
  <div class="container">
    <div class="inventory mt-2">
      <!-- -->
      <Meals :items="data.searchedMeals" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import { useRoute } from "vue-router";
import Meals from "../../components/Meals.vue";
import { searchMealsByIngredient } from "../../store/actions";
import { data } from "../../store/state";

const route = useRoute();

onMounted(() => {
  searchMealsByIngredient(route.params.ingredient);
});
</script>

<style></style>
