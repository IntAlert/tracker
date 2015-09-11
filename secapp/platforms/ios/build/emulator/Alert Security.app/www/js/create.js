////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialog" ).dialog({
        autoOpen: true,
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
    $( "#dialogPassword1" ).dialog({
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
    $( "#dialogPassword2" ).dialog({
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
    $( "#dialogPassMatchErr" ).dialog({
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
    $( "#dialogAcc" ).dialog({
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
    $( "#dialogAccErr" ).dialog({
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
var password1 = "";
var email = "";
function validateAcc() {
    email = document.getElementById("name").value;
    password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    if (email === "") {
        $( "#dialogEmail" ).dialog( "open" );
        return;
    }
    if (password1 === "") {
        $( "#dialogPassword1" ).dialog( "open" );
        return;
    }
    if (password2 === "") {
        $( "#dialogPassword2" ).dialog( "open" );
        return;
    }
    if (password1 === password2) {
        createAcc();
    } else {
        $( "#dialogPassMatchErr" ).dialog( "open" );
        return;
    }
} 

function createAcc() {
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com");
    ref.createUser({
        email    : email,
        password : password1
    }, function(error, userData) {
        if (error) {
            $( "#dialogAccErr" ).dialog( "open" );
        } else {
            $( "#dialogAcc" ).dialog( "open" );
            localStorage.setItem("status", "true");
            window.location="index.html";
        }
    });   
}

function existingAcc() {
    localStorage.setItem("status", "true");
    window.location='index.html';
}