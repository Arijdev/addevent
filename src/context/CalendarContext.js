import React, { createContext, useState, useContext } from 'react';

// Create a Context for the Calendar
const CalendarContext = createContext();

// Create a provider component
const CalendarProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  // Add a new event
  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  // Remove an event by id
  const removeEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter(event => event.id !== eventId));
  };

  // Update an event
  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map(event => (event.id === updatedEvent.id ? updatedEvent : event))
    );
  };

  return (
    <CalendarContext.Provider value={{ events, addEvent, removeEvent, updateEvent }}>
      {children}
    </CalendarContext.Provider>
  );
};

// Custom hook to use Calendar context
const useCalendar = () => useContext(CalendarContext);

export { CalendarProvider, useCalendar };
