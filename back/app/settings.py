from pydantic import BaseSettings, Field, validator


class Settings(BaseSettings):
    env: str = Field("prod", env="ENV")
    app_url: str = Field(env="APP_URL")
    db_uri: str = Field(env="DATABASE_URL")
    google_client_id: str = Field("", env="GOOGLE_CLIENT")
    google_client_secret: str = Field("", env="GOOGLE_SECRET")
    jwt_secret_key: str = Field("example_key_super_secret", env="JWT_SECRET_KEY")
    jwt_algorithm: str = Field("HS256", env="JWT_ALGORITHM")


settings = Settings()