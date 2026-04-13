import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import VehicleList from './components/Vehicles/VehicleList';
import VehicleDetail from './components/Vehicles/VehicleDetail';
import OrderList from './components/Orders/OrderList';
import OrderDetail from './components/Orders/OrderDetail';
import BasicDataDashboard from './components/BasicData/BasicDataDashboard';
import PaymentList from './components/Payments/PaymentList';
import PaymentDetail from './components/Payments/PaymentDetail';
import './App.css';

const Home = () => <h2>Home Page</h2>;

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/basic-data">Basic Data</Link>
          </li>
          <li>
            <Link to="/payments">Payments</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/vehicles" element={<VehicleList />} />
          <Route path="/vehicles/:id" element={<VehicleDetail />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/basic-data" element={<BasicDataDashboard />} />
          <Route path="/payments" element={<PaymentList />} />
          <Route path="/payments/:id" element={<PaymentDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
