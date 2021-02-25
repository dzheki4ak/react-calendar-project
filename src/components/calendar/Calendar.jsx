import React, { useState, useEffect } from 'react';

import Modal from '../modal/Modal';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { fetchEventsList, deleteEvent } from '../../gateway/events';
import './calendar.scss';

const Calendar = ({ week, isAddEventFormDisplayed, setAddEventFormDisplayed }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList()
      .then(events => setEvents(events))
      .catch(error => alert(error.message));
  };

  const handleEventDeletion = id => {
    deleteEvent(id)
      .then(() => fetchEvents())
      .catch(error => alert(error.message));
  };

  return (
    <>
      <section className="calendar">
        <Navigation week={week} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week week={week} events={events} onEventDeletion={handleEventDeletion} />
          </div>
        </div>
      </section>
      {isAddEventFormDisplayed && <Modal setAddEventFormDisplayed={setAddEventFormDisplayed} fetchEvents={fetchEvents} />}
    </>
  );
};

export default Calendar;
