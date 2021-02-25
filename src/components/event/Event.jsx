import React, { useState } from 'react';

import './event.scss';

const Event = ({ height, marginTop, id, title, time, onEventDeletion }) => {
  const [isDeleteBtnVisible, setIsDeleteBtnVisible] = useState(false);

  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div
      className="event"
      style={eventStyle}
      onClick={() => setIsDeleteBtnVisible(!isDeleteBtnVisible)}
    >
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isDeleteBtnVisible && (
        <button className="delete-event-btn" onClick={() => onEventDeletion(id)}>
          Cancel
        </button>
      )}
    </div>
  );
};

export default Event;
