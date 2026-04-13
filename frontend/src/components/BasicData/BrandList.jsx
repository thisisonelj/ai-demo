import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/basic-data/brands');
        setBrands(response.data);
      } catch (error) {
        setMessage(error.response?.data?.error || 'Failed to fetch brands');
      }
    };
    fetchBrands();
  }, []);

  return (
    <div>
      <h3>Brands</h3>
      {message && <p>{message}</p>}
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
