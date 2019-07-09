// Event.date - means api data
const newDatePresentation = new Date(event.date);
<td>
{new Intl.DateTimeFormat('en-US').format(newDatePresentation)}
</td>
