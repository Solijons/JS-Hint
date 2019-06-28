    // episodes = is synonyms of the event/timeline
   // reverse() - makes it per single event
  // map() - loops through
 // statusSpan function - checks for the value that needs to be displayed
// events = contains all the data (API Request)
 
 const statusSpan = (status) => {
    if (status === 'ok') {
      return <span className="ok">Ok</span>;
    } if (status === 'warn') {
      return <span className="warn">Warn</span>;
    } if (status === 'trouble') {
      return <span className="trouble">Trouble</span>;
    }
    return null;
  };

  
  const episodes = events.reverse().map((event) => (
    <tr key={event.id}>
      <td>{event.comments}</td>
      <td>{event.date}</td>
      <td>{statusSpan(event.status)}</td>
      <td>{event.team}</td>
      <td>{event.team}</td>
    </tr>
  ));
