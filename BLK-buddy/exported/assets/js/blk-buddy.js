$(document).ready(function() {
  $("#userProfileIcon").on("click", function() {
    $("#profileOverlayContainer").show();
    $("body").css({ overflow: "hidden" });
  });

  $("#profileOverlayClose").on("click", function() {
    $("#profileOverlayContainer").hide();
    $("body").css({ overflow: "auto" });
  });
});
