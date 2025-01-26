import axiosClient from "../axiosClient";
import { data } from "../store/state";
import { showLoader } from "./controller";

export const searchMealsByName = (key) => {
  showLoader.value = true;
  const res = axiosClient.get(`search.php?s=${key}`);

  res
    .then((response) => {
      console.log(response);
      data.searchedMeals = response.data;
      // console.log(data.searchedMeals);
      if (data.searchedMeals.meals === null) {
        data.error = "No meal found";
      } else {
        data.error = "";
      }
      showLoader.value = false;
    })
    .catch((error) => {
      console.error(error);
      data.error = "An error occurred while fetching meals.";
      showLoader.value = false;
    });
};

export const searchMealsByLetter = (letter) => {
  showLoader.value = true;

  const res = axiosClient.get(`search.php?f=${letter}`);

  res
    .then((response) => {
      console.log(response);
      data.searchedMeals = response.data;

      if (data.searchedMeals.meals === null) {
        data.error = "No meal found";
      } else {
        data.error = "";
      }
      showLoader.value = false;
    })
    .catch((error) => {
      console.error(error);
      data.error = "An error occurred while fetching meals.";
      showLoader.value = false;
    });
};
export const searchMealsByIngredient = (ingr) => {
  const res = axiosClient.get(`filter.php?i=${ingr}`);

  res.then((response) => {
    console.log(response);
    data.searchedMeals = response.data;
  });
};

export const getMealsRand9omly = () => {
  const res = axiosClient.get(`random.php`);
  res.then((response) => {
    console.log(response);

    data.randomMeals = response.data;
  });
};

export const getMealsRandomly = async () => {
  try {
    showLoader.value = true;
    const requests = Array.from({ length: 12 }, () =>
      axiosClient.get(`random.php`)
    );
    const responses = await Promise.all(requests);
    data.randomMeals = responses.map((response) => response.data);
    // console.log(data.randomMeals);
    showLoader.value = false;
  } catch (error) {
    console.error("Error fetching random meals:", error);
    showLoader.value = false;
  }
};
