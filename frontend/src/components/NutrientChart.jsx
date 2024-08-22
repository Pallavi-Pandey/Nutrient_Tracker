// src/components/NutrientChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const NutrientChart = ({ nutrients, goals }) => {
  const data = {
    labels: ['Calories', 'Carbs', 'Protein', 'Fat'],
    datasets: [
      {
        label: 'Current Intake',
        data: [nutrients.calories, nutrients.carbs, nutrients.protein, nutrients.fat],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Goals',
        data: [goals.calories, goals.carbs, goals.protein, goals.fat],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Nutrient Chart</h2>
      <Bar data={data} />
    </div>
  );
};

export default NutrientChart;
