import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import EventDetailsPage from './pages/EventDetailsPage';
import { CalendarProvider } from './context/CalendarContext';
import './App.css';

function App() {
  return (
    <CalendarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
        </Routes>
      </Router>
    </CalendarProvider>
  );
}

export default App;
