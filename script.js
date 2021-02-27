//today's date appears
var currentDayEl = $('#currentDay');
var todaysDate = moment().format("MMM Do YYYY");
currentDayEl.text(todaysDate);
//console.log(todaysDate);

// click the save button for a timeblock & the text for that event is saved in local storage
// refresh the page, the saved events remain
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

// each timeblock is color coded to indicate whether it is in the past, present, or future
function timeChecker() {
    var currentTime = moment().hour();

    $('.time-block').each(function() {
        var scheduleHour = parseInt($(this).attr('id').split('hour')[1]);

        if (scheduleHour , currentTime) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
        }
        else if (scheduleHour === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        }
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    })
}
timeChecker();



