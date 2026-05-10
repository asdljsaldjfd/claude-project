# Claude Project - Full-Stack Web Application

A modern full-stack web application built with **FastAPI** (Python backend) and **ReactJS** (frontend).

## 🚀 Project Structure

```
Claude project/
├── backend/              # FastAPI server
│   ├── main.py          # FastAPI application and routes
│   ├── requirements.txt  # Python dependencies
│   └── README.md         # Backend setup guide
└── frontend/            # React application
    ├── src/
    │   ├── components/   # React components
    │   ├── App.jsx       # Main App component
    │   ├── main.jsx      # React entry point
    │   └── App.css       # Styles
    ├── package.json      # Node dependencies
    ├── vite.config.js    # Vite configuration
    ├── index.html        # HTML entry point
    └── README.md         # Frontend setup guide
```

## 🎯 Features

### Backend (FastAPI)
- RESTful API with complete CRUD operations
- CORS enabled for frontend integration
- Pydantic models for data validation
- Swagger UI documentation at `/docs`
- In-memory database (easily convertible to SQL)
- Endpoints:
  - `GET /api/items` - List all items
  - `POST /api/items` - Create new item
  - `GET /api/items/{id}` - Get item details
  - `PUT /api/items/{id}` - Update item
  - `DELETE /api/items/{id}` - Delete item
  - `PATCH /api/items/{id}/toggle` - Toggle completion status

### Frontend (React)
- Modern React 18 with Hooks
- Axios for API communication
- Component-based architecture
- Add, edit, delete, and toggle items
- Real-time UI updates
- Responsive design
- Beautiful gradient styling

## 🔧 Quick Start

### Prerequisites
- Python 3.8+ 
- Node.js 16+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
   - **Windows:** `venv\Scripts\activate`
   - **macOS/Linux:** `source venv/bin/activate`

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`
- API Documentation: `http://localhost:8000/docs`

### Frontend Setup

1. In a new terminal, navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📚 API Documentation

Once the backend is running, access the interactive API documentation:
- **Swagger UI:** http://localhost:8000/docs
- **ReDoc:** http://localhost:8000/redoc

## 🏗️ Development

### Backend Development
- Edit `backend/main.py` to modify API endpoints
- Add new models in the `Pydantic` section
- The server reloads automatically with `--reload` flag
- API changes are reflected immediately

### Frontend Development
- Edit components in `frontend/src/components/`
- Modify styles in `frontend/src/App.css`
- The development server has hot module reloading
- Changes are reflected immediately in the browser

## 📦 Building for Production

### Backend
```bash
cd backend
uvicorn main:app --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
npm run build
```

Deploy the contents of the `dist` folder to your hosting service.

## 🔗 API Integration

The frontend is configured to communicate with the backend at `http://localhost:8000`. The Vite development server includes a proxy for `/api` routes.

For production, update the `API_URL` in `frontend/src/App.jsx`:
```javascript
const API_URL = 'https://your-api.com/api'
```

## 📝 Example Workflow

1. **Backend** is running on `http://localhost:8000`
2. **Frontend** is running on `http://localhost:3000`
3. Open your browser to `http://localhost:3000`
4. Use the form to add new items
5. View items in the list
6. Edit or delete items as needed
7. Check the API documentation at `http://localhost:8000/docs`

## 🛠️ Tech Stack

### Backend
- **Framework:** FastAPI
- **Server:** Uvicorn
- **Data Validation:** Pydantic
- **CORS:** python-cors

### Frontend
- **Library:** React 18
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Styling:** CSS

## 📖 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Axios Documentation](https://axios-http.com/)

## 🌐 Deployment

Ready to deploy? Check out [DEPLOYMENT.md](DEPLOYMENT.md) for free hosting options:
- **Frontend**: Vercel (completely free)
- **Backend**: Render (free tier available)

Deploy your application in minutes! 🚀

## 📄 License

This project is open source and available under the MIT License.

---

Happy coding! 🚀
