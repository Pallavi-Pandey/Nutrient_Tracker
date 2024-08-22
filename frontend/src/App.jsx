import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import FoodLog from './components/FoodLog';
import NutrientChart from './components/NutrientChart';
import NutritionalGoals from './components/NutritionalGoals';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';


const App = () => {
  const [foodLog, setFoodLog] = useState([]);
  const [goals, setGoals] = useState({
    calories: 2000,
    carbs: 250,
    protein: 75,
    fat: 70,
  });

  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('nutritionalGoals'));
    if (savedGoals) setGoals(savedGoals);
    const savedLog = JSON.parse(localStorage.getItem('foodLog'));
    if (savedLog) setFoodLog(savedLog);
  }, []);

  const addFoodToLog = (food) => {
    setFoodLog([...foodLog, food]);
    localStorage.setItem('foodLog', JSON.stringify([...foodLog, food]));
  };

  return (
    <div className="App">
      <h1>Daily Food Tracker</h1>
      <SearchBar onAddFood={addFoodToLog} />
      <NutritionalGoals goals={goals} setGoals={setGoals} />
      <FoodLog log={foodLog} goals={goals} />
      <NutrientChart nutrients={{ carbs: 0, protein: 0, fat: 0 }} goals={goals} />
    </div>
  );
};

export default App;
