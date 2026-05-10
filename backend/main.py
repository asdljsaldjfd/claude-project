import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Claude Project API", version="1.0.0")

# Get CORS origins from environment
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:5173",
    FRONTEND_URL,
]

# Enable CORS for React frontend
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class Item(BaseModel):
    id: int
    title: str
    description: str
    completed: bool = False

class ItemCreate(BaseModel):
    title: str
    description: str

# In-memory database
items_db: List[Item] = [
    Item(id=1, title="Learn FastAPI", description="Build a REST API with FastAPI", completed=False),
    Item(id=2, title="Learn React", description="Build a UI with React", completed=False),
]

# Routes
@app.get("/")
async def root():
    """Welcome endpoint"""
    return {"message": "Welcome to Claude Project API", "version": "1.0.0"}

@app.get("/health")
async def health():
    """Health check endpoint"""
    return {"status": "ok"}

@app.get("/api/items", response_model=List[Item])
async def get_items():
    """Get all items"""
    return items_db

@app.get("/api/items/{item_id}", response_model=Item)
async def get_item(item_id: int):
    """Get a specific item by ID"""
    for item in items_db:
        if item.id == item_id:
            return item
    return {"error": "Item not found"}

@app.post("/api/items", response_model=Item)
async def create_item(item: ItemCreate):
    """Create a new item"""
    new_item = Item(
        id=max([i.id for i in items_db], default=0) + 1,
        title=item.title,
        description=item.description,
        completed=False
    )
    items_db.append(new_item)
    return new_item

@app.put("/api/items/{item_id}", response_model=Item)
async def update_item(item_id: int, item: ItemCreate):
    """Update an existing item"""
    for i, existing_item in enumerate(items_db):
        if existing_item.id == item_id:
            updated_item = Item(
                id=item_id,
                title=item.title,
                description=item.description,
                completed=existing_item.completed
            )
            items_db[i] = updated_item
            return updated_item
    return {"error": "Item not found"}

@app.delete("/api/items/{item_id}")
async def delete_item(item_id: int):
    """Delete an item"""
    global items_db
    items_db = [item for item in items_db if item.id != item_id]
    return {"message": "Item deleted successfully"}

@app.patch("/api/items/{item_id}/toggle")
async def toggle_item(item_id: int):
    """Toggle the completed status of an item"""
    for item in items_db:
        if item.id == item_id:
            item.completed = not item.completed
            return item
    return {"error": "Item not found"}

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
