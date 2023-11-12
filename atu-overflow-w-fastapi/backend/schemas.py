from datetime import datetime
from pydantic import BaseModel

class _UserBase(BaseModel):
    email: str

class UserCreate(_UserBase):
    hashed_password: str

    class Config:
        orm_mode = True
        from_attributes = True


class User(_UserBase):
    id: int

    class Config:
        orm_mode = True
        from_attributes = True




class _LeadBase(BaseModel):
    first_name: str
    last_name: str
    company: str
    email: str
    note: str
    
class LeadCreate(_LeadBase):
    pass 

class Lead(_LeadBase):
    id: int
    owner_id: int
    date_created: datetime
    date_last_updated: datetime

    class Config:
        orm_mode = True
        from_attributes = True