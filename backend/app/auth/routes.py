from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.auth.google import verify_google_token
from app.auth.jwt_handler import create_jwt_token

from app.models.user import User
from app.schemas.user import UserResponse

router = APIRouter()

class TokenRequest(BaseModel):
    token: str

@router.post("/google")
def google_auth(request: TokenRequest, response_model=UserResponse):
    try:
        idinfo = verify_google_token(request.token)

        user_data = {
            "name": idinfo.get("name"),
            "email": idinfo.get("email"),
            "picture": idinfo.get("picture"),
        }

        jwt_token = create_jwt_token(user_data)

        return {
            "access_token": jwt_token,
            # "user": user_data
             "user": {
                "name": idinfo["name"],
                "email": idinfo["email"],
                "picture": idinfo["picture"]
            }
        }

    except Exception as e:
        raise HTTPException(status_code=401, detail=str(e))