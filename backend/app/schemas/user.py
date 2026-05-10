from pydantic import BaseModel, EmailStr
from typing import Optional

class UserSchema(BaseModel):
    name: str
    email: EmailStr
    picture: Optional[str] = None

class UserResponse(BaseModel):
    access_token: str
    user: UserSchema