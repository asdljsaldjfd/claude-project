# Claude Project - Setup Instructions

## Overview
This is a full-stack web application with a Python FastAPI backend and ReactJS frontend.

## Quick Start (Both Services)

### Terminal 1 - Backend Server
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
uvicorn main:app --reload
```

### Terminal 2 - Frontend Server
```bash
cd frontend
npm install
npm run dev
```

## URLs
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

## Features
- ✅ Create items with title and description
- ✅ View all items in a responsive list
- ✅ Edit items
- ✅ Delete items
- ✅ Mark items as completed
- ✅ Real-time API integration
- ✅ Beautiful UI with gradients

## Project Structure
- `backend/` - FastAPI REST API server
- `frontend/` - React application with Vite

See individual README files in each folder for detailed setup instructions.
