import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemList from './components/ItemList'
import ItemForm from './components/ItemForm'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL 
    ? `${import.meta.env.VITE_API_URL}/api`
    : 'http://localhost:8000/api'

  // Fetch items from API
  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`${API_URL}/items`)
      setItems(response.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch items: ' + err.message)
      console.error('Error fetching items:', err)
    } finally {
      setLoading(false)
    }
  }

  const addItem = async (title, description) => {
    try {
      const response = await axios.post(`${API_URL}/items`, {
        title,
        description
      })
      setItems([...items, response.data])
    } catch (err) {
      setError('Failed to create item: ' + err.message)
      console.error('Error creating item:', err)
    }
  }

  const updateItem = async (itemId, title, description) => {
    try {
      const response = await axios.put(`${API_URL}/items/${itemId}`, {
        title,
        description
      })
      setItems(items.map(item => item.id === itemId ? response.data : item))
    } catch (err) {
      setError('Failed to update item: ' + err.message)
      console.error('Error updating item:', err)
    }
  }

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${API_URL}/items/${itemId}`)
      setItems(items.filter(item => item.id !== itemId))
    } catch (err) {
      setError('Failed to delete item: ' + err.message)
      console.error('Error deleting item:', err)
    }
  }

  const toggleItem = async (itemId) => {
    try {
      const response = await axios.patch(`${API_URL}/items/${itemId}/toggle`)
      setItems(items.map(item => item.id === itemId ? response.data : item))
    } catch (err) {
      setError('Failed to toggle item: ' + err.message)
      console.error('Error toggling item:', err)
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>📋 Claude Project</h1>
        <p>Full-stack application with FastAPI & React</p>
      </header>

      <main className="app-main">
        {error && <div className="error-message">{error}</div>}

        <div className="container">
          <section className="form-section">
            <h2>Add New Item</h2>
            <ItemForm onSubmit={addItem} />
          </section>

          <section className="items-section">
            <h2>Items List</h2>
            {loading ? (
              <div className="loading">Loading items...</div>
            ) : (
              <ItemList
                items={items}
                onDelete={deleteItem}
                onToggle={toggleItem}
                onUpdate={updateItem}
              />
            )}
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
