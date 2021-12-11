document.querySelector('#btn-filter').onclick = () => {
    console.log('ПУФ')
    document.querySelector('.filter').classList.toggle('active')
    document.querySelector('body').classList.toggle('locked')
    console.log(document.querySelector('.header__list').className, document.querySelector('.header__burger').className)
}

document.querySelector('#filter-close').onclick = () => {
    document.querySelector('.filter').classList.remove('active')
    document.querySelector('body').classList.remove('locked')
}

document.querySelector('#header__burger').onclick = () => {
    console.log("sdasd")
    document.querySelector('.menu-mobile').classList.add('active')
    document.querySelector('body').classList.add('locked')
}

document.querySelector('#menu-close').onclick = () => {
    document.querySelector('.menu-mobile').classList.remove('active')
    document.querySelector('body').classList.remove('locked')
}
// document.querySelector('#btn-filter').onclick = () => {
//     console.log('ПУФ')
//     document.querySelector('.filter').classList.toggle ('active')
//     document.querySelector('.header__burger').classList.toggle ('active')
//     document.querySelector('body').classList.toggle ('locked')
//     console.log(document.querySelector('.header__list').className , document.querySelector('.header__burger').className)
// }

// COLLAPSE

let collapseBtns = document.getElementsByClassName("collapsible");
let collapseBlock = document.getElementsByClassName("collapse__wrap");

for (let i = 0; i < collapseBtns.length; i++) {
    console.log()
    if (collapseBlock[i].className == "collapse__wrap active") {
        collapseBlock[i].style.maxHeight = collapseBlock[i].scrollHeight + "px"
    }
    else{
        collapseBlock[i].style.maxHeight = 0
    }
    collapseBtns[i].addEventListener("click", function () {
        collapseBlock[i].classList.toggle("active")
        if (collapseBlock[i].style.maxHeight !== "0px") {
            console.log("close")
            collapseBlock[i].style.maxHeight = 0
        }
        else {
            console.log("open")
            collapseBlock[i].style.maxHeight = collapseBlock[i].scrollHeight + "px"
        }
    })
}



// input

var KTIONRangeSlider = function () {

    // Private functions
    var demos = function () {

        // custom prefix
        $('#kt_slider_3').ionRangeSlider({
            type: "double",
            skin: "sharp",
            grid: false,
            min: 3000,
            max: 50000,
            from: 50000,
            to: 800,

        });
    }

    return {
        // public functions
        init: function () {
            demos();
        }
    };
}();

jQuery(document).ready(function () {
    KTIONRangeSlider.init();
});