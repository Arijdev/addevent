import React, { useState } from 'react';
// Add any CSS styles if needed

const EventForm = ({ day, onAddEvent, onClose }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      onAddEvent({ id: Date.now(), title, category, date: day });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <div className="event-form-backdrop" onClick={onClose}>
      <div className="event-form-container" onClick={(e) => e.stopPropagation()}>
        <h2>Add Event</h2>
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
          <button type="submit">Add Event</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventForm;
