
# Google OAuth Login Application (FastAPI + React)

A full-stack web application demonstrating secure user authentication using Google OAuth2. The application features a modern React frontend with Material-UI components and a FastAPI backend for token verification and user management.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

---

## ✨ Features

- **Google OAuth2 Authentication** - Secure login using Google accounts
- **Protected Routes** - Dashboard accessible only to authenticated users
- **User Session Management** - Token-based authentication with JWT
- **User Profile Display** - Shows authenticated user's name and profile picture
- **Logout Functionality** - Secure session termination
- **Responsive UI** - Material Design components for professional appearance
- **CORS Enabled** - Pre-configured for development environments
- **Error Handling** - Comprehensive error management and logging

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.5 | UI library |
| **TypeScript** | 6.0.2 | Type safety |
| **Vite** | 8.0.10 | Build tool & dev server |
| **Material-UI (MUI)** | 9.0.0 | UI components |
| **React Router** | 7.14.2 | Client-side routing |
| **Axios** | 1.16.0 | HTTP client |
| **@react-oauth/google** | 0.13.5 | Google OAuth integration |
| **Emotion** | 11.14.0 | CSS-in-JS styling |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **FastAPI** | Latest | Web framework |
| **Uvicorn** | Latest | ASGI server |
| **SQLAlchemy** | Latest | ORM & database queries |
| **Python-Jose** | Latest | JWT token handling |
| **Google-Auth** | Latest | Google OAuth verification |
| **Python** | 3.8+ | Programming language |

### Development Tools
| Tool | Purpose |
|------|---------|
| **ESLint** | Code linting (JavaScript/TypeScript) |
| **TypeScript Compiler** | Type checking |
| **Babel** | JavaScript transpilation |
| **PostCSS** | CSS processing |

---

## 📁 Project Structure

```
login-using-oauth2/
├── frontend/                          # React application
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.tsx     # Route protection wrapper
│   │   ├── pages/
│   │   │   ├── Login.tsx              # Login page with Google OAuth
│   │   │   └── Dashboard.tsx          # Protected dashboard page
│   │   ├── auth/
│   │   │   └── AuthContext.tsx        # Authentication context & hooks
│   │   ├── App.tsx                    # Main app component
│   │   ├── main.tsx                   # Entry point
│   │   ├── theme.ts                   # Material-UI theme configuration
│   │   ├── App.css                    # App styles
│   │   └── index.css                  # Global styles
│   ├── index.html                     # HTML template
│   ├── package.json                   # Frontend dependencies
│   ├── vite.config.ts                 # Vite configuration
│   ├── tsconfig.json                  # TypeScript config
│   └── eslint.config.js               # ESLint configuration
│
├── backend/                           # FastAPI application
│   ├── app/
│   │   ├── auth/
│   │   │   └── routes.py              # Authentication endpoints
│   │   ├── models/                    # Database models
│   │   ├── schemas/                   # Pydantic schemas
│   │   ├── config.py                  # Configuration
│   │   ├── main.py                    # FastAPI app setup
│   │   ├── .env                       # Environment variables
│   │   └── requirements.txt           # Python dependencies
│   └── venv/                          # Python virtual environment
│
├── .gitignore                         # Git ignore rules
├── RREADME.md                         # This file
└── notes.md                           # Setup notes
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

**Frontend:**
- Node.js (v18 or higher)
- npm or yarn

**Backend:**
- Python (v3.8 or higher)
- pip

**Google Cloud:**
- Google Cloud Console account
- OAuth 2.0 credentials (Client ID & Client Secret)

### Setting Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create an OAuth 2.0 Web Application
5. Add authorized JavaScript origins:
   - `http://localhost:5173`
6. Save your Client ID and Client Secret

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/login-using-oauth2.git
cd login-using-oauth2
```

### Step 2: Setup Frontend

```bash
cd frontend

# Install dependencies
npm install

# Verify installation
npm list
```

### Step 3: Setup Backend

```bash
cd ../backend

# Create Python virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
cd app
pip install -r requirements.txt
```

---

## 🔧 Configuration

### Frontend Configuration

Update your Google OAuth Client ID in `frontend/src/App.tsx`:

```typescript
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
```

Replace `YOUR_GOOGLE_CLIENT_ID` with your actual Client ID from Google Cloud Console.

### Backend Configuration

Create/Update `backend/app/.env` with your credentials:

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
JWT_SECRET=your_jwt_secret_key_here
ALGORITHM=HS256
```

