



console.log("Najmah Dev Portfolio Loaded Successfully");

// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// وقتی DOM کامل لود شد
document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");
        });
    } else {
        console.error("Hamburger or NavMenu not found!");
    }

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });

});


// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

const sections = document.querySelectorAll("section");

const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            sec.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();


const typedText = document.getElementById("typed");

const words = [
    "Front-end Developer",
    "UI Designer",
    "Creative Web Builder",
    "Problem Solver"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {

    currentWord = words[i];

    if (isDeleting) {
        typedText.textContent = currentWord.substring(0, j--);
    } else {
        typedText.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});




