let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 2){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

//navbar
let header = document.getElementById('header');
let navigationHeader = document.getElementById('navbar');
let showSidebar = false;

console.log(navigationHeader, header);

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginRight = '0';
    } else {
        navigationHeader.style.marginRight = '-100vw';
    }
}

function hello(){
    console.log('oi');
}

function link1(){
    window.location.href = "../pages/diferenciais.html";
};

function link2(){
    window.location.href = "../pages/matricule-se.html";
}

//btn-fixed
const botao = document.querySelector('.btn-fixed');

window.addEventListener('scroll', () => {
    if(window.scrollY == 0) {
        botao.classList.remove('visible');
    } else {
        botao.classList.add('visible');
    }
    console.log('yes, baby')
});