from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from services import get_db, get_current_user, get_user_by_email, create_token, create_database, create_user, authenticate_user
import schemas as _schemas

app = FastAPI()

@app.post("/api/users")
async def create_user_endpoint(user: _schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = await get_user_by_email(user.email, db)

    if db_user:
        raise HTTPException(status_code=400, detail="Email already in use")
    
    return await create_user(user, db)


@app.post("/api/token")
async def generate_token_endpoint(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = await authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid Credentials")
    
    return await create_token(user)

@app.get("/api/users/me", response_model=_schemas.User)
async def get_user_endpoint(user: _schemas.User = Depends(get_current_user)):
    return user

