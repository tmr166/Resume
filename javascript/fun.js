$("#inside-modal-img").attr("src", $("#outside-modal-img").attr("src")); //set modal image to image clicked

$(document).ready(function () {
  $('#outside-modal-img').click(function () {
    $("#myModal").css({
      display: "block"
    });
    $("#inside-modal-img").css({
      height: "50%",
      width: "auto"
    });
  });

  $('.close').click(function () {
    $("#myModal").css({
      display: "none"
    });
  });
});

