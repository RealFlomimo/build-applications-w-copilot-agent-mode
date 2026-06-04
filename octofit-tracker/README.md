# OctoFit Tracker - Multi-Tier Application

A modern fitness tracking application built with React 19, Node.js/Express, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── backend/           # Node.js + Express + TypeScript API
    ├── src/
    ├── package.json
    └── tsconfig.json
```

## Technology Stack

### Frontend
- **React**: 19.2.7
- **Vite**: 8.0.16
- **Port**: 5173

### Backend
- **Node.js**: Latest LTS
- **Express**: 5.2.1
- **TypeScript**: 6.0.3
- **Port**: 8000

### Database
- **MongoDB**: 27017
- **Mongoose**: 9.6.3 (ODM)

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB running on localhost:27017

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
```

Create a `.env` file:
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

Start the development server:
```bash
npm run dev
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
```

Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Available Scripts

### Backend
- `npm run dev` - Start development server with ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled JavaScript

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints

- `GET /api/health` - Health check endpoint

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 8000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (development/production)
