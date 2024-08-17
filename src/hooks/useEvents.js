import { useContext } from 'react';
import { CalendarContext } from '../context/CalendarContext';

export const useEvents = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useEvents must be used within a CalendarProvider');
  }
  return context;
};
