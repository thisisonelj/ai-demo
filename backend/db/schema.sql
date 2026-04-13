-- User Table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vehicle Table
CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand_id INT,
  model_id INT,
  color_id INT,
  status_id INT,
  year INT,
  price DECIMAL(10, 2),
  description TEXT,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Order Table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  vehicle_id INT NOT NULL,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);

-- Payment Table
CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  payment_amount DECIMAL(10, 2) NOT NULL,
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  payment_method VARCHAR(50),
  transaction_id VARCHAR(255) UNIQUE,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

-- Basic Data Tables
CREATE TABLE brands (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE models (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  FOREIGN KEY (brand_id) REFERENCES brands(id)
);

CREATE TABLE colors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE vehicle_statuses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status_name VARCHAR(255) NOT NULL UNIQUE
);

ALTER TABLE vehicles
ADD CONSTRAINT fk_brand
FOREIGN KEY (brand_id) REFERENCES brands(id);

ALTER TABLE vehicles
ADD CONSTRAINT fk_model
FOREIGN KEY (model_id) REFERENCES models(id);

ALTER TABLE vehicles
ADD CONSTRAINT fk_color
FOREIGN KEY (color_id) REFERENCES colors(id);

ALTER TABLE vehicles
ADD CONSTRAINT fk_status
FOREIGN KEY (status_id) REFERENCES vehicle_statuses(id);
