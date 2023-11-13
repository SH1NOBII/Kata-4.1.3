
const moreButton = document.querySelector(".more-button");
const contentText = document.querySelector('.content-text');
const buttonText = document.querySelector('.more-button__text');
const moreButtonIcon = document.querySelector('.icon-more-button');

const contentTextHeight = contentText.style.height;

let moreStatus = '';

moreButton.addEventListener('click', function(){
    
    

    if (moreStatus === '' || moreStatus === 'hidden') {
        contentText.style.height  = 'auto';
        buttonText.textContent = 'Скрыть';
        moreButtonIcon.style.transform = 'rotate(180deg)';
        return moreStatus = 'opened';
    } 
    
    if (moreStatus === 'opened'){
        contentText.style.height  = contentTextHeight;
        buttonText.textContent = 'Читать далее';
        moreButtonIcon.style.transform = 'rotate(0)';
        return moreStatus = 'hidden';
    }
})


const burgerMenu = document.querySelector('.header-navigation__main-burger');
const dropDown = document.querySelector('.aside-menu-container');
const menuClose = document.querySelector('.btn-close-burger ');
const headerContainer = document.querySelector('.header-container');
const mainContainer = document.querySelector('.main-container');

burgerMenu.addEventListener('click', () => {
    dropDown.classList.add('aside-menu--active');
    headerContainer.style.filter = 'blur(6px)';
    mainContainer.style.filter = 'blur(6px)';
});

menuClose.addEventListener('click', () => {
    dropDown.classList.remove('aside-menu--active');
    headerContainer.style.filter = 'blur(0px)';
    mainContainer.style.filter = 'blur(0px)';
})

