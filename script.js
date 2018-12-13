$(function() {
  $("#close").click(function() {
    $('.overlay-ribbon').addClass("slideout");
  });

});

var videoElement = document.getElementById("overlay-ribbon");
  
function toggleFullScreen() {
  if (!document.mozFullScreen && !document.webkitFullScreen) {
    if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else {
      videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else {
      document.webkitCancelFullScreen();
    }
  }
}

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);