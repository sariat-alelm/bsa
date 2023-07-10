window.addEventListener('load', function(){
document.body.classList.add('d-b-a');
});

 
document.addEventListener("DOMContentLoaded", function() {
  var backBtn = document.querySelector(".back-button");

  if (backBtn) {
    backBtn.addEventListener("click", function(){
      document.getElementById("back-icon").classList.add("icon-large");
      setTimeout(function(){
        document.getElementById("back-icon").classList.remove("icon-large");
      }, 30);
    });
  }
});
 
  
var isSafariStandalone = window.navigator.userAgent.match(/(iPhone|iPod|iPad).*Apple-iPhone/i);

if (isSafariStandalone) {
  var installButton = document.getElementById("installButton");
  installButton.style.display = "block";

  installButton.addEventListener("click", function() {
    // Show installation prompt
    window.prompt("Add this app to your home screen", "");
  });
}
 
 

var menuBox = document.getElementById("menu-box");
menuBox.classList.add('menu-box4menu-close-icons');

var bars = document.getElementsByClassName('bars');

function menuCloseIcons(oc) {
if (menuBox.clientHeight <= 80) {
for (var i = 0; i < bars.length; i++) {
bars[i].style.backgroundColor = "#F9F5DC";
}
menuBox.style.backgroundColor ="#2B3C56"
menuBox.style.boxShadow ="0px 0px 12px #2C323D";
menuBox.style.height = "60%";
menuBox.style.overflow ="scroll";
menuBox.classList.remove('menu-box4menu-close-icons');
oc.classList.add("change");
}


else{
for (var i = 0; i < bars.length; i++) {
bars[i].style.backgroundColor = "#2B3C56";
}
menuBox.style.backgroundColor ="transparent"
menuBox.style.boxShadow ="none";
menuBox.style.height = "80px";
menuBox.classList.add('menu-box4menu-close-icons');
oc.classList.remove("change");
}
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js')
.then((registration) => {
console.log('Service Worker registered with scope:', registration.scope);
})
.catch((error) => {
console.log('Service Worker registration failed:', error);
});
}

let deferredPrompt;
const installButton = document.getElementById('installButton');
const openButton = document.getElementById('openButton');

function checkStandaloneMode() {
  if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    installButton.style.display ="none";
    menuBox.style.height = "fit-content";
menuBox.style.boxShadow ="none";
  } else {
    installButton.style.display = 'none';
    
  }
}

checkStandaloneMode();

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.style.display = 'inline-block';
});

if (deferredPrompt) {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the installation prompt');
    } else {
      console.log('User dismissed the installation prompt');
    }
    deferredPrompt = null;
  });
}

installButton.addEventListener('click', (e) => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the installation prompt');
        installButton.style.display = 'none';
        menuBox.style.height = "fit-content";
menuBox.style.boxShadow ="none";
      } else {
        console.log('User dismissed the installation prompt');
      }
      deferredPrompt = null;
    });
  }
});

window.addEventListener('appinstalled', (evt) => {
  console.log('App was installed');
  checkStandaloneMode();
});

/*openButton.addEventListener('click', function(){
window.location.href = 'https://sariat-alelm.github.io/bsa/','_blank';
});*/
