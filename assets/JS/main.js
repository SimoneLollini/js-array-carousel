// inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
// console.log(slideArray);
let activeImage = 0;
for (let i = 0; i < images.length; i++) {
    const slideEl = images[i];

    // if (i === slideEl) {
    //     class_value = "active_slide"
    // } else {
    //     class_value = ""
    // }
    const activeSlide = ` <img class="${i === activeImage ? 'active_slide' : ''}" src="./assets/${slideEl}" alt="">`
    console.log(activeSlide);

    document.querySelector('.carousel').insertAdjacentHTML('beforeend', activeSlide);
    // document.querySelector(".container>img").style.display = "none";
    // document.querySelector('.container').insertAdjacentHTML('afterbegin', slideEL)
    // document.querySelector('.carousel > img').style.display = "inline-block";
}


//  Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1

const nextButtonEl = document.querySelector('.next');
const prevButtonEl = document.querySelector('.prev');

nextButtonEl.addEventListener('click', function () {
    // console.log('next');
    const slides = document.querySelectorAll('.carousel > img'); // getElementsByClassName
    const currentSlide = slides[activeImage]; // slides[0]
    // tolgo classe active
    currentSlide.classList.remove('active_slide')
    // incremento active image di uno
    activeImage++
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active_slide')

})
prevButtonEl.addEventListener('click', function () {
    // console.log('prev');
    const slides = document.querySelectorAll('.carousel > img'); // getElementsByClassName
    const currentSlide = slides[activeImage]; // slides[0]
    // tolgo classe active
    currentSlide.classList.remove('active_slide')
    // incremento active image di uno
    activeImage--
    //seleziono la seconda immagine
    const nextSlide = slides[activeImage]
    console.log(nextSlide);
    // gli applico la classe active
    nextSlide.classList.add('active_slide')

})
