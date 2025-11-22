CREATE DATABASE IF NOT EXISTS ittefaq_residencias;
USE ittefaq_residencias;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS inquiries (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  url VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  caption TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
  setting_key VARCHAR(255) PRIMARY KEY,
  setting_value TEXT
);

-- Insert default admin if not exists (password: admin123)
INSERT IGNORE INTO users (username, password) VALUES ('admin', '$2b$10$YourHashedPasswordHere'); 
-- Note: In a real app, use bcrypt to hash 'admin123' or similar. For now, we'll handle auth simply or assume a hashed value.

CREATE TABLE IF NOT EXISTS plots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  size VARCHAR(50) NOT NULL,
  price VARCHAR(50) NOT NULL,
  type ENUM('Residential', 'Commercial') NOT NULL,
  description TEXT
);

INSERT INTO plots (size, price, type) VALUES
('4 Marla', '16 LAC', 'Residential'),
('5 Marla', '20 LAC', 'Residential'),
('6 Marla', '24 LAC', 'Residential'),
('8 Marla', '32 LAC', 'Residential'),
('10 Marla', '40 LAC', 'Residential');
