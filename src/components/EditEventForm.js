import React, { useState } from 'react';

const EditEventForm = ({ event, onUpdateEvent, onClose }) => {
  const [title, setTitle] = useState(event.title);
  const [category, setCategory] = useState(event.category);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      onUpdateEvent({ ...event, title, category });
      onClose();
    }
  };

  return (
    <div className="event-form-backdrop" onClick={onClose}>
      <div className="event-form-container" onClick={(e) => e.stopPropagation()}>
        <h2>Edit Event</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            Category:
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select Category</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <button type="submit">Update Event</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditEventForm;
