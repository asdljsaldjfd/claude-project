import { useState } from 'react'

export default function ItemForm({ onSubmit, initialItem, isEditing }) {
  const [title, setTitle] = useState(initialItem?.title || '')
  const [description, setDescription] = useState(initialItem?.description || '')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('Please enter a title')
      return
    }

    setIsSubmitting(true)
    try {
      await onSubmit(title, description)
      setTitle('')
      setDescription('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter item title"
          disabled={isSubmitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description"
          disabled={isSubmitting}
          rows="3"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary">
        {isSubmitting ? 'Submitting...' : isEditing ? 'Update Item' : 'Add Item'}
      </button>
    </form>
  )
}
