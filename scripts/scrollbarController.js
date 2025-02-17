import scrollbarItems from "./data/scrollbarModel.js";

const scrollbarElement = document.querySelector('.scrollbar')
const scrollbarItemsElement = document.querySelector('.scrollbar__items')
const scrollbarBackButtonElement = document.querySelector('.scrollbar__controller--back')
const scrollbarForwardButtonElement = document.querySelector('.scrollbar__controller--forward')
const scrollbarBackButton = document.querySelector('.scrollbar__button--back')
const scrollbarForwardButton = document.querySelector('.scrollbar__button--forward')


function renderScrollbar() {
    let scrollbarRenderHtml = '';

    scrollbarItems.forEach((item, index) => {
        scrollbarRenderHtml += `<button class="scrollbar__item ${index === 0 ? 'scrollbar__item--active' : ''}">${item}</button>`;
    });

    scrollbarItemsElement.innerHTML = scrollbarRenderHtml;

    const scrollbarItem = document.querySelectorAll('.scrollbar__item');

    scrollbarItem.forEach((item) => {
        item.addEventListener('click', () => {
            const activeItem = document.querySelector(".scrollbar__item--active");

            if (!item.classList.contains('scrollbar__item--active')) {
                activeItem.classList.remove('scrollbar__item--active')
                item.classList.add('scrollbar__item--active')
            }
        }
        )
    })


    scrollbarBackButton.addEventListener('click', () => {
        scrollbarItemsElement.scrollLeft -= 200;
        updateScrollbarStyles();
    })

    scrollbarForwardButton.addEventListener('click', () => {
        scrollbarItemsElement.scrollLeft += 200;
        updateScrollbarStyles();
    })

}

function updateScrollbarStyles() {
    const maxScrollLeft = scrollbarItemsElement.scrollWidth - scrollbarItemsElement.clientWidth;
    console.log(scrollbarItemsElement.scrollWidth)
    console.log(scrollbarItemsElement.clientWidth)
    scrollbarBackButtonElement.style.display = scrollbarItemsElement.scrollLeft > 0 ? 'flex' : 'none';
    scrollbarForwardButtonElement.style.display = scrollbarItemsElement.scrollLeft < maxScrollLeft ? 'flex' : 'none';
}

function handleResize() {
    const width = window.innerWidth;
    if (width < 791) {
        scrollbarElement.style.maxWidth = "100%";
    } else {
        scrollbarElement.style.maxWidth = "calc(100% - 72px)";
    }
}

scrollbarItemsElement.addEventListener('scroll', () => {
    updateScrollbarStyles();
})

window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);
renderScrollbar();
setTimeout(() => {
    if (scrollbarItemsElement.children.length > 0) {
        updateScrollbarStyles();
    }
}, 50);
