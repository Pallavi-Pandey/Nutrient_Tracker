import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const NutrientBreakdown = ({ log, goals }) => {
  const totalCalories = log.reduce((acc, food) => acc + food.calories, 0);
  const totalProtein = log.reduce((acc, food) => acc + food.protein, 0);
  const totalCarbs = log.reduce((acc, food) => acc + food.carbohydrates, 0);
  const totalFat = log.reduce((acc, food) => acc + food.fat, 0);

  const data = {
    labels: ['Calories', 'Protein', 'Carbs', 'Fat'],
    datasets: [
      {
        label: 'Intake',
        data: [totalCalories, totalProtein, totalCarbs, totalFat],
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: false
      },
      {
        label: 'Goals',
        data: [goals.calories, goals.protein, goals.carbs, goals.fats],
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: false
      }
    ]
  };

  return (
    <div className="nutrient-breakdown">
      <h2>Nutrient Breakdown</h2>
      <div className="chart-container">
        <Line data={data} />
      </div>
      <div className="legend">
        <div className="legend-item">
          <div className="color-box intake"></div>
          <p>Intake</p>
        </div>
        <div className="legend-item">
          <div className="color-box goals"></div>
          <p>Goals</p>
        </div>
      </div>
      <div className="totals">
        <p>Total Calories: {totalCalories} / {goals.calories} kcal</p>
        <p>Total Protein: {totalProtein} / {goals.protein}g</p>
        <p>Total Carbs: {totalCarbs} / {goals.carbs}g</p>
        <p>Total Fat: {totalFat} / {goals.fats}g</p>
      </div>
    </div>
  );
};

export default NutrientBreakdown;
