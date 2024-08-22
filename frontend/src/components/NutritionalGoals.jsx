// src/components/NutritionalGoals.jsx
import React, { useState, useContext } from 'react';
import NutritionalContext from '../context/NutritionalContext';

const NutritionalGoals = () => {
  const { goals, setGoals } = useContext(NutritionalContext);
  const [localGoals, setLocalGoals] = useState(goals);

  const handleUpdate = () => {
    setGoals(localGoals);
    localStorage.setItem('nutritionalGoals', JSON.stringify(localGoals));
  };

  return (
    <div>
      <h2>Nutritional Goals</h2>
      <input
        type="number"
        value={localGoals.calories}
        onChange={(e) => setLocalGoals({ ...localGoals, calories: e.target.value })}
        placeholder="Calories"
      />
      <input
        type="number"
        value={localGoals.carbs}
        onChange={(e) => setLocalGoals({ ...localGoals, carbs: e.target.value })}
        placeholder="Carbs"
      />
      <input
        type="number"
        value={localGoals.protein}
        onChange={(e) => setLocalGoals({ ...localGoals, protein: e.target.value })}
        placeholder="Protein"
      />
      <input
        type="number"
        value={localGoals.fat}
        onChange={(e) => setLocalGoals({ ...localGoals, fat: e.target.value })}
        placeholder="Fat"
      />
      <button onClick={handleUpdate}>Update Goals</button>
    </div>
  );
};

export default NutritionalGoals;
