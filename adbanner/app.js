let videoBanner = document.querySelector('.video-banner');
let logo = document.querySelector('.logo');
let button = document.querySelector('.button');
let shadow = document.querySelectorAll('.shadow');


videoBanner.addEventListener('mouseenter', () => {
    videoBanner.style.transform = "translateZ(100px)";
    videoBanner.style.boxShadow = "0 4px 18px 0 rgba(6,7,11), 0 6px 30px 0 rgba(0, 0, 0, 0.19)";
    logo.style.transform = "translateZ(20px)";
    shadow.forEach((e)=>{
        e.style.textShadow = "0px 10px 10px #3F4A75";
        e.style.transform = "translateZ(30px)";
    });
})

videoBanner.addEventListener('mouseleave', () => {
    videoBanner.style.transform = "translateZ(0px)";
    videoBanner.style.boxShadow = "0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)";
    logo.style.transform = "translateZ(0px)";
    shadow.forEach((e)=>{
        e.style.textShadow = "none";
        e.style.transform = "translateZ(0px)";
    });
})

button.addEventListener('mouseenter', () => {
    document.querySelector('.button a').style.color = "white";
})

button.addEventListener('mouseleave', () => {
    document.querySelector('.button a').style.color = "#3F4A75";
})


//********* Typing animation *********//

let text = 'WILLYCALIFORNIA.COM';
let i = 0;

(function type() {
  if (i < text.length) {
    document.querySelector(".typeing").innerHTML += text[i];
    i++;
    setTimeout(type, 150);
} else{setTimeout(function(){i = 0; document.querySelector(".typeing").innerHTML = ""; type()}, 3000)} 
})();
