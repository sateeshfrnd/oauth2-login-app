from jose import jwt
from datetime import datetime, timedelta
from app.config import JWT_SECRET, ALGORITHM

def create_jwt_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(hours=2)

    to_encode.update({"exp": expire})

    return jwt.encode(to_encode, JWT_SECRET, algorithm=ALGORITHM)