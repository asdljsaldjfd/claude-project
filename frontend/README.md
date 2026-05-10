# React Frontend

## Setup

1. Install dependencies:
```bash
npm install
```

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Features

- View all items from the FastAPI backend
- Create new items with title and description
- Edit existing items
- Delete items
- Toggle item completion status
- Real-time updates with API

## API Integration

The frontend communicates with the FastAPI backend at `http://localhost:8000/api`. Make sure the backend is running before starting the frontend development server.
