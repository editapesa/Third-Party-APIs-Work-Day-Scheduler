//today's date appears
var currentDayEl = $('#currentDay');
var todaysDate = moment().format("MMM Do YYYY");
currentDayEl.text(todaysDate);
//console.log(todaysDate);

//var eventDescription = $('input[name="description"]');

// each timeblock is color coded to indicate whether it is in the past, present, or future
// click into a timeblock & enter an event
// click the save button for a timeblock & the text for that event is saved in local storage
// refresh the page, the saved events persist