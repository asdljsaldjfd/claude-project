# Quick Start Guide

## 🚀 Start Local Development

### Terminal 1 - Backend
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will be at: http://localhost:8000
API Docs: http://localhost:8000/docs

### Terminal 2 - Frontend
```bash
cd frontend
npm install
npm run dev
```

Frontend will be at: http://localhost:3000

## 🌐 Deploy to Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions to:
- **Frontend**: Vercel (free)
- **Backend**: Render (free)

## 📚 Project Structure

```
Claude project/
├── backend/           # FastAPI REST API
│   ├── main.py
│   ├── requirements.txt
│   └── README.md
├── frontend/          # React Application
│   ├── src/
│   ├── package.json
│   └── README.md
├── README.md          # This file
├── SETUP.md
└── DEPLOYMENT.md      # Deploy to free platforms
```

## ✨ Features

- ✅ Full CRUD operations
- ✅ Real-time API integration
- ✅ Beautiful responsive UI
- ✅ Interactive API documentation
- ✅ Production-ready code

## 📖 More Info

- [Backend README](backend/README.md)
- [Frontend README](frontend/README.md)
- [Full README](README.md)
- [Deployment Guide](DEPLOYMENT.md)

---

**Ready to deploy?** Check out [DEPLOYMENT.md](DEPLOYMENT.md)! 🚀