**Important:** Add `.env` file to `.gitignore` to prevent exposing sensitive credentials.

---

## 🎯 Running the Application

### Option 1: Run Both Servers

**Terminal 1 - Frontend (Vite Dev Server):**

```bash
cd frontend
npm run dev

# Output:
# ➜  Local:   http://localhost:5173/
```

**Terminal 2 - Backend (FastAPI Server):**

```bash
cd backend
venv\Scripts\activate  # On Windows
cd app
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Output:
# Uvicorn running on http://127.0.0.1:8000
# - Docs available at http://127.0.0.1:8000/docs
```

### Option 2: Run on Specific Port

If port 5173 is in use, specify a custom port:

```bash
cd frontend
npm run dev -- --port 3000
```

---

## 📖 Usage

### 1. **Access the Application**

Open your browser and navigate to:
- Frontend: `http://localhost:5173/` (or your configured port)
- Backend API Docs: `http://localhost:8000/docs` (Swagger UI)

### 2. **Login Process**

![Login Page Flow]
1. Click "Sign up or Login with Google" button
2. Select or enter your Google account
3. Authorize the application
4. Redirected to dashboard upon successful authentication

### 3. **Dashboard**

After login, you'll see:
- Your profile picture (Avatar)
- Your name
- Logout button
- Protected dashboard content

### 4. **Logout**

Click the "Logout" button to:
- Clear authentication tokens
- Remove user data from local storage
- Redirect to login page

---

## 🔌 API Endpoints

### Authentication Endpoints

#### 1. **Google OAuth Token Verification**

```http
POST /auth/google
Content-Type: application/json

{
  "token": "google_id_token"
}
```

**Response (Success):**
```json
{
  "access_token": "jwt_token_here",
  "user": {
    "id": "google_user_id",
    "email": "user@example.com",
    "name": "User Name",
    "picture": "https://..."
  }
}
```

**Response (Error):**
```json
{
  "detail": "Invalid token"
}
```

#### 2. **Health Check**

```http
GET /
```

**Response:**
```json
{
  "message": "Backend running successfully!"
}
```

#### 3. **API Documentation**

- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

---

## 🧪 Development Commands

### Frontend

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Backend

```bash
cd backend/app

# Run in development mode (with auto-reload)
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Run in production mode
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 🔐 Security Considerations

1. **Environment Variables**: Never commit `.env` files with sensitive data
2. **CORS Configuration**: Update `allow_origins` in backend for production domains
3. **JWT Secret**: Use a strong, random secret for JWT signing
4. **HTTPS**: Always use HTTPS in production
5. **Token Validation**: Backend validates all tokens from Google
6. **Protected Routes**: Dashboard requires valid authentication token
7. **XSS Protection**: Material-UI components include built-in protections

---

## 🐛 Troubleshooting

### Issue: "origin_mismatch" OAuth Error

**Solution:** Add your localhost URL to Google Cloud Console authorized origins
- Go to Google Cloud Console → APIs & Services → Credentials
- Click your OAuth client
- Add your development URLs to "Authorized JavaScript origins"

### Issue: Backend Connection Error (CORS)

**Solution:** Ensure backend is running and CORS is configured:
```python
# Backend should have these origins included
allow_origins=[
    "http://localhost:5173",
    "http://localhost:3000",
    # Add your frontend URL here
]
```

### Issue: Token Validation Failed

**Solution:** 
1. Verify `GOOGLE_CLIENT_ID` in backend `.env` matches frontend
2. Check JWT secret is set in `.env`
3. Ensure tokens are fresh (not expired)

---

## 📝 Environment Variables Reference

### Backend (.env)

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_CLIENT_ID` | Your Google OAuth Client ID | `1048085226609-...` |
| `JWT_SECRET` | Secret key for JWT signing | Random string |
| `ALGORITHM` | JWT algorithm | `HS256` |

---

## 📚 Learn More

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev)
- [Material-UI Documentation](https://mui.com/)
- [JWT Introduction](https://jwt.io/introduction)

---

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

---

## �‍💻 Author

**Satish** - Created as a learning project for OAuth2 authentication implementation.

---

**Last Updated:** May 5, 2026