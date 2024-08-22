import React, { useState } from 'react';
import axios from 'axios';

const FoodSearch = ({ log, setLog }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchTerm) return; // Prevent search if searchTerm is empty

    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search?query=${searchTerm}&number=5&apiKey=9289dfd4402a4a7fbc80063d0dabffba`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching food items', error);
    }
  };

  const addFoodToLog = async (food) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/${food.id}/information?amount=1&apiKey=9289dfd4402a4a7fbc80063d0dabffba`
      );
      const data = response.data;

      const newFood = {
        name: data.name,
        servingSize: '1 serving',
        calories: data.nutrition.nutrients.find(n => n.name === 'Calories')?.amount || 0,
        carbohydrates: data.nutrition.nutrients.find(n => n.name === 'Carbohydrates')?.amount || 0,
        protein: data.nutrition.nutrients.find(n => n.name === 'Protein')?.amount || 0,
        fat: data.nutrition.nutrients.find(n => n.name === 'Fat')?.amount || 0,
      };

      // Update the log state
      setLog([...log, newFood]);

      // Reset the search input and results
      setSearchTerm('');
      setResults([]);
    } catch (error) {
      console.error('Error fetching food nutrient data', error);
    }
  };

  return (
    <div className="food-search">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for food..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((food) => (
            <li key={food.id} className="search-item">
              <span className="food-name">{food.name}</span>
              <button onClick={() => addFoodToLog(food)} className="add-button">Add</button>
            </li>
          ))}
        </ul>
      )}
      {results.length === 0 && searchTerm && (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
};

export default FoodSearch;
