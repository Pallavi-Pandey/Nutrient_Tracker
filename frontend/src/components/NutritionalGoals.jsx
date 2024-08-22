import React, { useState } from 'react';

const NutritionalGoals = ({ setGoals }) => {
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fats, setFats] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals({ calories, protein, carbs, fats });
  };

  return (
    <div className="goals-form">
      <h2>Set Your Daily Nutritional Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Calories:
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
          />
        </label>
        <label>
          Protein (g):
          <input
            type="number"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
            required
          />
        </label>
        <label>
          Carbohydrates (g):
          <input
            type="number"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
            required
          />
        </label>
        <label>
          Fats (g):
          <input
            type="number"
            value={fats}
            onChange={(e) => setFats(e.target.value)}
            required
          />
        </label>
        <button type="submit">Save Goals</button>
      </form>
    </div>
  );
};

export default NutritionalGoals;
