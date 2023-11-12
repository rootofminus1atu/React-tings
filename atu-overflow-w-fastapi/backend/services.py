import database as _database
from sqlalchemy.orm import Session
import models as _models
import schemas as _schemas
from passlib.hash import bcrypt
from jwt import *
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

import os
from dotenv import load_dotenv
load_dotenv()

oauth2schema = OAuth2PasswordBearer(tokenUrl="/api/token")
JWT_SECRET = os.getenv('JWT_SECRET')

def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)

def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

async def get_user_by_email(email:str, db: Session):
    return db.query(_models.User).filter(_models.User.email == email).first()

async def create_user(user: _schemas.UserCreate, db: Session):
    user_obj = _models.User(
        email=user.email, 
        hashed_password=bcrypt.hash(user.hashed_password)
        )
    
    db.add(user_obj)
    db.commit()
    db.refresh(user_obj)
    return user_obj

async def authenticate_user(email: str, password: str, db: Session):
    user = await get_user_by_email(email, db=db)

    if not user:
        return False
    
    if not user.verify_password(password):
        return False
    
    return user

async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)

    token = encode(user_obj.dict(), JWT_SECRET)

    return dict(access_token=token, token_type="bearer")

async def get_current_user(db: Session = Depends(get_db), token: str = Depends(oauth2schema)):
    try:
        payload = decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])
    except:
        raise HTTPException(status_code=401, detail="Invalid Email or Password")

    return _schemas.User.from_orm(user)