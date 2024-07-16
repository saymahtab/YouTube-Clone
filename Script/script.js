const menu = document.querySelector(".menu-button");
const menuBox = document.querySelector(".menu-box-container");
const container = document.querySelector('.main-container');
const navBar = document.querySelector(".nav-bar ul");
const vedio = document.querySelectorAll('.vedio');
let current = true;
menu.addEventListener("click", function() {
    if(current){
        menuBox.style.left = '0';
        container.style.width = '80vw';
        container.style.marginLeft = '17vw';
        navBar.style.marginLeft = '260px';
        navBar.style.width = '80vw';
        for( let ele of vedio ) {
            ele.style.height = '230px';
            ele.style.width = '380px';
        }
        current = false;
    }
    else {
        menuBox.style.left = '-250px';
        container.style.width = '93vw';
        navBar.style.marginLeft = '85px';
        container.style.marginLeft = '';
        navBar.style.width = '91.5vw';
        for( let ele of vedio ) {
            ele.style.height = '190px';
            ele.style.width = '330px';
        }
        current = true;
    }
});
