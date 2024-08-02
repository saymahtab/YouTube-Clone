const menu = document.querySelector(".menu-button");
const menuBox = document.querySelector(".menu-box-container");
const menu1 = document.querySelector(".menu-box");
const container = document.querySelector('.main-container');
const short = document.querySelector('.shorts-section');
const navBar = document.querySelector(".nav-bar ul");
const vedio = document.querySelectorAll('.vedio img');
const title = document.querySelectorAll('.vedio-caption');


let current = true;
menu.addEventListener("click", function() {
    if(current){
        menuBox.style.left = '0';
        container.style.width = '80vw';
        container.style.marginLeft = '16vw';
        navBar.style.marginLeft = '260px';
        navBar.style.width = '80vw';
        short.style.maxWidth = '78rem'
        for( let ele of vedio ) {
            ele.style.height = '230px';
            ele.style.width = '380px';
        }
        for( let ele of title ) {
            ele.style.marginTop = '50px'
        }
        current = false;
    }
    else {
        menuBox.style.left = '-250px';
        container.style.width = '93vw';
        navBar.style.marginLeft = '85px';
        container.style.marginLeft = '';
        navBar.style.width = '91.5vw';
        short.style.maxWidth = '90rem'
        for( let ele of vedio ) {
            ele.style.height = '190px';
            ele.style.width = '330px';
        }
        for( let ele of title ) {
            ele.style.marginTop = '10px'
        }
        current = true;
    }
});
menu1.addEventListener('mouseover', () => {
    menu1.classList.remove('hide-scrollbar');
})
menu1.addEventListener('mouseout', () => {
    menu1.classList.add('hide-scrollbar');
})
