function createEventIOS(startDate, endDate, destination, contactname) {
    console.log("ios create event");
    var endDate = new Date(endDate.getTime());
    endDate.setHours(23);
    endDate.setMinutes(59);
    var title = "International Alert Trip: " + destination;
    var eventLocation = destination;
    var notes = "Don't forget to check in with " + contactname + " to let everyone know things are okay!";
    window.plugins.calendar.createEvent(title,eventLocation,notes,startDate,endDate);
}

function createEvent(startDate, endDate, destination, contactname, cb) {
    console.log("Inside function");
    console.log(startDate);
    // prep some variables
    //  var startDate = new Date(2015,2,15,18,30,0,0,0); // beware: month 0 = january, 11 = december
    //  var endDate = new Date(2015,2,15,19,30,0,0,0);
    var startDate2 = new Date(startDate.getTime());
    startDate2.setHours(23);
    startDate2.setMinutes(59);
    console.log("start1");
    console.log(startDate);
    console.log("start2");
    console.log(startDate2);
    //start date 2 hours to 23
    var title = "International Alert Trip: " + destination;
    console.log(title);
    var eventLocation = destination;
    console.log(eventLocation);
    var mytripid = sessionStorage.getItem("thistripid");
    var deeplink = ""; //INSERT DEEPLINK INTO CALENDAR
    var notes = "Don't forget to check in  with " + contactname + " to let everyone know things are okay! " + deeplink;
    console.log(notes);
//    var success = function(message) { alert("Success: " + JSON.stringify(message)); };
//    var error = function(message) { alert("Error: " + message); };

    //    // create a calendar (iOS only for now)
    //  window.plugins.calendar.createCalendar(calendarName,success,error);
    //    // if you want to create a calendar with a specific color, pass in a JS object like this:
    //  var createCalOptions = window.plugins.calendar.getCreateCalendarOptions();
    //  createCalOptions.calendarName = "My Cal Name";
    //  createCalOptions.calendarColor = "#FF0000"; // an optional hex color (with the # char), default is null, so the OS picks a color
    //  window.plugins.calendar.createCalendar(createCalOptions,success,error);

    //    // delete a calendar (iOS only for now)
    //  window.plugins.calendar.deleteCalendar(calendarName,success,error);

    // create an event silently (on Android < 4 an interactive dialog is shown)
    //  window.plugins.calendar.createEvent(title,eventLocation,notes,startDate,endDate,success,error);

    //    // create an event silently (on Android < 4 an interactive dialog is shown which doesn't use this options) with options:
    var calOptions = window.plugins.calendar.getCalendarOptions(); // grab the defaults
    //  calOptions.firstReminderMinutes = 120; // default is 60, pass in null for no reminder (alarm)
    //  calOptions.secondReminderMinutes = 5;

    //    // Added these options in version 4.2.4:
    calOptions.recurrence = "daily"; // supported are: daily, weekly, monthly, yearly
    calOptions.recurrenceEndDate = endDate; // leave null to add events into infinity and beyond
    //  calOptions.calendarName = "MyCreatedCalendar"; // iOS only
    //  calOptions.calendarId = 1; // Android only, use id obtained from listCalendars() call which is described below. This will be ignored on iOS in favor of calendarName and vice versa. Default: 1.
    //
    //    // And the URL can be passed since 4.3.2 (will be appended to the notes on Android as there doesn't seem to be a sep field)
    //  calOptions.url = "https://www.google.com";
    //
    console.log("createeventwithoptions");
    console.log(calOptions);
    console.log(startDate);
    window.plugins.calendar.createEventWithOptions(title,eventLocation,notes,startDate,startDate2,calOptions,cb,function(e){
        console.log("ERROR: " + e);
    });
    console.log("done");
    //
    //    // create an event interactively
    //  window.plugins.calendar.createEventInteractively(title,eventLocation,notes,startDate,endDate,success,error);
    //
    //    // create an event interactively with the calOptions object as shown above
    //  window.plugins.calendar.createEventInteractivelyWithOptions(title,eventLocation,notes,startDate,endDate,calOptions,success,error);
    //
    //    // create an event in a named calendar (iOS only for now)
    //  window.plugins.calendar.createEventInNamedCalendar(title,eventLocation,notes,startDate,endDate,calendarName,success,error);
    //
    //    // find events (on iOS this includes a list of attendees (if any))
    //  window.plugins.calendar.findEvent(title,eventLocation,notes,startDate,endDate,success,error);
    //
    //    // list all events in a date range (only supported on Android for now)
    //  window.plugins.calendar.listEventsInRange(startDate,endDate,success,error);
    //
    //    // list all calendar names - returns this JS Object to the success callback: [{"id":"1", "name":"first"}, ..]
    //  window.plugins.calendar.listCalendars(success,error);
    //
    //    // find all _future_ events in the first calendar with the specified name (iOS only for now, this includes a list of attendees (if any))
    //  window.plugins.calendar.findAllEventsInNamedCalendar(calendarName,success,error);
    //
    //    // change an event (iOS only for now)
    //  var newTitle = "New title!";
    //  window.plugins.calendar.modifyEvent(title,eventLocation,notes,startDate,endDate,newTitle,eventLocation,notes,startDate,endDate,success,error);
    //
    //    // delete an event (you can pass nulls for irrelevant parameters, note that on Android `notes` is ignored). The dates are mandatory and represent a date range to delete events in.
    //    // note that on iOS there is a bug where the timespan must not be larger than 4 years, see issue 102 for details.. call this method multiple times if need be
    //    // since 4.3.0 you can match events starting with a prefix title, so if your event title is 'My app - cool event' then 'My app -' will match.
    //  window.plugins.calendar.deleteEvent(newTitle,eventLocation,notes,startDate,endDate,success,error);
    //
    //    // delete an event, as above, but for a specific calendar (iOS only)
    //  window.plugins.calendar.deleteEventFromNamedCalendar(newTitle,eventLocation,notes,startDate,endDate,calendarName,success,error);
    //
    //    // open the calendar app (added in 4.2.8):
    //    // - open it at 'today'
    //  window.plugins.calendar.openCalendar();
    //    // - open at a specific date, here today + 3 days
    //  var d = new Date(new Date().getTime() + 3*24*60*60*1000);
    //  window.plugins.calendar.openCalendar(d, success, error); // callbacks are optional
}

