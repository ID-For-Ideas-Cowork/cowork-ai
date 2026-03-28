from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="CoWork AI Backend - Python")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "CoWork AI Backend - Python/FastAPI",
        "tasks": [
            "BE-03: Análisis de texto con LangChain",
            "BE-06: Function Calling"
        ]
    }


@app.get("/health")
async def health():
    return {"status": "OK"}


# ⬇️ Define tus modelos y endpoints aquí
# class ChatRequest(BaseModel):
#     message: str
#     temperature: float = 0.7


# @app.post("/api/analyze")
# async def analyze_text(request: ChatRequest):
#     # Implementa tu lógica aquí
#     pass


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
