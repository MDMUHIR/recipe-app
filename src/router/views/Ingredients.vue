<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../../axiosClient";
import { searchMealsByIngredient } from "../../store/actions";
import { data } from "../../store/state";
const ingredients = ref([]);
const keyword = ref("");

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
  axiosClient.get("list.php?i=list").then(({ data }) => {
    // debugger;
    ingredients.value = data.meals;
  });
});
</script>

<template>
  <div>
    <div class="container text-center">
      <div class="ingredients list-group mt-3">
        <h1 class="text-white rounded-5 mb-3 bg-danger pb-2 m-0">
          🥄 Ingredients :🥄
        </h1>
        <!--  -->
        <div class="searchPart">
          <input
            class="form-control mb-2 text-center"
            type="search"
            placeholder="Search For Ingredients"
            aria-label="Search"
            v-model="keyword"
          />
        </div>
        <router-link
          @click="searchMealsByIngredient(ingredient.strIngredient)"
          :to="{
            name: 'byIngredient',
            params: { ingredient: ingredient.strIngredient },
          }"
          v-for="ingredient of computedIngredients"
          :key="ingredient.idIngredient"
          class="list-group-item list-group-item-action rounded-4 mb-2"
        >
          <h3 class="fst-italic fw-semibold text-danger">
            {{ ingredient.strIngredient }}
          </h3>
          <p>{{ ingredient.strDescription }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style></style>
