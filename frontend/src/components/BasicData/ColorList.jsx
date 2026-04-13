import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ColorList = () => {
  const [colors, setColors] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/basic-data/colors');
        setColors(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch colors');
      }
    };
    fetchColors();
  }, []);

  return (
    <div>
      <h3>Colors</h3>
      {message && <p>{message}</p>}
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
