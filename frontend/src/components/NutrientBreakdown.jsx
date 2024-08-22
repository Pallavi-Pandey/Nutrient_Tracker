import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const NutrientBreakdown = ({ log }) => {
  const totalCalories = log.reduce((total, item) => total + item.calories, 0);
  const totalCarbs = log.reduce((total, item) => total + item.carbohydrates, 0);
  const totalProtein = log.reduce((total, item) => total + item.protein, 0);
  const totalFat = log.reduce((total, item) => total + item.fat, 0);

  const data = {
    labels: ['Calories', 'Carbohydrates', 'Protein', 'Fat'],
    datasets: [
      {
        label: 'Nutrients',
        data: [totalCalories, totalCarbs, totalProtein, totalFat],
        fill: false,
        backgroundColor: '#42A5F5',
        borderColor: '#1E88E5',
      },
    ],
  };

  return (
    <div className="p-4 max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Nutrient Breakdown</h2>
      <Line data={data} />
    </div>
  );
};

export default NutrientBreakdown;
