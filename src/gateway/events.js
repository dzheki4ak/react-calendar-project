const initUrl = 'https://5ffdb7fbd9ddad0017f68719.mockapi.io/api/v1/events';

export const createEvent = event =>
  fetch(initUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Unable to add an event');
    }
  });

export const fetchEventsList = () =>
  fetch(initUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Internal Server Error. Unable to display events`);
      }
      return response.json();
    })
    .then(events =>
      events.map(({ _id, dateFrom, dateTo, ...event }) => ({
        id: _id,
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...event,
      })),
    );

export const deleteEvent = id =>
  fetch(`${initUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Unable to delete event');
    }
  });
