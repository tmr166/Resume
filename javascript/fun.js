// Get the modal
var modal = document.querySelector('#myModal');
            
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelector('#outside-modal-img');
var modalImg = document.querySelector("#inside-modal-img");
modalImg.src = img.src;   //set modal image to image clicked
img.onclick = function(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}