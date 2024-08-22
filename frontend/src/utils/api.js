import axios from 'axios';

const API_KEY = '9289dfd4402a4a7fbc80063d0dabffba';
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
