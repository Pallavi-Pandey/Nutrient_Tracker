import React from 'react';

const FoodLog = ({ log, handleRemove }) => {
  return (
    <div className="food-log">
      <h2>Your Food Log</h2>
      {log.length > 0 ? (
        <ul className="food-log-list">
          {log.map((food, index) => (
            <li key={index} className="food-log-item">
              <div className="food-details">
                <h3>{food.name}</h3>
                <p><strong>Serving Size:</strong> {food.servingSize}</p>
                <p><strong>Calories:</strong> {food.calories} kcal</p>
                <p>
                  <strong>Carbs:</strong> {food.carbohydrates}g | 
                  <strong> Protein:</strong> {food.protein}g | 
                  <strong> Fat:</strong> {food.fat}g
                </p>
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
