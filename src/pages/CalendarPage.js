import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import EventForm from '../components/EventForm';
import EditEventForm from '../components/EditEventForm';
import FilterEvents from '../components/FilterEvents';
import { useCalendar } from '../context/CalendarContext';

const CalendarPage = () => {
  const { events, addEvent, updateEvent } = useCalendar();
  const [selectedDay, setSelectedDay] = useState(null);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showEditEventForm, setShowEditEventForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowEventForm(true);
  };

  const handleAddEvent = (event) => {
    addEvent({ ...event, id: Date.now() });
    setShowEventForm(false);
  };

  const handleEditEvent = (event) => {
    setSelectedEvent(event);
    setShowEditEventForm(true);
  };

  const handleUpdateEvent = (updatedEvent) => {
    updateEvent(updatedEvent);
    setShowEditEventForm(false);
    setSelectedEvent(null);
  };

  const handleCategoryChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <FilterEvents selectedCategory={filterCategory} onCategoryChange={handleCategoryChange} />
      <Calendar
        events={events}
        onDayClick={handleDayClick}
        filterCategory={filterCategory}
        onEventClick={handleEditEvent}
      />
      {showEventForm && (
        <EventForm
          day={selectedDay}
          onAddEvent={handleAddEvent}
          onClose={() => setShowEventForm(false)}
        />
      )}
      {showEditEventForm && selectedEvent && (
        <EditEventForm
          event={selectedEvent}
          onUpdateEvent={handleUpdateEvent}
          onClose={() => setShowEditEventForm(false)}
        />
      )}
    </div>
  );
};

export default CalendarPage;
