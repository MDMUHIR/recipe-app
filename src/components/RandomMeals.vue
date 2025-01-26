<script setup>
import { ref, computed, onMounted } from "vue";
import loader from "./uitools/loader.vue";
import { showLoader } from "../store/controller";

const props = defineProps({
  items: {
    type: [Array, Object],
    required: true,
  },
});

const chunkSize = ref(3);

const updateChunkSize = () => {
  if (window.innerWidth >= 1200) {
    chunkSize.value = 4;
  } else if (window.innerWidth >= 768) {
    chunkSize.value = 2;
  } else {
    chunkSize.value = 1;
  }
};

const chunkedData = computed(() => {
  const chunks = [];
  for (let i = 0; i < props.items.length; i += chunkSize.value) {
    const chunk = props.items
      .slice(i, i + chunkSize.value)
      .flatMap((obj) => obj.meals);
    chunks.push(chunk);
  }
  return chunks;
});

const mealIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`.trim());
    }
  }
  return ingredients;
};

onMounted(() => {
  updateChunkSize();
  window.addEventListener("resize", updateChunkSize);
});
</script>

<template>
  <div class="main py-2 ">
    <loader class="my-5" v-if="showLoader" />
    <div
      v-else
      id="carouselExampleCaptions"
      class="carousel slide position-relative"
    >
      <div class="carousel-indicators top-0 my-1" style="height: 5px">
        <button
          v-for="(chunk, index) in chunkedData"
          :key="index"
          type="button"
          :data-bs-target="'#carouselExampleCaptions'"
          :data-bs-slide-to="index"
          :class="[
            'translate-middle pb-1 rounded-4 border border-3 border-light ',
            index === 0 ? 'active bg-warning' : 'bg-warning',
          ]"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          v-for="(chunk, index) in chunkedData"
          :key="index"
          :class="['carousel-item', index === 0 ? 'active' : '']"
        >
          <div class="d-flex justify-content-around my-3">
            <div
              v-for="meal in chunk"
              :key="meal.idMeal"
              class="meal card border-0 bg-transparent"
              style="width: 15rem"
            >
              <div class="card text-center bg-white mt-3 position-relative">
                <div class="card-link bg-warning-subtle rounded-bottom">
                  <router-link
                    :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
                    class="text-decoration-none text-dark"
                  >
                    <div class="text-decoration-none text-dark">
                      <img
                        :src="meal.strMealThumb"
                        class="card-img-top"
                        :alt="meal.strMeal"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{{ meal.strMeal }}</h5>
                        <p class="card-text">
                          Category: {{ meal.strCategory }}
                        </p>
                      </div>
                    </div>
                  </router-link>
                </div>
                <div
                  class="card-button m-1 position-absolute bottom-0 start-0 end-0"
                >
                  <!-- <a href="" @click="alertTxt()" class="btn btn-success w-100"
                  >Order</a
                > -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev justify-content-start position-absolute top-50 start-0 translate-middle"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bg-black border rounded-start-pill h-50 w-75 p-10 position-absolute top-50 start-0 translate-middle"
          aria-hidden="true"
        ></span>
      </button>
      <button
        class="carousel-control-next justify-content-end position-absolute top-50 start-100 translate-middle"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bg-black border rounded-end-pill h-50 w-75 p-10 position-absolute top-50 start-100 translate-middle"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  </div>
</template>

<style l scoped></style>
