import gallery from './images.js';

const imagesTotal = gallery.length;
let actualImageIndex = 0;

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
 `
<img class="radio" src="./css/icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
`

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
};


const displayContent = (actualImageIndex) => {
    actualImageObject = gallery[actualImageIndex];
    focusedImageHTML = `<img src="${actualImageObject.src}" alt="${actualImageObject.alt}">`
    focusedImage.innerHTML = focusedImageHTML;
    imageDescription.innerHTML = actualImageObject.alt;
    imageCounter.innerHTML = `${actualImageIndex+1}/${imagesTotal}`;
    btnBoxCreation();
}


const nextImage = () => {
    actualImageIndex === (imagesTotal - 1) ? actualImageIndex = 0 : actualImageIndex ++;
    displayContent(actualImageIndex)
    
}
const previousImage = () => {
    actualImageIndex === (0) ? actualImageIndex = (imagesTotal-1) : actualImageIndex --;
    displayContent(actualImageIndex)

}


displayContent(actualImageIndex);