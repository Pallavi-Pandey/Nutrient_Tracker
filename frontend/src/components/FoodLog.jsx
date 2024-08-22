// src/components/FoodLog.jsx
import React from 'react';

const FoodLog = ({ log, goals, nutrients }) => {
  return (
    <div>
      <h2>Food Log</h2>
      <ul>
        {log.map((food, index) => (
          <li key={index}>
            {food.name} (Serving Size: {food.servingSize})
          </li>
        ))}
      </ul>
      <div>
        <h3>Current Nutrients:</h3>
        <p>Calories: {nutrients.calories}</p>
        <p>Carbs: {nutrients.carbs}</p>
        <p>Protein: {nutrients.protein}</p>
        <p>Fat: {nutrients.fat}</p>
      </div>
    </div>
  );
};

export default FoodLog;
