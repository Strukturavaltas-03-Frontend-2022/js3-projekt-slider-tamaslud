import gallery from './images.js';

const imagesTotal = gallery.length;
let actualImageIndex = 4;

const imageCounter = document.querySelector('.imageCounter');
const focusedImage = document.querySelector('.focusedImage');
const imageDescription = document.querySelector('.imageDescription');
const buttonBox = document.querySelector('.buttonBox');

let actualImageObject;
let focusedImageHTML;

const btnBoxActual = `
<img class="radio" src="./css/icons/radio_button_checked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
<img class="radio" src="./css/icons/radio_button_unchecked_FILL0_wght400_GRAD0_opsz48.svg" alt="">
`

const displayContent = (actualImageIndex) => {
    actualImageObject = gallery[actualImageIndex];
    focusedImageHTML = `<img src="${actualImageObject.src}" alt="${actualImageObject.alt}">`
    focusedImage.innerHTML = focusedImageHTML;
    imageDescription.innerHTML = actualImageObject.alt;
    imageCounter.innerHTML = `${actualImageIndex+1}/${imagesTotal}`;
    buttonBox.innerHTML = btnBoxActual;
}

displayContent(actualImageIndex);