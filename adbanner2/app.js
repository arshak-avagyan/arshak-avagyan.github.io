let videoBanner = document.querySelector('.video-banner');
let logo = document.querySelector('.logo');
let button = document.querySelector('.button');
let shadow = document.querySelectorAll('.shadow');
let video = document.getElementsByTagName('video');
let changing = document.querySelectorAll('.changing');




videoBanner.addEventListener('mouseenter', () => {
    videoBanner.style.transform = "translateZ(100px)";
    videoBanner.style.boxShadow = "0 4px 18px 0 rgba(6,7,11), 0 6px 30px 0 rgba(0, 0, 0, 0.19)";
    logo.style.transform = "translateZ(30px)";
    shadow.forEach((e)=>{
    	e.style.textShadow = "0px 10px 10px #3F4A75";
    	e.style.transform = "translateZ(30px)";
    });
    button.style.animation = "none";
})

videoBanner.addEventListener('mouseleave', () => {
    videoBanner.style.transform = "translateZ(0px)";
    videoBanner.style.boxShadow = "0 4px 18px 0 rgba(0, 0, 0, 0.2), 0 6px 30px 0 rgba(0, 0, 0, 0.19)";
    logo.style.transform = "translateZ(0px)";
    shadow.forEach((e)=>{
    	e.style.textShadow = "none";
    	e.style.transform = "translateZ(0px)";
    });
    button.style.animation = "zooming 1.5s linear infinite";
})


/******* Button events *************/

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



window.addEventListener('load', changer());

function changer() {
	changing[0].style.zIndex = '1';
	let i = 0;

	setInterval(() => {
		if (i > 10 && video[0].readyState === 4) {
			video[0].style.zIndex = '3';
			video[0].style.display = 'initial';
			video[0].play();
			// video[0].addEventListener('ended', ()=>{
			// 	i = 0; 
			// 	video[0].style.display = 'none';
			// })
		}
		else {
			changing[1].classList.toggle('zindex');
			i++;
			console.log(i)	
		}
	}, 800)
}
