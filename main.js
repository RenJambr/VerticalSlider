let downButton = document.querySelector('.down-button');
let upButton = document.querySelector('.up-button');
let slideRight = document.querySelector('.right-slider');
let slideLeft = document.querySelector('.left-slider');
let sliderContainer = document.querySelector('.slider-container');
let sliderLength = document.querySelectorAll('.left-slider div').length;


let activeSlideIndex = 0;

slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`;
slideRight.style.bottom = '0vh'

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {

    if(direction === 'up'){
        activeSlideIndex++;

        if(activeSlideIndex > sliderLength - 1){
            activeSlideIndex = 0;
        }
    }

    if(direction === 'down'){
        activeSlideIndex--;

        if(activeSlideIndex < 0){
            activeSlideIndex = sliderLength;

            return activeSlideIndex;
        }
    }

    slideLeft.style.top = `-${((sliderLength - 1) - activeSlideIndex) * 100}vh`;
    slideRight.style.bottom = `${activeSlideIndex * 100}vh`;

}
