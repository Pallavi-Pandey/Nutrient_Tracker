import React, { useState } from 'react';

const NutritionalGoals = ({ goals, setGoals }) => {
  const [localGoals, setLocalGoals] = useState(goals);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalGoals({
      ...localGoals,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals(localGoals);
    localStorage.setItem('nutritionalGoals', JSON.stringify(localGoals));
  };

  return (
    <div>
      <h2>Set Your Daily Nutritional Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Calories (kcal):
          <input
            type="number"
            name="calories"
            value={localGoals.calories}
            onChange={handleChange}
          />
        </label>
        <label>
          Carbs (g):
          <input
            type="number"
            name="carbs"
            value={localGoals.carbs}
            onChange={handleChange}
          />
        </label>
        <label>
          Protein (g):
          <input
            type="number"
            name="protein"
            value={localGoals.protein}
            onChange={handleChange}
          />
        </label>
        <label>
          Fat (g):
          <input
            type="number"
            name="fat"
            value={localGoals.fat}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Set Goals</button>
      </form>
    </div>
  );
};

export default NutritionalGoals;
