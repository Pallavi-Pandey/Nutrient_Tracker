// src/App.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import FoodLog from './components/FoodLog';
import NutrientChart from './components/NutrientChart';
import NutritionalGoals from './components/NutritionalGoals';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import NutritionalContext from './context/NutritionalContext';

const App = () => {
  const [foodLog, setFoodLog] = useState([]);
  const [nutrients, setNutrients] = useState({
    calories: 0,
    carbs: 0,
    protein: 0,
    fat: 0,
  });

  const { goals, setGoals } = useContext(NutritionalContext);

  useEffect(() => {
    // Load saved food log from local storage
    const savedLog = JSON.parse(localStorage.getItem('foodLog'));
    if (savedLog) setFoodLog(savedLog);
  }, []);

  useEffect(() => {
    // Calculate nutrients when food log changes
    const calculateNutrients = async () => {
      let totalCalories = 0;
      let totalCarbs = 0;
      let totalProtein = 0;
      let totalFat = 0;

      for (let food of foodLog) {
        try {
          const response = await axios.get(`https://api.spoonacular.com/food/nutrition`, {
            params: {
              id: food.id,
              apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
            },
          });
          const data = response.data;
          totalCalories += data.calories || 0;
          totalCarbs += data.carbs || 0;
          totalProtein += data.protein || 0;
          totalFat += data.fat || 0;
        } catch (error) {
          console.error('Error fetching food data:', error);
        }
      }

      setNutrients({
        calories: totalCalories,
        carbs: totalCarbs,
        protein: totalProtein,
        fat: totalFat,
      });
    };

    calculateNutrients();
  }, [foodLog]);

  const addFoodToLog = (food) => {
    const updatedLog = [...foodLog, food];
    setFoodLog(updatedLog);
    localStorage.setItem('foodLog', JSON.stringify(updatedLog));
  };

  return (
    <div className="App">
      <h1>Daily Food Tracker</h1>
      <SearchBar onAddFood={addFoodToLog} />
      <NutritionalGoals goals={goals} setGoals={setGoals} />
      <FoodLog log={foodLog} goals={goals} nutrients={nutrients} />
      <NutrientChart nutrients={nutrients} goals={goals} />
      <PersonalizedRecommendations nutrients={nutrients} goals={goals} />
    </div>
  );
};

export default App;
