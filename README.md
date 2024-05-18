# Full-Stack CRUD Store Application

This is a full-stack CRUD (Create, Read, Update, Delete) application for managing a store. The application is built with Node.js for the backend, Vue.js for the frontend, Axios for making HTTP requests, and Bootstrap for styling.

## Features

- Create new clients
- Read and display clients 
- Update existing client 
- Delete client

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: Vue.js
- **HTTP Client**: Axios
- **Styling**: Bootstrap
- **Database**: MySQL

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (https://nodejs.org/)
- MySQL (https://www.mysql.com/)

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:LuisHub18/initial_project.git
    cd initial-project
    ```

2. Install backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../frontend/store
    npm install
    ```

4. Set up the database:
    - Create a new database in MySQL.
    - Run the provided SQL script to create the necessary tables.
    - Update the database configuration in the backend code (e.g., `database.js`).

### Running the Application

#### Backend

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Start the backend server:
    ```bash
    npm start
    ```

   The backend server will start on `http://localhost:3000`.

#### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend/store
    ```

2. Start the frontend development server:
    ```bash
    npm run dev
    ```

   The frontend development server will start on `http://localhost:5173`.

## API Endpoints

- **GET /api/clients**: Retrieve all clients
- **GET /api/clients/:id**: Retrieve a specific client by ID
- **POST /api/clients**: Create a new client
- **PUT /api/clients/:id**: Update an existing client by ID
- **DELETE /api/clients/:id**: Delete client by ID

## Project Structure

### Backend

- `index.js`: Entry point of the backend application
- `routes/`: Contains route definitions
- `controllers/`: Contains controller logic for handling requests

### Frontend

- `src/`: Contains the source code for the frontend application
  - `components/`: Contains Vue components
  - `views/`: Contains Vue views (pages)
  - `router/`: Contains Vue Router configuration
  - `store/`: Contains Vuex store configuration (if applicable)
- `public/`: Contains static assets
- `main.js`: Entry point of the frontend application

## Database Setup

1. Install MySQL and create a new database.
2. Create the necessary tables using the following SQL script:

    ```sql
    CREATE TABLE clientes (
      id INT,
      nombre VARCHAR(100),
      apellido VARCHAR(100),
      direccion VARCHAR(200),
      telefono VARCHAR(20),
      curp VARCHAR(20),
      rfc VARCHAR(20),
      codigo_postal VARCHAR(10)
    );
    ```

3. Update the `database.js` file with your MySQL database credentials.

## Acknowledgments

- Thanks to the open-source community for providing the tools and libraries used in this project.
- Special thanks to the developers who contributed to Vue.js, Node.js, Axios, Bootstrap, and MySQL.

