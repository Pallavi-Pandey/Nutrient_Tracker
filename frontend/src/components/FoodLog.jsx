import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FoodLog = () => {
  const [log, setLog] = useLocalStorage('foodLog', []);

  const handleRemove = (index) => {
    const newLog = log.filter((_, i) => i !== index);
    setLog(newLog);
  };

  return (
    <div className="p-4 max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Food Log</h2>
      <ul className="space-y-2">
        {log.map((item, index) => (
          <li key={index} className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm border border-gray-200">
            <span>{item.name} - {item.servingSize}</span>
            <button
              onClick={() => handleRemove(index)}
              className="p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodLog;
