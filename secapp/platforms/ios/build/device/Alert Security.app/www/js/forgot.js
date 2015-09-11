////////// DIALOG \\\\\\\\\\
$(function() {
    $( "#dialogEmail" ).dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        buttons: {
            "OK": function() {
                $( this ).dialog( "close" );
                window.location = "index.html";
            }
        }
    });
});

$(function() {
    $( "#dialogEmailErr" ).dialog({
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
function passReset() {
    var username = document.getElementById("name").value;
    var ref = new Firebase("https://crackling-fire-1447.firebaseio.com/contacts");
    ref.resetPassword({
        email : username
    }, function(error) {
        if (error === null) {
            $( "#dialogEmail" ).dialog( "open" );
        } else {
            $( "#dialogEmailErr" ).dialog( "open" );
        }
    });
}