// import React

// parent component

class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeFilters: {
          status: [], teams: [], weeks: [], eventType: [],
        },
        events: [],// jsonData
        groupedEvents: [], // groudpedData
      }
    this.groupEventsByNursery = this.groupEventsByNursery.bind(this);
    this.setActiveFilters = this.setActiveFilters.bind(this);
   }
}

// ASUME WE FETCH THE DATA HERE
// componentDidMount => then set data response to this.state.events

// Setting Active Filters
setActiveFilters(activeFilters) {
  this.setState({ activeFilters }, this.groupEventsByNursery());
}

groupEventsByNursery() {
    const { activeFilters, events } = this.state;
    const groupedEvents = [];

    let eventsToDisplay = [];

    // eslint-disable-next-line max-len
    if (activeFilters.teams.length || activeFilters.status.length || activeFilters.weeks.length || activeFilters.eventType.length) {
      if (activeFilters.teams.length) {
        activeFilters.teams.forEach((teamFilter) => {
          eventsToDisplay = eventsToDisplay.concat(
            events.filter((event) => event.team === teamFilter),
          );
        });
      } else {
        eventsToDisplay = events;
      }

      if (activeFilters.status.length) {
        let unfiltered = [];

        activeFilters.status.forEach((statusFilter) => {
          unfiltered = unfiltered.concat(
            eventsToDisplay.filter((event) => event.status === statusFilter),
          );
        });

        eventsToDisplay = unfiltered;
      }

      if (activeFilters.weeks.length) {
        let unfiltered = [];

        activeFilters.weeks.forEach((weekFilter) => {
          unfiltered = unfiltered.concat(
            eventsToDisplay.filter((event) => getISOWeek(event.date) === Number(weekFilter)),
          );
        });

        eventsToDisplay = unfiltered;
      }

      if (activeFilters.eventType.length) {
        let unfiltered = [];

        activeFilters.eventType.forEach((eventTypeFilter) => {
          unfiltered = unfiltered.concat(
            eventsToDisplay.filter((event) => event.type === eventTypeFilter),
          );
        });
        eventsToDisplay = unfiltered;
      }
    } else {
      eventsToDisplay = events;
    }

    eventsToDisplay.forEach((event) => {
      const index = groupedEvents.findIndex((ge) => ge.nursery === event.field);

      if (index === -1) {
        groupedEvents.push({
          events: [event],
          nursery: event.field,
        });
      } else {
        groupedEvents[index].events.push(event);
      }
    });

    this.setState({ groupedEvents });
  }
