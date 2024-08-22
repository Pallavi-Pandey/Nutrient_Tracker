import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodLog = ({ log, goals }) => {
  const [nutrients, setNutrients] = useState({
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
    vitamins: {},
  });

  useEffect(() => {
    const calculateNutrients = async () => {
      let totalCalories = 0;
      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;
      let vitamins = {};

      for (let food of log) {
        const response = await axios.get(`https://api.spoonacular.com/food/nutrition`, {
          params: {
            id: food.id,
            apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
          },
        });
        const data = response.data;
        totalCalories += data.calories;
        totalCarbs += data.carbs;
        totalProtein += data.protein;
        totalFat += data.fat;
        // Handle vitamins and other nutrients
      }

      setNutrients({
        calories: totalCalories,
        carbs: totalCarbs,
        protein: totalProtein,
        fat: totalFat,
        vitamins,
      });
    };

    calculateNutrients();
  }, [log]);

  return (
    <div>
      <h2>Daily Food Log</h2>
      <ul>
        {log.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <div>
        <h3>Total Nutrients</h3>
        <p>Calories: {nutrients.calories}/{goals.calories}</p>
        <p>Carbs: {nutrients.carbs}/{goals.carbs}g</p>
        <p>Protein: {nutrients.protein}/{goals.protein}g</p>
        <p>Fat: {nutrients.fat}/{goals.fat}g</p>
        {/* Render vitamins and micronutrients */}
      </div>
    </div>
  );
};

export default FoodLog;
