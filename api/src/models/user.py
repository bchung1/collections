from sqlalchemy import Column, Integer, String, Boolean
from db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    is_active = Column(Boolean, default=True)