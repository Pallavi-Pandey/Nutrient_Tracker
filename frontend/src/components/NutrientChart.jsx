import React from 'react';
import { Bar } from 'react-chartjs-2';

const NutrientChart = ({ nutrients, goals }) => {
  const data = {
    labels: ['Carbs', 'Protein', 'Fat'],
    datasets: [
      {
        label: 'Macronutrient Intake',
        data: [nutrients.carbs, nutrients.protein, nutrients.fat],
        backgroundColor: ['#4B9CD3', '#FFCD56', '#FF6384'],
      },
      {
        label: 'Goal',
        data: [goals.carbs, goals.protein, goals.fat],
        backgroundColor: ['#ccc', '#ccc', '#ccc'],
      },
    ],
  };

  return <Bar data={data} />;
};

export default NutrientChart;
