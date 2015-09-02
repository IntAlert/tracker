var isConnected = false;
var firebaseRef = new Firebase('https://crackling-fire-1447.firebaseio.com/');
firebaseRef.child('.info/connected').on('value', function(connectedSnap) {
  if (connectedSnap.val() === true) {
    isConnected = true;
  } else {
    isConnected = false;
  }
});

var isSMSWaiting = false;

//THIS CENTRES CALENDAR UI PICKERS
jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");
  this.css("left", (($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px");
  return this;
};

var postLoginURL = false; //sets intent triggered to false

function handleOpenURL(url) {
    console.log("received url: " + url);
    var urlParts = url.split('//'); //split url to remove 'secapp://'
    var addressInternal = urlParts[1]; //store remainder of string
    var addressInternalParts = addressInternal.split('/'); //split again
    if (addressInternalParts[0] == 'trip') { //if intent is trip related
        var tripid = addressInternalParts[1]; //store tripid
        console.log(tripid);
        postLoginURL = true; //intent triggered to true
        sessionStorage.setItem("thistripid", tripid); //store tripid into session storage
    } //passes onto authHandler()
}