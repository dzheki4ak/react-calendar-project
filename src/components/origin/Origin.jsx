import React, { useState } from 'react';
import { subWeeks, addWeeks } from 'date-fns';

import Header from '../header/Header';
import Calendar from '../calendar/Calendar';
import { getWeekStartDate, generateWeekRange } from '../../utils/dateUtils';
import '../../common.scss';

const Origin = () => {
  const [weekStart, setWeekStart] = useState(new Date());
  const [isAddEventFormDisplayed, setAddEventFormDisplayed] = useState(false);

  const handlePrevWeek = () => setWeekStart(subWeeks(weekStart, 1));
  const hanldeNextWeek = () => setWeekStart(addWeeks(weekStart, 1));
  const handleCurrentWeek = () => setWeekStart(new Date());

  const week = generateWeekRange(getWeekStartDate(weekStart));

  return (
    <>
      <Header
        week={week}
        setAddEventFormDisplayed={setAddEventFormDisplayed}
        onPreviousWeek={handlePrevWeek}
        onNextWeek={hanldeNextWeek}
        onCurrentWeek={handleCurrentWeek}
      />
      <Calendar
        week={week}
        isAddEventFormDisplayed={isAddEventFormDisplayed}
        setAddEventFormDisplayed={setAddEventFormDisplayed}
      />
    </>
  );
};

export default Origin;