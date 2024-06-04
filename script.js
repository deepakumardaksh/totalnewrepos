const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const slide = document.querySelector(".slide")
let currentIndex = 0;

// contact us
// script.js
document.getElementById('contactButton').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'none';
});

// Optional: Close the form when clicking outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('contactForm')) {
        document.getElementById('contactForm').style.display = 'none';
    }
}

// contact us


function showSlide(index) {
    if (index >= dots.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = dots.length - 1;
    } else {
        currentIndex = index;
    }
    
    slides.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(dot.getAttribute('data-index'));
    });
});

setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

showSlide(currentIndex);

//projecet card right
const pcrBg1=document.querySelector(".pcr1")
const pcrBg2=document.querySelector(".pcr2")
const pcrBg3=document.querySelector(".pcr3")
const imgChange= document.querySelector(".imgChange")

 const pcr1=()=>{
    pcrBg1.style.backgroundColor="red"
    imgChange.src= "./fyleimg/projectimg1.jpg"
 }

 const pcr2=()=>{
    pcrBg2.style.backgroundColor="red"
    imgChange.src= "./fyleimg/projectimg2.jpg"
 }

 const pcr3=()=>{
    pcrBg3.style.backgroundColor="red"
    imgChange.src= "./fyleimg/projectimg3.jpg"
 }