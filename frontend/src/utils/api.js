import axios from 'axios';

const API_KEY = '9be71985b80941debeb59b8dfd2d5e75';
const BASE_URL = 'https://api.spoonacular.com/food/ingredients';

export const searchFood = (query) => {
  return axios.get(`${BASE_URL}/autocomplete`, {
    params: {
      query,
      number: 5,
      apiKey: API_KEY
    }
  });
};

// Add other API functions if needed
