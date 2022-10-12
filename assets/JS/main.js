// inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
// console.log(slideArray);

for (let i = 0; i < images.length; i++) {
    const slideEl = images[i];
    const activeSlide = ` <img src="./assets/${slideEl}" alt="">`
    console.log(activeSlide);
    // document.querySelector(".container>img").style.display = "none";
    // document.querySelector('.container').insertAdjacentHTML('afterbegin', slideEL)
    // document.querySelector('.carousel > img').style.display = "none";
    // document.querySelector('.carousel > img').style.display = "inline-block";
    document.querySelector('.container').insertAdjacentHTML('beforeend', activeSlide)
}

// se la condizione active slide= slideEl è vera allora abbino class active

// .classList.add("active");

//  Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1
