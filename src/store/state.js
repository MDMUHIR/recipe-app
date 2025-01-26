import { reactive } from "vue";

const data = reactive({
  searchedMeals: [],
  randomMeals: [],
  mealDetails: {},
  error: "",
});

export { data };
