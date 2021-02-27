//today's date appears
var currentDayEl = $('#currentDay');
var todaysDate = moment().format("MMM Do YYYY");
currentDayEl.text(todaysDate);
//console.log(todaysDate);



// each timeblock is color coded to indicate whether it is in the past, present, or future

// click the save button for a timeblock & the text for that event is saved in local storage
// refresh the page, the saved events persist
$('.saveBtn').on('click', function () {
    var eventDescription = $(this).siblings('.description').val();
    var timeOfDay = $(this).parent().attr('id');

    localStorage.setItem(timeOfDay, eventDescription);
});

$('#9am .description').val(localStorage.getItem('9am'));
$('#10am .description').val(localStorage.getItem('10am'));
$('#11am .description').val(localStorage.getItem('11am'));
$('#12pm .description').val(localStorage.getItem('12pm'));
$('#1pm .description').val(localStorage.getItem('1pm'));
$('#2pm .description').val(localStorage.getItem('2pm'));
$('#3pm .description').val(localStorage.getItem('3pm'));
$('#4pm .description').val(localStorage.getItem('4pm'));
$('#5pm .description').val(localStorage.getItem('5pm'));