function deleteEvent(startDate, endDate, destination) {
    var title = "International Alert Trip: " + destination;
//    var success = function(message) { alert("Success: " + JSON.stringify(message)); };
//    var error = function(message) { alert("Error: " + message); };
    //    console.log(title);
    //    console.log(startDate);
    //    console.log(endDate);
    //    console.log(destination);
    //    console.log(eventLocation);
    //    // delete an event (you can pass nulls for irrelevant parameters, note that on Android `notes` is ignored). The dates are mandatory and represent a date range to delete events in.
    //    // note that on iOS there is a bug where the timespan must not be larger than 4 years, see issue 102 for details.. call this method multiple times if need be
    //    // since 4.3.0 you can match events starting with a prefix title, so if your event title is 'My app - cool event' then 'My app -' will match.
    window.plugins.calendar.deleteEvent(title,destination,null,startDate,endDate);
}

function deleteOldEvent(oldStartDate, oldEndDate, oldDestination) {
    var oldStartDate = new Date(oldStartDate);
    var oldEndDate = new Date(oldEndDate);
    console.log("Im in");
    var title = "International Alert Trip: " + oldDestination;
//    var success = function(message) { alert("Success: " + JSON.stringify(message)); };
//    var error = function(message) { alert("Error: " + message); };
    console.log(title);
    console.log(typeof oldStartDate);
    console.log(typeof oldEndDate);
    console.log(oldDestination);
    //    // delete an event (you can pass nulls for irrelevant parameters, note that on Android `notes` is ignored). The dates are mandatory and represent a date range to delete events in.
    //    // note that on iOS there is a bug where the timespan must not be larger than 4 years, see issue 102 for details.. call this method multiple times if need be
    //    // since 4.3.0 you can match events starting with a prefix title, so if your event title is 'My app - cool event' then 'My app -' will match.
    window.plugins.calendar.deleteEvent(title,oldDestination,null,oldStartDate,oldEndDate);
}