import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onAddFood }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchFood = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://api.spoonacular.com/food/search`, {
      params: {
        query,
        apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
      },
    });
    setResults(response.data.results);
  };

  return (
    <div>
      <form onSubmit={searchFood}>
        <input
          type="text"
          placeholder="Search for food items..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => onAddFood(item)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
