window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '5rem',
    delay: 300
});
sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '5rem',
    delay: 300
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '5rem',
    delay: 300
});
sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '5rem',
    delay: 300
});

ScrollReveal().reveal('.ani1', { delay: 250 });
ScrollReveal().reveal('.ani2', { delay: 500 });
ScrollReveal().reveal('.ani3', { delay: 750 });
ScrollReveal().reveal('.ani4', { delay: 1000 });
ScrollReveal().reveal('.ani5', { delay: 1250 });
ScrollReveal().reveal('.ani6', { delay: 1500 });
ScrollReveal().reveal('.ani7', { delay: 1750 });
ScrollReveal().reveal('.ani8', { delay: 2000 });


// -------------

let menu = document.querySelector('#menuBtn');
let navbar = document.querySelector('.navbar .items');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}