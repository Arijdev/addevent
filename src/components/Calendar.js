import React from 'react';

const Calendar = ({ events, onDayClick, filterCategory, onEventClick }) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();

  const calendarDays = Array.from({ length: firstDayOfMonth + daysInMonth }, (_, i) =>
    i < firstDayOfMonth ? null : i - firstDayOfMonth + 1
  );

  const filteredEvents = filterCategory
    ? events.filter(event => event.category === filterCategory)
    : events;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h2>{`${currentMonth} ${currentYear}`}</h2>
      </div>
      <div className="calendar-weekdays">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-header">{day}</div>
        ))}
      </div>
      <div className="calendar-grid">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-cell ${day ? '' : 'empty-cell'}`}
            onClick={day ? () => onDayClick(day) : null}
          >
            {day && (
              <>
                <div className="calendar-date">{day}</div>
                {filteredEvents
                  .filter(event => event.date === day)
                  .map((event, index) => (
                    <div
                      key={index}
                      className="calendar-event"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent day click event
          
                        onEventClick(event); // Trigger the event click to edit
                      }}
                    >
                      {event.title}
                    </div>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
