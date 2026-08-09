# TravelEase

A full-stack travel booking platform built with the MERN stack — browse destinations and packages, register/login, and book trips with a live, connected backend.

**Live Demo:** [traveleaseproject.netlify.app](https://traveleaseproject.netlify.app)

## Features

- User registration and login with JWT authentication
- Passwords hashed with bcrypt
- Browse destinations and curated travel packages
- Book a trip (protected — requires login)
- Profile page with a live view of your bookings and account details
- Cancel a booking
- Contact form with backend storage
- Countries explorer powered by the REST Countries API

## Tech Stack

- **Frontend:** React (Vite), React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Auth:** JSON Web Tokens (JWT) + bcrypt

## Project Structure
install/
├── src/ # React frontend
└── server/ # Express backend (separate package.json)

## Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/Hamza78630/TravelEase.git
cd TravelEase/install
```

### 2. Backend setup
```bash
cd server
npm install
```
Create a `.env` file in `server/`:

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=3001

Run the backend:
```bash
npm run dev
```

### 3. Frontend setup
Open a new terminal:
```bash
cd install
npm install
npm run dev
```

The frontend runs on `http://localhost:5173`, the backend on `http://localhost:3001`.

## Author

**Hamza** — BSCS student, University of Central Punjab
