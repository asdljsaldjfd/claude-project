import { useState } from 'react'
import ItemForm from './ItemForm'

export default function ItemList({ items, onDelete, onToggle, onUpdate }) {
  const [editingId, setEditingId] = useState(null)

  const handleUpdate = async (itemId, title, description) => {
    await onUpdate(itemId, title, description)
    setEditingId(null)
  }

  if (items.length === 0) {
    return <div className="empty-state">No items yet. Create one to get started!</div>
  }

  return (
    <div className="items-list">
      {items.map((item) => (
        <div key={item.id} className={`item-card ${item.completed ? 'completed' : ''}`}>
          {editingId === item.id ? (
            <div className="item-edit">
              <ItemForm
                initialItem={item}
                isEditing={true}
                onSubmit={(title, description) => handleUpdate(item.id, title, description)}
              />
              <button
                onClick={() => setEditingId(null)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <div className="item-content">
                <div className="item-header">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => onToggle(item.id)}
                    className="item-checkbox"
                  />
                  <h3>{item.title}</h3>
                </div>
                <p className="item-description">{item.description}</p>
                <div className="item-status">
                  {item.completed && <span className="badge">✓ Completed</span>}
                </div>
              </div>

              <div className="item-actions">
                <button
                  onClick={() => setEditingId(item.id)}
                  className="btn-edit"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this item?')) {
                      onDelete(item.id)
                    }
                  }}
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
