<template>
  <div class="container mt-1 mb-3 d-flex justify-content-center">
    <div class="card p-2 mt-5">
      <div class="row g-0">
        <div
          class="col-md-4 d-flex flex-column justify-content-center align-items-start text-center"
        >
          <img
            :src="meal.strMealThumb"
            class="img-fluid rounded-start"
            alt="..."
          />
          <h4 class="card-title mt-1 display-6">{{ meal.strMeal }}</h4>
        </div>
        <div class="col-md-8">
          <div class="card-body ">
            <p class="card-text border p-2">
              {{ meal.strInstructions }}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">Last updated : 3 hours ago</small>
            </p>
            <ul
              class="d-flex justify-content-around ps-0 border border-success p-2 mb-2 border-opacity-50"
            >
              <li class="list-group-item  fst-italic">
                <span>Category:</span> {{ meal.strCategory }}
              </li>
              <li class="list-group-item  fst-italic">
                <span>Origin:</span> {{ meal.strArea }}
              </li>
              <li class="list-group-item  fst-italic">
                <span>Tag:</span> {{ meal.strTags }}
              </li>
            </ul>
            <div class="card-body d-flex justify-content-around">
              <a :href="meal.strYoutube" class="btn btn-danger">YouTube</a>
              <a :href="meal.strSource" class="btn btn-success float-end"
                >Order Now</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../../axiosClient";

const route = useRoute();
const meal = ref({});

// const getMealDetails = () => {
//   const res = axiosClient.get(`lookup.php?i=${route.params.id}`);
//   res.then((response) => {
//     console.log(response);
//     meal.value = response.data;
//   });
// };

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style></style>
