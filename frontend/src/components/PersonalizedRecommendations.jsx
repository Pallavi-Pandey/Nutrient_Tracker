// src/components/PersonalizedRecommendations.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonalizedRecommendations = ({ nutrients, goals }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
          params: {
            // Example parameters, adjust based on actual API usage
            minCalories: goals.calories - nutrients.calories,
            maxCalories: goals.calories * 2, // Or another reasonable range
            apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
          },
        });
        setRecommendations(response.data.results);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [nutrients, goals]);

  return (
    <div>
      <h2>Personalized Recommendations</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>
            <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
              {recipe.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedRecommendations;
