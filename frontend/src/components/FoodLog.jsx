import React from 'react';

const FoodLog = ({ log, handleRemove }) => {
  return (
    <div className="food-log">
      <h2>Your Food Log</h2>
      {log.length > 0 ? (
        <ul>
          {log.map((food, index) => (
            <li key={index} className="food-log-item">
              <div className="food-details">
                <h3>{food.name}</h3>
                <p>Serving Size: {food.servingSize}</p>
                <p>Calories: {food.calories} kcal</p>
                <p>Carbs: {food.carbohydrates}g | Protein: {food.protein}g | Fat: {food.fat}g</p>
              </div>
              <button onClick={() => handleRemove(index)} className="remove-button">
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No food items logged yet.</p>
      )}
    </div>
  );
};

export default FoodLog;
