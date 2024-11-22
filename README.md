# PERN Stack Todo List Application

A full-stack todo list application built using the PERN stack (PostgreSQL, Express, React, Node.js).

## Project Structure

The project is divided into two main directories:
- `client/`: React frontend application
- `server/`: Express backend server

## Technologies Used

### Frontend
- React 18.3.1
- React DOM 18.3.1
- React Testing Library
- Jest for testing

### Backend
- Node.js
- Express 4.21.1
- PostgreSQL (pg 8.13.1)
- CORS for cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have:
- Node.js installed
- PostgreSQL installed and running
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
```

2. Install Backend Dependencies:
```bash
cd server
npm install
```

3. Install Frontend Dependencies:
```bash
cd client
npm install
```

## Setting Up the Database

1. Create a PostgreSQL database
2. Configure your database connection in the server's configuration file

## Running the Application

1. Start the Backend Server:
```bash
cd server
node index.js
```

2. Start the Frontend Development Server:
```bash
cd client
npm start
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:5000`

## Features

- Create new todos
- Read existing todos
- Update todo status
- Delete todos
- Persistent storage with PostgreSQL
- RESTful API endpoints
- Cross-origin resource sharing enabled

## API Endpoints

- GET `/api/todos`: Fetch all todos
- POST `/api/todos`: Create a new todo
- PUT `/api/todos/:id`: Update a todo
- DELETE `/api/todos/:id`: Delete a todo

## Project Author

Antonio Vass


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- PERN stack community
- PostgreSQL documentation
- Express.js documentation
- React documentation
