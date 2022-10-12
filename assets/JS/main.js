// inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
const slideArray = [
    '<img src="./assets/img/05.webp" alt="">',
    '<img src="./assets/img/04.webp" alt="">',
    '<img src="./assets/img/03.webp" alt="">',
    '<img src="./assets/img/02.webp" alt="">',
    '<img src="./assets/img/01.webp" alt="">'
]
// console.log(slideArray);
let activeSlide;
for (let i = 0; i < slideArray.length; i++) {
    const slideEL = slideArray[i];
    document.querySelector('.container').insertAdjacentHTML('afterbegin', slideEL)
    //document.querySelector('.carousel > img').style.display = "none";
    // document.querySelector('.carousel > img').style.display = "inline-block";
    activeSlide = slideEL
}
console.log(activeSlide);
document.querySelector('.carousel > img').classList.add("active");

// .classList.add("active");
// document.querySelector('.container').insertAdjacentHTML('afterbegin', slideArray)
//  Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1
