if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js')
.then((registration) => {
console.log('Service Worker registered with scope:', registration.scope);
})
.catch((error) => {
console.log('Service Worker registration failed:', error);
});
}

window.addEventListener('load', function(){
document.body.classList.add('d-b-a');
});

if (document.title == "بحوث سارية العلم | سارية العلم"){
window.addEventListener('beforeinstallprompt', (event) => {
deferredPrompt = event;
});

function menuCloseIcons(oc) {
var menuBox = document.getElementById("menu-box");
menuBox.classList.add('menu-box4menu-close-icons');

var bars = document.getElementsByClassName('bars');

if (menuBox.clientHeight <= 80) {
for (var i = 0; i < bars.length; i++) {
bars[i].style.backgroundColor = "#F9F5DC";
}
menuBox.style.backgroundColor = "#2B3C56";
menuBox.style.boxShadow = "0px 0px 12px #2C323D";
menuBox.style.height = "85%";
menuBox.style.overflow = "scroll";
menuBox.classList.remove('menu-box4menu-close-icons');
oc.classList.add("change");
}

else {
for (var i = 0; i < bars.length; i++) {
bars[i].style.backgroundColor = "#2B3C56";
}
menuBox.style.backgroundColor = "transparent";
menuBox.style.boxShadow = "none";
menuBox.style.height = "80px";
menuBox.style.overflow = "hidden";
menuBox.classList.add('menu-box4menu-close-icons');
oc.classList.remove("change");
}
}

 
var overlay = document.querySelector('.overlay');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.close-popup');
var installButton = document.querySelector("#installButton");

installButton.addEventListener("click", function(){
overlay.style.opacity = "0"; 
setTimeout(function() {
overlay.style.opacity = "1"; 
document.body.style.overflow = "hidden";
}, 200);
overlay.style.display = "block";
});

closePopup.addEventListener("click", function(){
overlay.style.opacity = "0"; 
setTimeout(function() {
overlay.style.display = "none";
document.body.style.overflow = "scroll";
}, 200);
});

var aboutProjectBtn = document.getElementById("about-project-btn");
var aboutProject = document.getElementById("about-project");

aboutProjectBtn.addEventListener('click', function(){
aboutProject.style.opacity ="0";
setTimeout(function(){
aboutProject.style.opacity ="1";
}, 300);
});

var ourCaseBtn = document.getElementById("our-case-btn");
var ourCase = document.getElementById("our-case");

ourCaseBtn.addEventListener('click', function(){
ourCase.style.opacity ="0";
setTimeout(function(){
ourCase.style.opacity ="1";
}, 300);
});

var firstFieldBtn = document.getElementById("first-field-btn");
var firstField = document.getElementById("first-field");

firstFieldBtn.addEventListener('click', function(){
firstField.style.opacity ="0";
setTimeout(function(){
firstField.style.opacity ="1";
}, 300);
});

var secondFieldBtn = document.getElementById("second-field-btn");
var secondField = document.getElementById("second-field");

secondFieldBtn.addEventListener('click', function(){
secondField.style.opacity ="0";
setTimeout(function(){
secondField.style.opacity ="1";
}, 300);
});

var thirdFieldBtn = document.getElementById("third-field-btn");
var thirdField = document.getElementById("third-field");

thirdFieldBtn.addEventListener('click', function(){
thirdField.style.opacity ="0";
setTimeout(function(){
thirdField.style.opacity ="1";
}, 300);
});

var fourthFieldBtn = document.getElementById("fourth-field-btn");
var fourthField = document.getElementById("fourth-field");

fourthFieldBtn.addEventListener('click', function(){
fourthField.style.opacity ="0";
setTimeout(function(){
fourthField.style.opacity ="1";
}, 300);
});

var fifthFieldBtn = document.getElementById("fifth-field-btn");
var fifthField = document.getElementById("fifth-field");

fifthFieldBtn.addEventListener('click', function(){
fifthField.style.opacity ="0";
setTimeout(function(){
fifthField.style.opacity ="1";
}, 300);
});

var aboutUsBtn = document.getElementById("about-us-btn");
var aboutUs = document.getElementById("about-us");

aboutUsBtn.addEventListener('click', function(){
aboutUs.style.opacity ="0";
setTimeout(function(){
aboutUs.style.opacity ="1";
}, 300);
});
}

else{
document.addEventListener("DOMContentLoaded", function(){
var backBtn = document.querySelector(".back-button");

if (backBtn){
backBtn.addEventListener("click", function(){
document.getElementById("back-icon").classList.add("icon-large");

setTimeout(function(){
document.getElementById("back-icon").classList.remove("icon-large");
}, 30);
});
}
});
}
