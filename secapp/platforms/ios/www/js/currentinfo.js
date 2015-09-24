/*jshint maxerr: 100*/
////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialogError" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "OK": function() {
                $( this ).dialog( "close" );
            }
        }
    });
});

////////// MAIN SCRIPTS \\\\\\\\\\
var myID = "";
var uName = "";
var email = sessionStorage.getItem("email");
function authDataCallback(authData) {
    if (authData) {
    myID = authData.uid.substring(12,16);
    } 
}  
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
ref.onAuth(authDataCallback);

var count = 0;
var triggered = false;
var trip = [];
//GRAB DATA FROM DATABASE
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/trips");
ref.orderByChild("email").equalTo(email).on("child_added", function(snapshot) {
    newTrip = snapshot.val();
    newTrip.key = snapshot.key();
    trip.push(newTrip);
    updateList();
});

//SORT RESULTS BY DATE
function updateList() {
    //SORT
    var tripsSorted = trip.sort(sortingFn);
    
    //CLEAR
    $("#trip").empty();
    
    //GO THROUGH EACH TRIP
    $(tripsSorted).each(function(){
        //INJECT trip Button
        var tripButton = "<button onClick='displayTrip(\""+this.key+"\")' id='trips' class='trips'><b>Destination: </b>" + this.destination + "<br><b>Departing: </b>" + this.leave + "<br><b>Returning: </b>" + this.back + "</button>";
       
        $("#trip").append(tripButton);
    });
    
    // if there are more than five trips, add an extra back button at the top
     if($(tripsSorted).length > 5) {
        
        // define extra back button
        var extraBackButton = '<form name="back" action="main.html"><input class="backbutton" type="submit" value="Back"></form><br>';
        
         $("#trip").append(extraBackButton); // "prepend" adds to the top of #trip
    }
}

function sortingFn(tripA,tripB) {
    var tripADate = parseDMY(tripA.leave);
    var tripBDate = parseDMY(tripB.leave);
    return ((tripADate < tripBDate) ? -1 : ((tripADate > tripBDate) ? 1 : 0));
}

function parseDMY(value) {
    var date = value.split("/");
    var d = parseInt(date[0], 10),
        m = parseInt(date[1], 10),
        y = parseInt(date[2], 10);
    return new Date(y, m - 1, d);
}

function displayTrip(key) {
    if(typeof(Storage) !== "undefined") {
        sessionStorage.setItem("thistripid", key);
        window.location = "mytrip.html";
    } else {
        $( "#dialogError" ).dialog( "open" );
    }
}