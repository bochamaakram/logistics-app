# Logistics Management App

## Overview
The **Logistics Management App** is my internship project, developed using **Laravel**, **React.js**, and **MySQL**. It is designed to manage deliveries and logistics data efficiently for the company [camiverre](https://camiverre.com/).

## Tech Stack
- **Backend:** Laravel (PHP Framework)
- **Database:** MySQL
- **Frontend:** React.js

## Installation Guide
### Prerequisites:
- PHP 8+
- Composer
- Node.js & npm
- MySQL

### Backend Setup:
```sh
# Clone the repository
git clone https://github.com/your-repo/logistics-app.git
cd logistics-app

# Install dependencies
composer install

# Create environment file
cp .env.example .env

# Configure database in .env file
DB_DATABASE=logistics_db
DB_USERNAME=root
DB_PASSWORD=

# Generate application key
php artisan key:generate

# Run migrations
php artisan migrate

# Start the Laravel server
php artisan serve
```

### Frontend Setup:
```sh
cd frontend

# Install dependencies
npm install

# Start the React app
npm run dev
```
