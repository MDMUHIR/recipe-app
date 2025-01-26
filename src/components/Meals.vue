<script setup>
const props = defineProps({
  items: {
    type: [Array, Object],
    required: true,
  },
});
</script>

<template>
  <div class="row d-flex justify-content-around p-1">
    <div
      v-for="(meal, index) in props.items.meals"
      :key="index"
      class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
    >
      <div
        class="card text-center bg-white mt-3 position-relative bg-transparent shadow-lg "
      >
        <div class="card-link bg-warning-subtle rounded">
          <router-link
            :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
            class="text-decoration-none text-dark"
          >
            <div class="text-decoration-none text-dark">
              <img
                :src="meal.strMealThumb"
                class="card-img-top border"
                :alt="meal.strMeal"
              />
              <div class="card-body p-2">
                <h5 class="card-title">{{ meal.strMeal }}</h5>
                <p class="card-text fst-italic">{{ meal.strCategory }}</p>
              </div>
            </div>
          </router-link>
        </div>
        <div
          class="card-button m-1 position-absolute bottom-0 start-0 end-0"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
