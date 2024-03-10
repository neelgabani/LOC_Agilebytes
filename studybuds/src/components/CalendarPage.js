import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Progress Calendar</h2>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}

export default CalendarPage;