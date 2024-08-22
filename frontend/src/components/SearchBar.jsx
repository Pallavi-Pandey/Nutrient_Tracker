// src/components/SearchBar.jsx
import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onAddFood }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/food/search`, {
        params: {
          query,
          apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
        },
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleAddFood = (food) => {
    onAddFood(food);
    setQuery('');
    setSearchResults([]);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((food) => (
          <li key={food.id}>
            {food.name}
            <button onClick={() => handleAddFood(food)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
