const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const orderRoutes = require('./routes/orderRoutes');
const basicDataRoutes = require('./routes/basicDataRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// User Routes
app.use('/api/users', userRoutes);
// Vehicle Routes
app.use('/api/vehicles', vehicleRoutes);
// Order Routes
app.use('/api/orders', orderRoutes);
// Basic Data Routes
app.use('/api/basic-data', basicDataRoutes);
// Payment Routes
app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
