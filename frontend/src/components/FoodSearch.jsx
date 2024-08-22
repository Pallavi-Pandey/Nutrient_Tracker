import React, { useState } from 'react';
import axios from 'axios';

const FoodSearch = ({ onAddFood }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/food/ingredients/autocomplete?query=${query}&number=5&apiKey=9289dfd4402a4a7fbc80063d0dabffba`
      );
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching food data', error);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <div className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for food items..."
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {results.map((food) => (
          <li key={food.id} className="flex justify-between items-center p-2 bg-gray-100 rounded-md shadow-sm">
            <span className="text-lg font-medium">{food.name}</span>
            <button
              onClick={() => onAddFood(food)}
              className="ml-4 p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodSearch;
