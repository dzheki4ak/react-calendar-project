import React, { useState, useEffect } from 'react';
import { format, getHours } from 'date-fns';

import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils';

import './hour.scss';

const Hour = ({ dayStart, dataHour, hourEvents, onEventDeletion }) => {
  const isToday = format(dayStart, 'MM dd yyyy') === format(new Date(), 'MM dd yyyy');

  const [minutes, setMinutes] = useState(new Date().getMinutes());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMinutes(new Date().getMinutes());
    }, 60000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {isToday && dataHour === getHours(new Date()) && (
        <div className="red-line" style={{ top: minutes }}></div>
      )}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;

        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            title={title}
            onEventDeletion={onEventDeletion}
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
          />
        );
      })}
    </div>
  );
};

export default Hour;
