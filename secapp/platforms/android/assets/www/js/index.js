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
    console.log(remember);
    if (status === null || status.length === 0){
        window.location="create.html";
    }
    if (remember === "true") {
        console.log("inside true");
        var email = localStorage.getItem("remail");
        document.getElementById("rememberme").checked = true;
        console.log(email);
        document.getElementById("name").value = email;
    }
    else if (remember === "false") {
        console.log("inside false");
        document.getElementById("rememberme").checked = false;
        document.getElementById("rememberme").value = "";
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
    firstRun();
    $("form").submit(function(){
        authMe();
        rememberMe();
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

function rememberMe() {
    if (document.getElementById("rememberme").checked === true) {
        console.log("remember me");
        localStorage.setItem("remember","true");
        var rememberemail = document.getElementById("name").value;
        localStorage.setItem("remail",rememberemail);
    }
    else if (document.getElementById("rememberme").checked === false) {
        console.log("dont remember me");
        localStorage.setItem("remember","false");
        localStorage.setItem("remail","");
    }
}