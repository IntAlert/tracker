////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialogEmail" ).dialog({
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
    $( "#dialogPass" ).dialog({
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
function firstRun() {
    var status = localStorage.getItem("status")
    if (status === null || status.length === 0){
        window.location="create.html";
    }
}

function authMe() {
username = document.getElementById("name").value;
if(typeof(Storage) !== "undefined") {
            sessionStorage.setItem("email", username);
}
password = document.getElementById("password").value;
if (username === "") {
    $( "#dialogEmail" ).dialog( "open" );
   return;
} else {
if (password === "") {
    $( "#dialogPass" ).dialog( "open" );
   return;
} else {
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts");
        ref.authWithPassword({
            "email": username,
            "password": password
            }, authHandler);
        }
    }
}

$(function(){
    $("form").submit(function(){
        authMe();
        return false;
    })
})

// Create a callback to handle the result of the authentication
function authHandler(error, authData) {
if (error) {
    $( "#dialogErrorText" ).text(error);
    $( "#dialogError" ).dialog( "open" );
    } else {
        window.location="main.html";
    }
}

function forgotPass() {
    window.location="forgot.html";
}