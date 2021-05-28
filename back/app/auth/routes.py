from urllib.parse import urlencode

from fastapi import APIRouter

from app.settings import settings
from .schemas import Url
from .helpers import generate_token

LOGIN_URL = "https://accounts.google.com/o/oauth2/v2/auth"
REDIRECT_URL = f"{settings.app_url}/auth/google/"

router = APIRouter()

@router.get("/login")
def get_login_url() -> Url:
    params = {
        "client_id": settings.google_client_id,
        "redirect_uri": REDIRECT_URL,
        "state": generate_token(),
        "response_type": "code",
        "scope": " ".join([
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"
        ])
    }
    print(urlencode(params))
    return Url(url=f"{LOGIN_URL}?{urlencode(params)}")

# @app.post("/users/", response_model=schemas.User)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
#     return crud.create_user(db=db, user=user)


# @app.get("/users/", response_model=List[schemas.User])
# def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
#     users = crud.get_users(db, skip=skip, limit=limit)
#     return users


# @app.get("/users/{user_id}", response_model=schemas.User)
# def read_user(user_id: int, db: Session = Depends(get_db)):
#     db_user = crud.get_user(db, user_id=user_id)
#     if db_user is None:
#         raise HTTPException(status_code=404, detail="User not found")
#     return db_user