from datetime import datetime, timedelta
import string
import random
import os
import hashlib

import jwt

from app.settings import settings

from .schemas import User


def generate_token() -> str:
    return hashlib.sha256(os.urandom(1024)).hexdigest()

def create_access_token(*, data: User, exp: int = None) -> bytes:
    to_encode = data.dict()
    if exp is not None:
        to_encode.update({"exp": exp})
    else:
        expire = datetime.utcnow() + timedelta(minutes=60)
        to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(
        to_encode, settings.jwt_secret_key, algorithm=settings.jwt_algorithm
    )
    return encoded_jwt