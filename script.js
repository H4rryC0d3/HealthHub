let menubar = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// Get the modal element
var modal = document.getElementById("appointmentModal");

// Get the button that opens the modal
var btn = document.getElementById("openAppointmentModal"); 

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the "Make Appointment" button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
