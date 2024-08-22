import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodSearch from './components/FoodSearch';
import FoodLog from './components/FoodLog';
import NutrientBreakdown from './components/NutrientBreakdown';
import DailyGoals from './components/DailyGoals';
import Recommendations from './components/Recommendations';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [log, setLog] = useLocalStorage('foodLog', []);
  const [goals, setGoals] = useLocalStorage('dailyGoals', {
    calories: 2000,
    protein: 50,
    carbs: 250,
    fats: 70
  });

  const addFoodToLog = (food) => {
    const newFood = {
      name: food.name,
      servingSize: food.servingSize || '1 serving',
      calories: food.calories || 100, // Replace with API response
      carbohydrates: food.carbohydrates || 10, // Replace with API response
      protein: food.protein || 5, // Replace with API response
      fat: food.fat || 2 // Replace with API response
    };
    setLog([...log, newFood]);
  };

  const handleRemove = (indexToRemove) => {
    const updatedLog = log.filter((_, index) => index !== indexToRemove);
    setLog(updatedLog);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <DailyGoals goals={goals} setGoals={setGoals} />
        <FoodSearch onAddFood={addFoodToLog} log={log} setLog={setLog} />
        <FoodLog log={log} handleRemove={handleRemove} />
        <NutrientBreakdown log={log} goals={goals} />
        <Recommendations log={log} goals={goals} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
