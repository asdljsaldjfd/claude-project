# Deployment Guide - Claude Project

This guide explains how to deploy your full-stack application to free platforms.

## Overview

We'll deploy:
- **Frontend (React)**: Vercel (completely free, optimized for React)
- **Backend (FastAPI)**: Render (free tier available)

Both platforms offer free hosting with no credit card required initially.

---

## 🚀 Backend Deployment (FastAPI on Render)

### Step 1: Prepare Backend for Deployment

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/claude-project.git
   git push -u origin main
   ```

### Step 2: Deploy Backend to Render

1. Go to [Render.com](https://render.com)
2. Sign up with GitHub (recommended)
3. Click **New +** → **Web Service**
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: `claude-project-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory**: `backend`

6. Set environment variables:
   - Click **Environment** on the settings page
   - Add variable: `FRONTEND_URL` = `https://your-frontend.vercel.app` (you'll set this after deploying frontend)

7. Click **Create Web Service**
8. Wait for deployment (2-3 minutes)
9. Copy your backend URL (e.g., `https://claude-project-api.onrender.com`)

### Backend will be available at:
- API: `https://your-service-name.onrender.com/api`
- API Docs: `https://your-service-name.onrender.com/docs`
- Health: `https://your-service-name.onrender.com/health`

---

## 🎨 Frontend Deployment (React on Vercel)

### Step 1: Prepare Frontend for Deployment

Update the environment variable for production:

1. Create `frontend/.env.production`:
   ```
   VITE_API_URL=https://your-backend-service.onrender.com
   ```

Replace `your-backend-service` with your actual Render service name.

### Step 2: Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub (recommended)
3. Click **New Project**
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

6. Set environment variables:
   - Add `VITE_API_URL` = `https://your-backend-service.onrender.com`

7. Click **Deploy**
8. Wait for deployment (1-2 minutes)
9. Your frontend will be available at a URL like `https://your-project.vercel.app`

---

## ⚙️ Update Backend with Frontend URL

Now that you have your frontend URL:

1. Go back to [Render.com](https://render.com)
2. Find your backend service
3. Go to **Settings** → **Environment**
4. Update `FRONTEND_URL` with your Vercel URL:
   ```
   FRONTEND_URL=https://your-project.vercel.app
   ```

5. Click **Save** and the service will auto-redeploy

---

## ✅ Verify Deployment

### Test Backend:
```bash
curl https://your-service-name.onrender.com/health
```

### Test Frontend:
Open your Vercel URL in a browser and ensure:
- Items load from the backend
- You can create new items
- CRUD operations work

### Check API Documentation:
Visit `https://your-service-name.onrender.com/docs`

---

## 📝 Environment Variables Summary

### Backend (.env on Render)
```
FRONTEND_URL=https://your-project.vercel.app
PORT=8000
```

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-service.onrender.com
```

---

## 🔄 Continuous Deployment

Both Render and Vercel automatically deploy whenever you push to GitHub:

1. Make changes to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your message"
   git push
   ```

3. Your changes automatically deploy within minutes!

---

## 💡 Alternative Free Platforms

### Backend Alternatives:
- **Railway**: https://railway.app (Great free tier)
- **PythonAnywhere**: https://www.pythonanywhere.com (Python-specific)

### Frontend Alternatives:
- **Netlify**: https://netlify.com (Similar to Vercel)
- **GitHub Pages**: https://pages.github.com (Static sites only)

---

## 🐛 Troubleshooting

### CORS Errors?
- Make sure `FRONTEND_URL` is set correctly in backend environment variables
- Ensure your frontend URL is included in `ALLOWED_ORIGINS` in `main.py`

### API Not Responding?
- Check if backend is still running on Render dashboard
- Verify the `VITE_API_URL` in frontend environment matches your backend URL

### Build Failures?
- Check the build logs in your platform's dashboard
- Ensure all dependencies are in `requirements.txt` or `package.json`

---

## 📊 Free Tier Limits

### Render
- **Free Tier**: 1 free instance
- Auto-spins down after 15 minutes of inactivity
- Can take 30 seconds to wake up

### Vercel
- **Free Tier**: Unlimited deployments
- Up to 6 serverless functions
- 100GB bandwidth/month

---

## 🎉 You're Live!

Your application is now deployed and accessible worldwide!

**Frontend**: https://your-project.vercel.app
**Backend API**: https://your-service-name.onrender.com

Share your project with others! 🚀
