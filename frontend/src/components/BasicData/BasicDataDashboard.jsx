import React from 'react';
import BrandList from './BrandList';
import ModelList from './ModelList';
import ColorList from './ColorList';
import VehicleStatusList from './VehicleStatusList';

const BasicDataDashboard = () => {
  return (
    <div>
      <h2>Basic Data Management</h2>
      <BrandList />
      <ModelList />
      <ColorList />
      <VehicleStatusList />
    </div>
  );
};

export default BasicDataDashboard;
