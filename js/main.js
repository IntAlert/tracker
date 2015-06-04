////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialogLogout" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "Confirm": function() {
                window.location = "index.html";
            },
            "Cancel": function() {
                $( this ).dialog( "close" );
            }
        }
    });
});  

$(function() {
    $( "#dialogSOS" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "Confirm": function() {
                sendSMS();
                getLocation();
                $( this ).dialog( "close" );
            },
            "Cancel": function() {
                $( this ).dialog( "close" );
            }
        }
    });
}); 

$(function() {
    $( "#dialogSOSConfirmed" ).dialog({
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

$(function() {
    $( "#dialogSMSError" ).dialog({
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

$(function() {
    $( "#dialogLoggedOut" ).dialog({
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

$(function() {
    $( "#dialogNoGeo" ).dialog({
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
var uLastname = "";
var email = sessionStorage.getItem("email");
function authDataCallback(authData) {
    if (authData) {
    myID = authData.uid.substring(12,16);
    } else {
        $( '#dialogLoggedOut' ).dialog('open');
//                    alert("User is logged out");
    }
}
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
ref.onAuth(authDataCallback);
// Get a reference to our posts
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts/");
// Attach an asynchronous callback to read the data at our posts reference
ref.orderByChild("email").equalTo(email).on("child_added", function(snapshot) {
    var userid = snapshot.val();
    uName = userid.name;
    uLastname = userid.lastname;
    sessionStorage.setItem("name", uName);
    sessionStorage.setItem("lastname", uLastname);
    document.getElementById("welcome").innerHTML = "Welcome " + uName;
}, function (errorObject) {
});    

function logOut() {
    $( "#dialogLogout" ).dialog( "open" );
}

function getLocation() {
    if (navigator.geolocation){ //If Supported
        console.log("Geo supported");
        navigator.geolocation.getCurrentPosition(getPosition,showError);
    }
    else{ //If not Supported
        console.log("Geo NOT supported");
        $( '#dialogNoGeo' ).dialog('open');
//                    alert("Geolocation not supported.");
//        sendSMS();
    }
}

function showError(error) {
    var msg = "";
    switch(error.code) {
    case error.PERMISSION_DENIED:
        msg = "User denied the request for Geolocation."
        break;
    case error.POSITION_UNAVAILABLE:
        msg = "Location information is unavailable."
        break;
    case error.TIMEOUT:
        msg = "The request to get user location timed out."
        break;
    case error.UNKNOWN_ERROR:
        msg = "An unknown error occurred."
        break;
    }
    console.log(msg);
}

function getPosition(position) { //NO SIGNAL MEANS IT HANGS HERE UNTIL SIGNAL REGAINED?
    console.log("GetPosition");
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    sessionStorage.setItem("lat", latitude);
    sessionStorage.setItem("lon", longitude);
    console.log("adding SOS");
    addSOS();
}

function addSOS() {
    //var leave = document.getElementById("leave").value;
    //var back = document.getElementById("back").value;
    //var destination = document.getElementById("destination").value;
    //var mycontact = document.getElementById("contactdd").value;

    var email = sessionStorage.getItem("email");
    var name = sessionStorage.getItem("name");
    var lastname = sessionStorage.getItem("lastname");
    var lat = sessionStorage.getItem("lat");
    var lon = sessionStorage.getItem("lon");
//    console.log("AboutToSendSMS");
//    sendSMS();

    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
    var sosRef = ref.child("sos");
    var newSosRef = sosRef.push().set({
        name: name,
        lastname: lastname,
        email: email,
        lat: lat,
        lon: lon,
        timestamp: new Date().getTime().toString()
    });
}

function SOS_saved(error) {
    console.log("setting smswaiting to false");
    isSMSWaiting = false;
    console.log("set.");
    $( '#dialogSOSConfirmed' ).dialog('open');
}

function sendSMS() {
    console.log("StartingSMSSend");
    var message = "SOS raised by " + uName + " " + uLastname + ".";
    var number = "07947476240";
//                var success = function () { alert('Message sent successfully'); };
    var error = function(e) {
        $( '#dialogSMSError .ErrorMessage' ).text("SMS SEND ERROR:" + e);
        $( '#dialogSMSError' ).dialog('open');
//                    alert('Message Failed:' + e);
    };
    isSMSWaiting = true;
    console.log("SMS Waiting true");
    sms.send(number, message, {android: {intent:""}}, SOS_saved);
    setTimeout(function(){
        if (isSMSWaiting == true) {
            $( '#dialogSMSError .ErrorMessage' ).text("Your SMS has not been sent due to lack of signal, but we are still trying.");

            $( '#dialogSMSError' ).dialog('open');
        }
    },5000)
}