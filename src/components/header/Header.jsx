import React from 'react';
import { format } from 'date-fns';

import './header.scss';

const Header = ({ week, setAddEventFormDisplayed, onPreviousWeek, onNextWeek, onCurrentWeek }) => {
  const currentMonth = format(week[0], 'MMMM');
  const nextMonth = format(week[week.length - 1], 'MMMM');
  const displayCurrentMonth =
    currentMonth === nextMonth ? currentMonth : `${currentMonth} - ${nextMonth}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={() => setAddEventFormDisplayed(true)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onCurrentWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onPreviousWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayCurrentMonth}</span>
      </div>
    </header>
  );
};

export default Header;
