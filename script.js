// Function to change the image source inside the modal
function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
}


let images = [
    './images/pre1.jpeg',
    './images/img18.jpeg',
    './images/pre13.jpeg',
    './images/pre17.jpeg',
    './images/pre11.jpeg',
    './images/pre16.jpeg',
    './images/img7.jpg',
    './images/img11.jpg'
];
let currentIndex = 0;

function openModal(index) {
    currentIndex = index;
    document.getElementById("modalImage").src = images[currentIndex];
    document.getElementById("imageModal").classList.add("show");
    document.getElementById("imageModal").style.display = "block";
}

function closeModal() {
    document.getElementById("imageModal").classList.remove("show");
    document.getElementById("imageModal").style.display = "none";
}

function changeImage(step) {
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById("modalImage").src = images[currentIndex];
}



window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 5) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// 

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const socialIcons = document.querySelector(".social-icons");

    toggleButton.addEventListener("click", function () {
        socialIcons.classList.toggle("show-icons");
    });
});

