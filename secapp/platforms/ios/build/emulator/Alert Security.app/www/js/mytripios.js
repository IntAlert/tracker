/*jshint maxerr: 100*/
$(function () {
    //HIDING AND UNHIDING BUTTONS/INPUTS
    document.getElementById("updatebutton").style.visibility = "hidden";
    document.getElementById("deletebutton").style.visibility = "hidden";
    document.getElementById("editbutton").style.visibility = "visible";
    document.getElementById("backbutton").style.visibility = "visible";
    document.getElementById("cancelbutton").style.visibility = "hidden";
    
    //Init datepickers
    $("#back").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        showOn: "button",
        buttonImage: "img/datepicker.png",
        buttonImageOnly: true,
        onSelect: function (dateText) {
            $("#back").text(dateText);
        },
        beforeShow: function (input, inst) {
            console.log("called");
            setTimeout(function () {
                $(".ui-datepicker").center();
            }, 100);
        }
    });
    $("#leave").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        showOn: "button",
        buttonImage: "img/datepicker.png",
        buttonImageOnly: true,
        onSelect: function (dateText) {
            $("#leave").text(dateText);
//            var date1 = $("#leave").datepicker("getDate");
//            var date = new Date(Date.parse(date1));
            var date = new Date(Date.parse($("#leave").datepicker("getDate")));
            
            date.setDate(date.getDate());
            var newDate = date.toDateString();
            newDate = new Date(Date.parse(newDate));
            $("#back").datepicker("option", "minDate", newDate);
        },
        beforeShow: function (input, inst) {
            console.log("called");
            setTimeout(function () {
                $('.ui-datepicker').center();
            }, 100);
        }
    });
});

////////// DIALOG \\\\\\\\\\
$(function () {
    $("#dialogUpdated").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "OK": function () {
                $(this).dialog("close");
                window.location = "main.html";
            }
        }
    });
});

$(function () {
    $("#dialogDeleted").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "OK": function () {
                $(this).dialog("close");
                window.location = "main.html";
            }
        }
    });
});

$(function () {
    $("#dialogConfirm").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "Confirm": function () {
                var myfb = "https://crackling-fire-1447.firebaseio.com/trips/" + mytripid;
                var ref = new Firebase(myfb);
                var startDate = ($("#leave").datepicker("getDate"));
                var endDate = ($("#back").datepicker("getDate"));
                var destination = document.getElementById("countrydd").value;
                deleteEvent(startDate, endDate, destination);
                ref.remove();
                $(this).dialog("close");
                $("#dialogDeleted").dialog("open");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
});

////////// MAIN SCRIPTS \\\\\\\\\\
var contact = [];

$(function () {
    contactdd();
    countrydd();
    populateForm();
});

function contactdd() {
    var count = 1;
//    var contact = [];
    var myText = "";
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts");
    ref.on("child_added", function (snapshot) {
        var newContact = snapshot.val();
        contact[count] = new Array(4);
        contact[count][1] = newContact.name;
        contact[count][2] = newContact.fullname;
        contact[count][3] = newContact.email;
        contact[count][4] = newContact.phone;
        var select = document.getElementById("contactdd");
        var optn = document.createElement("OPTION");
        optn.text = contact[count][2] + " | " + contact[count][3];
        optn.value = snapshot.key();
        select.options.add(optn);
        count = count + 1;
    });
}

function countrydd() {
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/Countries");
    ref.on("child_added", function (snapshot) {
        var countries = snapshot.val();
        var select = document.getElementById("countrydd");
        var optn = document.createElement("OPTION");
        optn.text = countries;
        optn.value = snapshot.val();
        select.options.add(optn);
    });
}

function populateForm() {
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/trips");
    mytripid = sessionStorage.getItem("thistripid");
    console.log(mytripid);
    ref.child(mytripid).on("value", function (snapshot) {
        thisTrip = snapshot.val();
        console.log("thisTrip: " , thisTrip);
        document.getElementById("leave").value = thisTrip.leave;
        $("#leave").text(thisTrip.leave);
        document.getElementById("back").value = thisTrip.back;
        $("#back").text(thisTrip.back);
        document.getElementById("countrydd").value = thisTrip.destination;
        document.getElementById("contactdd").value = thisTrip.contact;
        $("#leave").datepicker('disable');
        $("#back").datepicker('disable');
    });
}

function storeOldEvent() {
    var oldStartDate = ($("#leave").datepicker("getDate"));
    sessionStorage.setItem("oldStartDate", oldStartDate);
    sessionStorage.setItem("oldEndDate", ($("#back").datepicker("getDate")));
    sessionStorage.setItem("oldDestination", thisTrip.destination);
}

function toggledisabled() {
    document.getElementById("countrydd").disabled = false;
    document.getElementById("contactdd").disabled = false;
    $("#leave").datepicker('enable');
    $("#back").datepicker('enable');
    document.getElementById("leave").disabled = true;
    document.getElementById("back").disabled = true;
    document.getElementById("updatebutton").style.visibility = "visible";
    document.getElementById("deletebutton").style.visibility = "visible";
    document.getElementById("editbutton").style.visibility = "hidden";
    document.getElementById("backbutton").style.visibility = "hidden";
    document.getElementById("cancelbutton").style.visibility = "visible";
    storeOldEvent();
}

function updateTrip() {
    var leave = document.getElementById("leave").value;
    var startDate = ($("#leave").datepicker("getDate"));
    var back = document.getElementById("back").value;
    var endDate = ($("#back").datepicker("getDate"));
    var destination = document.getElementById("countrydd").value;
    var mycontact = document.getElementById("contactdd").value;
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/trips");
    var tripsRef = ref.child(mytripid);
    tripsRef.update({
        "leave": leave,
        "destination": destination,
        "back": back,
        "contact": mycontact,
        "contactname": contact[mycontact][1],
        "contactlastname": contact[mycontact][2],
        "contactemail": contact[mycontact][3],
        "contactphone": contact[mycontact][4]
    }, function(){
        //Pull stored info
        var oldStartDate = sessionStorage.getItem("oldStartDate");
        var oldEndDate = sessionStorage.getItem("oldEndDate");
        var oldDestination = sessionStorage.getItem("oldDestination");
        //Create new event
        createEventIOS(startDate, endDate, destination, "NEW CONTACT"); //CHANGE THIS
    deleteOldEvent(oldStartDate, oldEndDate, oldDestination);
//    deleteOldEvent(oldStartDate, oldEndDate, oldDestination);
    });
    $( "#dialogUpdated" ).dialog( "open" );
}

function deleteTrip() {
    $( "#dialogConfirm" ).dialog( "open");
}