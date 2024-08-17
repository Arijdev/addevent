import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetails from './EventDetailsPage';

const EventDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <EventDetails eventId={id} />
    </div>
  );
};

export default EventDetailsPage;
