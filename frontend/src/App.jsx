import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodSearch from './components/FoodSearch';
import FoodLog from './components/FoodLog';
import NutrientBreakdown from './components/NutrientBreakdown';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  const [log, setLog] = useLocalStorage('foodLog', []);

  const addFoodToLog = (food) => {
    const newFood = {
      name: food.name,
      servingSize: '1 serving',
      calories: 100, // Placeholder value, replace with API response
      carbohydrates: 10, // Placeholder value
      protein: 5, // Placeholder value
      fat: 2 // Placeholder value
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
      <FoodSearch onAddFood={addFoodToLog} log={log} setLog={setLog} />
      <FoodLog log={log} handleRemove={handleRemove} />
      <NutrientBreakdown log={log} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
