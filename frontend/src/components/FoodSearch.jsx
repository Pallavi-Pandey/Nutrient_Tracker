import React, { useState } from 'react';
import axios from 'axios';

const FoodSearch = ({ log, setLog }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search?query=${searchTerm}&number=5&apiKey=9be71985b80941debeb59b8dfd2d5e75`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching food items', error);
    }
  };

  const addFoodToLog = async (food) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/${food.id}/information?amount=1&apiKey=9be71985b80941debeb59b8dfd2d5e75`
      );
      const data = response.data;

      const newFood = {
        name: data.name,
        servingSize: '1 serving',
        calories: data.nutrition.nutrients.find(n => n.name === 'Calories').amount,
        carbohydrates: data.nutrition.nutrients.find(n => n.name === 'Carbohydrates').amount,
        protein: data.nutrition.nutrients.find(n => n.name === 'Protein').amount,
        fat: data.nutrition.nutrients.find(n => n.name === 'Fat').amount,
      };

      // Update the log state
      setLog([...log, newFood]);

      // Optionally, reset the search input or provide feedback
      setSearchTerm(''); // If you want to clear the search bar
      setResults([]); // Clear the results after adding
    } catch (error) {
      console.error('Error fetching food nutrient data', error);
    }
  };

  return (
    <div className="food-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for food..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      
      <ul className="search-results">
        {results.map((food) => (
          <li key={food.id} className="search-item">
            {food.name}
            <button onClick={() => addFoodToLog(food)} className="add-button">Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSearch;
