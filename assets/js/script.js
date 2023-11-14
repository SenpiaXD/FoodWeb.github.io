// Functionality for Every View: Modal View 

const blurElement = document.getElementById("overlay");

var modal = document.getElementById("modal");

var modalTitle = modal.querySelector(".modal-title");
var modalId = modal.querySelector(".modal-id");
var modalStrand = modal.querySelector(".modal-strand");
var modalRole = modal.querySelector(".modal-role");
var modalImage = modal.querySelector(".modal-image");

function modalShow(cardIndex) {

    // Enable blur effect
    blurElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    blurElement.style.backdropFilter = "blur(5px)";
    blurElement.style.height = "1000vh";
    blurElement.style.width = "100%";

    modal.style.display = "block";

    const jsonDataArray = "./assets/json/aboutStudent.json";
    fetch(jsonDataArray)
        .then(response => response.json())
        .then(jsonDataArray => {
            var selectedData = jsonDataArray[cardIndex]
            modalTitle.innerHTML = selectedData.name;
            modalStrand.innerHTML = selectedData.strand;
            modalId.innerHTML = "<b><i>ID: </i></b>" + selectedData.id;
            modalRole.innerHTML = "<b>Worked on: </b>" + selectedData.role;
            modalImage.src = selectedData.imageUrl;
        });
}

document.addEventListener("click", function () {
    var closeButton = document.querySelector(".modal .btn-close");
    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }
});

function closeModal() {
    modal.style.display = "none";

    // Disable blur effect
    blurElement.style.backgroundColor = "";
    blurElement.style.backdropFilter = "";
    blurElement.style.height = "";
    blurElement.style.width = "";
}

// BACKTOTOP
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const backButton = document.querySelector('.back-to-Top');
    if (window.scrollY > 0) {
        backButton.style.display = 'block';
    } else {
        backButton.style.display = 'none';
    }
});

// Hide navbar 

let prevScrollPos = window.scrollY;
    
const navbar = document.getElementById("overlay");

window.onscroll = () => {
    const currentScrollPos = window.scrollY;

    // Check if scrolling down and not in mobile view (viewport width >= 950px)
    if (currentScrollPos > prevScrollPos && window.innerWidth >= 950) {
        navbar.style.top = "-150px";
    } else {
        navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
};

// 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Accordion

document.addEventListener("DOMContentLoaded", function() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});