import React from 'react';


import Day from '../day/Day';
import './week.scss';

const Week = ({ week, events, onEventDeletion }) => {
  return (
    <div className="calendar__week">
      {week.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayStart={dayStart}
            dayEvents={dayEvents}
            onEventDeletion={onEventDeletion}
          />
        );
      })}
    </div>
  );
};

export default Week;
