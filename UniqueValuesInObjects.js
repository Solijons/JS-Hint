  // collects all the unique value fromJSON
  // events = contains all data from JSON Server
  
  
  const uniqueValues = [];
  for (let i = 0; i < events.length; i++) {
    if (uniqueValues.indexOf(events[i].status) === -1) {
      uniqueValues.push(events[i].status);
    }
  }
