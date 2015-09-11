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
    var status = localStorage.getItem("status");
    //Check if remember me was checked
    var remember = localStorage.getItem("remember");
    if (status === null || status.length === 0){
        window.location="create.html";
    }
    if (remember === "true") {
        var email = localStorage.getItem("remail");
        document.getElementById("rememberme").checked = true;
        console.log(email);
        document.getElementById("name").value = email;
    }
    else if (remember === "false") {
        document.getElementById("rememberme").checked = false;
        document.getElementById("rememberme").value = "";
    }
}

function authMe() {
    var username = document.getElementById("name").value;
    if(typeof(Storage) !== "undefined") {
        sessionStorage.setItem("email", username);
    }
    var password = document.getElementById("password").value;
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
    firstRun();
    $("form").submit(function(){
        authMe();
        rememberMe();
        return false;
    });
});

// Create a callback to handle the result of the authentication
function authHandler(error, authData) {
if (error) {
    $( "#dialogErrorText" ).text(error);
    $( "#dialogError" ).dialog( "open" );
    } else {
        //picks up from handleOpenURL()
        if (postLoginURL == true) { //if intent called true
            console.log(postLoginURL);
            window.location="mytrip.html"; //redirect to mytrip.html
            //GO TO URL
        } else {
            //IF NOT, Normal login
            console.log(postLoginURL);
            postLoginURL = false; //set intent called to false, just in case
            console.log(postLoginURL);
            sessionStorage.setItem("thistripid", null); //set session storage back to null
            window.location="main.html"; //redirect to main.html
        }
    }
}

function forgotPass() {
    window.location="forgot.html";
}

function create() {
    window.location="create.html";
}

function rememberMe() {
    if (document.getElementById("rememberme").checked === true) {
        localStorage.setItem("remember","true");
        var rememberemail = document.getElementById("name").value;
        localStorage.setItem("remail",rememberemail);
    }
    else if (document.getElementById("rememberme").checked === false) {
        localStorage.setItem("remember","false");
        localStorage.setItem("remail","");
    }
}