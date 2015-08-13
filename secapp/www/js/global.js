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