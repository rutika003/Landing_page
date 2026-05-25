AOS.init({
    duration:1000,
    once:true
});

// FAQ

const faqBoxes = document.querySelectorAll(".faq-box");

faqBoxes.forEach(box => {

    const question = box.querySelector(".faq-question");

    question.addEventListener("click", () => {

        box.classList.toggle("active");

    });

});

// MOBILE MENU

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Open & Close Menu

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

});

// Close Menu After Clicking Links

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});

// CONTACT FORM

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});

// COUNTER

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 200;

        if(c < target){

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 10);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});