$(function() {
    //Init datepickers
    $( "#back" ).datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        showOn: "button",
        buttonImage: "img/datepicker.png",
        buttonImageOnly: true,
        onSelect: function(dateText){
            $( "#back" ).text(dateText);
        }
    });
    $( "#leave" ).datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        showOn: "button",
        buttonImage: "img/datepicker.png",
        buttonImageOnly: true,
        onSelect: function(dateText){
            $( "#leave" ).text(dateText);
            var date1 = $("#leave").datepicker("getDate");          
            var date = new Date( Date.parse( date1 ) );
            date.setDate( date.getDate());       
            var newDate = date.toDateString();
            newDate = new Date( Date.parse( newDate ) );                     
            $("#back").datepicker("option","minDate",newDate);
        }
    });
});

////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialogTripAdded" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "Yes": function() {
                $( this ).dialog( "close" );
                window.location.reload();
            },
            "No": function() {
                $( this ).dialog( "close" );
                window.location = "main.html";
            }
        }
    });
});

$(function() {
    $( "#dialogValLeave" ).dialog({
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
    $( "#dialogValReturn" ).dialog({
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
    $( "#dialogValDest" ).dialog({
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
    $( "#dialogValContact" ).dialog({
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
    $( "#dialogNoSignal" ).dialog({
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
function authDataCallback(authData) {
    if (authData) {
    myID = authData.uid.substring(12,16);
    } 
}             
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
ref.onAuth(authDataCallback);

var uemail = sessionStorage.getItem("email");

function addTrip() {            
    if(isConnected == false) {
        $( '#dialogNoSignal' ).dialog('open');
        return;
    }
    var leave = document.getElementById("leave").value;
    var startDate = ($( "#leave" ).datepicker( "getDate" )); //get date for event
    var back = document.getElementById("back").value;
    var endDate = ($( "#back" ).datepicker( "getDate" )); //get date for event
    var destination = document.getElementById("destination").value;
    var mycontact = document.getElementById("contactdd").value;
    var name = sessionStorage.getItem("name");
    var lastname = sessionStorage.getItem("lastname");
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/");
    var tripsRef = ref.child("trips");
    var newTripsRef = tripsRef.push({
        leave: leave,
        destination: destination,
        back: back,
        uid: myID,
        email: uemail,
        contact: mycontact,
        contactname: contact[mycontact][1],
        contactlastname: contact[mycontact][2],
        contactemail: contact[mycontact][3],
        contactphone: contact[mycontact][4],
        name: name,
        lastname: lastname
    }, function(){
            createEvent(startDate, endDate, destination, contact[mycontact][2]);
            $( '#dialogTripAdded' ).dialog('open');
        });
    var tripID = newTripsRef.key();
}

var count = 1;
var contact = [];
var myText = "";
var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts");
ref.on("child_added", function(snapshot) {
newContact = snapshot.val();
contact[count] = new Array(4);
contact[count][1] = newContact.name;
contact[count][2] = newContact.fullname;
contact[count][3] = newContact.email;
contact[count][4] = newContact.phone;
document.getElementById("contactdd");
var optn = document.createElement("OPTION");
    optn.text = contact[count][2] + " | " + contact[count][3];
    optn.value = snapshot.key();
    contactdd.options.add(optn);
count = count + 1; 
});

function validateForm() {
    if(document.tripdetails.leave.value == "") {
        $( '#dialogValLeave' ).dialog('open');
        document.tripdetails.leave.focus();
        return false;
    }
    if(document.tripdetails.back.value == "") {
        $( '#dialogValReturn' ).dialog('open');
        document.tripdetails.back.focus();
        return false;
    }
    if (document.tripdetails.destination.value == "Select a country") {
        $( '#dialogValDest' ).dialog('open');
        document.tripdetails.destination.focus();
        return false;
    }
    if (document.tripdetails.contactdd.value == "Select a contact") {
        $( '#dialogValContact' ).dialog('open');
        document.tripdetails.contactdd.focus();
        return false;
    }
    addTrip();
}