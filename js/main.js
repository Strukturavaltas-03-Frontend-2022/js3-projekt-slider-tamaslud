import gallery from './images.js';

const imagesTotal = gallery.length;
let actualImageIndex = 0;
const slidingTime = 4000; //milliseconds
const sliderHeight = '250px'; // set height of slider box
document.querySelector('.imageBox').style.height = sliderHeight;


const imageCounter = document.querySelector('.imageCounter');
const focusedImage = document.querySelector('.focusedImage');
const imageDescription = document.querySelector('.imageDescription');
const arrowLeft = document.querySelector('.arrowLeft');
const arrowRight = document.querySelector('.arrowRight');

const buttonBox = document.querySelector('.buttonBox');

arrowLeft.addEventListener("click", () => previousImage());
arrowRight.addEventListener("click", () => nextImage());

let actualImageObject;
let focusedImageHTML;
let btnBoxActual = '';

const addBtnListeners = () => {
    const radioButtons = document.querySelectorAll('.radio');
    for (let index = 0; index < radioButtons.length; index++) {
        radioButtons[index].addEventListener("click", () => { 
            setActualImageIndex(index);
        })
    }
};

const setActualImageIndex = (index) => {
    actualImageIndex = index;
    displayContent(actualImageIndex);
};

const btnBoxCreation = () => {
    btnBoxActual = '';
    for (let index = 0; index < imagesTotal; index++) {
        if (index === actualImageIndex) {
            btnBoxActual += `<img class="radio radio-${index}" src="./css/icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg" alt="">`;
        }else{
            btnBoxActual += `<img class="radio radio-${index}" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">`;
        }
    }
    buttonBox.innerHTML = btnBoxActual;
    addBtnListeners();
};
const displayContent = (actualImageIndex) => {
    actualImageObject = gallery[actualImageIndex];
    focusedImageHTML = `<img src="${actualImageObject.src}" alt="${actualImageObject.alt}">`
    focusedImage.innerHTML = focusedImageHTML;
    imageDescription.innerHTML = actualImageObject.alt;
    imageCounter.innerHTML = `${actualImageIndex+1}/${imagesTotal}`;
    btnBoxCreation();
};
const nextImage = () => {
    actualImageIndex === (imagesTotal - 1) ? actualImageIndex = 0 : actualImageIndex ++;
    displayContent(actualImageIndex)
 };
const previousImage = () => {
    actualImageIndex === (0) ? actualImageIndex = (imagesTotal-1) : actualImageIndex --;
    displayContent(actualImageIndex)
};

displayContent(actualImageIndex);
setInterval(nextImage, slidingTime);
