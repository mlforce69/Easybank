$(function() {
    $('.navbar-toggler').click(function() {
      $('#hamburger-toggle').toggleClass('d-none');
      $('#close-toggle').toggleClass('d-none');  
    });
  });


let modal = document.getElementById("myModal");

let btn = document.getElementsByClassName("btn");

let span = document.getElementsByClassName("close")[0];

btn[0].onclick = function() {
  modal.style.display = "block";
}

btn[1].onclick = function() {
  modal.style.display = "block";
}

btn[2].onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}