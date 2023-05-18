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