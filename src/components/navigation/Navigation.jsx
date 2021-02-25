import React from 'react';
import { format } from 'date-fns';
import className from 'classnames';

import { days } from '../../utils/dateUtils.js';
import './navigation.scss';

const Navigation = ({ week }) => {
  return (
    <header className="calendar__header">
      {week.map(dayDate => {
        const isTodayDate = format(dayDate, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
        const dayClassName = className('calendar__day-label', 'day-label', { 'today': isTodayDate });

        return (
          <div key={dayDate} className={dayClassName}>
            <span className="day-label__day-name ">{days[dayDate.getDay()]}</span>
            <span className="day-label__day-number">{dayDate.getDate()}</span>
          </div>
        );
      })}
    </header>
  );
};

export default Navigation;
