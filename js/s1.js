
'use strict';

let menuBtn = document.querySelector('.header__cart_img');
let menuCls = document.querySelector('.cart_right_close_img');
let menuClsBack = document.querySelector('.cart_right_back_img');

function showMenu() {

    let b = document.querySelector('.cart_right_page_off');
    let d = b.style.display;
    if (d == 'inline-block' || d == "") {
        b.style.display = "none";
    }
    if (d != "inline-block") {
        b.style.display = "inline-block";
    }

}

menuBtn.addEventListener('click', showMenu);
menuCls.addEventListener('click', showMenu);
menuClsBack.addEventListener('click', showMenu);

const decrementButton = document.querySelectorAll(`[data-action="decrement"]`);
const incrementButton = document.querySelectorAll(`[data-action="increment"]`);

decrementButton.forEach((button) => {
    function decrement(e) {
        const button = e.target.parentNode.parentElement.querySelector(
            '[data-action="decrement"]'
        );
        const target = button.nextElementSibling;
        let value = Number(target.value);
        value--;
        target.value = value;
        if (target.value < 0) {
            target.value = "0";
        }
    }
    button.addEventListener("click", decrement);
});

incrementButton.forEach((button) => {
    function increment(e) {
        const button = e.target.parentNode.parentElement.querySelector(
            '[data-action="decrement"]'
        );
        const target = button.nextElementSibling;
        let value = Number(target.value);
        value++;
        target.value = value;
    }
    button.addEventListener("click", increment);
});


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function openInThisTab(url) {
    window.open(url, '_self');
}
