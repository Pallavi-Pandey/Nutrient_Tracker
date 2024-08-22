import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalizedRecommendations = ({ nutrients, goals }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      const deficiencies = {
        carbs: goals.carbs - nutrients.carbs,
        protein: goals.protein - nutrients.protein,
        fat: goals.fat - nutrients.fat,
      };

      let query = '';
      if (deficiencies.carbs > 0) query += 'carbs,';
      if (deficiencies.protein > 0) query += 'protein,';
      if (deficiencies.fat > 0) query += 'fat,';

      if (query) {
        const response = await axios.get(`https://api.spoonacular.com/food/ingredients/search`, {
          params: {
            query,
            apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
          },
        });
        setRecommendations(response.data.results);
      }
    };

    fetchRecommendations();
  }, [nutrients, goals]);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <ul>
        {recommendations.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedRecommendations;
