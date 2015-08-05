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
                //SMS
                //GEO
                //AddSOS
                //Photo
                //Add Photo to SOS
                
                sendSMS();
                getLocation();
                sosCamera();
                $( this ).dialog( "close" );
            },
            "Cancel": function() {
                $( this ).dialog( "close" );
            }
        }
    });
});

$(function() {
    $( "#dialogCheckIn" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "Confirm": function() {
                CheckInSMS();
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
    $( "#dialogCheckInConfirmed" ).dialog({
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
                addSOS();
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
    }
}
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
ref.onAuth(authDataCallback);
// Get a reference to our posts
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts/");
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
        navigator.geolocation.getCurrentPosition(savePosition,showError);
    }
    else{ //If not Supported
        $( '#dialogNoGeo' ).dialog('open');
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
}

function savePosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    sessionStorage.setItem("lat", latitude);
    sessionStorage.setItem("lon", longitude);
    addSOS();
}

function addSOS() {
    console.log("Adding SOS");
    var email = sessionStorage.getItem("email");
    var name = sessionStorage.getItem("name");
    var lastname = sessionStorage.getItem("lastname");
    var lat = sessionStorage.getItem("lat");
    var lon = sessionStorage.getItem("lon");

    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
    var sosRef = ref.child("sos");
    var newSosRef = sosRef.push({
        name: name,
        lastname: lastname,
        email: email,
        lat: lat,
        lon: lon,
        timestamp: new Date().getTime().toString(),
        photo: ""
    });
    console.log(newSosRef.key());
    //save key for passing to uploadPhoto
    var soskey = newSosRef.key();
    sessionStorage.setItem("soskey", soskey);
}

function CheckInSMS() {
    var message = "Hello, this is " + uName + " " + uLastname + ". I'm just checking in to let you know that everything is alright!";
    var number = "07947476240";
    var error = function(e) {
        $( '#dialogSMSError .ErrorMessage' ).text("SMS SEND ERROR:" + e);
        $( '#dialogSMSError' ).dialog('open');
    };
    isSMSWaiting = true;
    sms.send(number, message, {android: {intent:""}}, CheckIn_confirm);
    setTimeout(function(){
        if (isSMSWaiting == true) {
            $( '#dialogSMSError .ErrorMessage' ).text("Your SMS has not been sent due to lack of signal, but we are still trying.");
            $( '#dialogSMSError' ).dialog('open');
        }
    },5000)
}

function CheckIn_confirm(error) {
    isSMSWaiting = false;
    $( '#dialogCheckInConfirmed' ).dialog('open');
}

function SOS_saved(error) {
    isSMSWaiting = false;
    $( '#dialogSOSConfirmed' ).dialog('open');
}

function sendSMS() {
    var message = "SOS raised by " + uName + " " + uLastname + ".";
    var number = "07947476240";
    var error = function(e) {
        $( '#dialogSMSError .ErrorMessage' ).text("SMS SEND ERROR:" + e);
        $( '#dialogSMSError' ).dialog('open');
    };
    isSMSWaiting = true;
    sms.send(number, message, {android: {intent:""}}, SOS_saved);
    setTimeout(function(){
        if (isSMSWaiting == true) {
            $( '#dialogSMSError .ErrorMessage' ).text("Your SMS has not been sent due to lack of signal, but we are still trying.");
            $( '#dialogSMSError' ).dialog('open');
        }
    },5000)
}

function sosCamera() {
    var options = {
        name: "SOS",
        dirName: "AlertSecurity",
        orientation: "portrait",
        type: "front"
    };
    window.plugins.CameraPictureBackground.takePicture(success, error, options);
    
    function success(imgurl) {
        console.log("Success!");
        console.log(imgurl);
        sosConvertImage("file://" + imgurl, uploadPhoto, "image/png");
    }
    
    function error() {
        console.log("ERROR!");   
    }
}

function sosConvertImage(url, callback, outputFormat) { //Converts to base64
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function(){
        var canvas = document.createElement('CANVAS'),
        ctx = canvas.getContext('2d'), dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}

function uploadPhoto(dataURL) {
    console.error("Uploading Photo: " + dataURL);
    var soskey = sessionStorage.getItem("soskey");
    console.log(soskey);
    var addPhotoRef = new Firebase("https://crackling-fire-1447.firebaseio.com/sos/" + soskey);
    //UPDATE RECORD WITH PHOTO
    addPhotoRef.update({ photo: dataURL });
}