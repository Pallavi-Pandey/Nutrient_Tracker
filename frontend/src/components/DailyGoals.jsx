import React, { useState } from 'react';

const DailyGoals = ({ goals, setGoals }) => {
  const [newGoals, setNewGoals] = useState(goals);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoals({ ...newGoals, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals(newGoals);
  };

  return (
    <div className="daily-goals">
      <h2>Daily Nutritional Goals</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={newGoals.calories}
            onChange={handleChange}
          />
        </label>
        <label>
          Protein (g):
          <input
            type="number"
            name="protein"
            value={newGoals.protein}
            onChange={handleChange}
          />
        </label>
        <label>
          Carbohydrates (g):
          <input
            type="number"
            name="carbs"
            value={newGoals.carbs}
            onChange={handleChange}
          />
        </label>
        <label>
          Fats (g):
          <input
            type="number"
            name="fats"
            value={newGoals.fats}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Goals</button>
      </form>
    </div>
  );
};

export default DailyGoals;
