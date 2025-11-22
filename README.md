# Ittefaq Residencias - Premium Real Estate Website

A premium, responsive website for Ittefaq Residencias built with React, NodeJS, and MariaDB.

## Features
- **Premium UI/UX**: Gold and Black color scheme, smooth scroll animations, and parallax effects.
- **Responsive Design**: Fully responsive for Mobile, Tablet, and Desktop.
- **Dark/Light Mode**: Automatic theme switching based on system preference (or toggleable).
- **Dynamic Content**: Plot prices and details.
- **Contact Form**: Integrated with NodeJS backend and MariaDB.

## Prerequisites
- Node.js (v16+)
- MariaDB/MySQL

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Database Setup**:
    - Create a database named `ittefaq_residencias`.
    - Import the schema from `server/schema.sql`.
    - Update `.env` with your database credentials.

3.  **Environment Variables**:
    - Check `.env` and update `DB_USER` and `DB_PASSWORD`.

## Running the Project

1.  **Start the Backend Server**:
    ```bash
    npm run server
    ```
    Server will run on `http://localhost:5000`.

2.  **Start the Frontend**:
    ```bash
    npm run dev
    ```
    Frontend will run on `http://localhost:5173`.

## Project Structure
- `src/`: React frontend code.
- `server/`: NodeJS/Express backend code.
- `public/`: Static assets.
