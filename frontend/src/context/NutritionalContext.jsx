// src/context/NutritionalContext.js
import React, { createContext, useState } from 'react';

const NutritionalContext = createContext();

export const NutritionalProvider = ({ children }) => {
  const [goals, setGoals] = useState({
    calories: 2000,
    carbs: 250,
    protein: 75,
    fat: 70,
  });

  return (
    <NutritionalContext.Provider value={{ goals, setGoals }}>
      {children}
    </NutritionalContext.Provider>
  );
};

export default NutritionalContext;
