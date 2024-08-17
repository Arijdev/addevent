import React from 'react';
import { useEvents } from '../hooks/useEvents';
import { useHistory } from 'react-router-dom';


const EventDetails = ({ eventId }) => {
  const { events, deleteEvent } = useEvents();
  const history = useHistory();

  const event = events.find(event => event.id === parseInt(eventId));

  const handleDelete = () => {
    deleteEvent(event.id);
    history.push('/');
  };

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <button onClick={handleDelete}>Delete Event</button>
    </div>
  );
};

export default EventDetails;
