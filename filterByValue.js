  const updatedFieldChanged = (index) => (e) => {
    const filteredValue = events.filter((event) => event.status === 'ok');
    console.log(`${e.target.value}`);
    filteredValue[index] = e.target.value;
    if (e.target.value === 'ok') {
      console.log(events.filter((event) => event.status === 'ok'));
    } else if (e.target.value === 'warn') {
      console.log(events.filter((event) => event.status === 'warn'));
    } else if (e.target.value === 'trouble') {
      console.log(events.filter((event) => event.status === 'trouble'));
    } else {
      console.log('Soli still suck at programming');
    }
  };

