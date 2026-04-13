import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ModelList = () => {
  const [models, setModels] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/basic-data/models');
        setModels(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch models');
      }
    };
    fetchModels();
  }, []);

  return (
    <div>
      <h3>Models</h3>
      {message && <p>{message}</p>}
      <ul>
        {models.map((model) => (
          <li key={model.id}>{model.brand_name} - {model.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ModelList;
