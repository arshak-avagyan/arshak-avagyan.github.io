let carousel = document.querySelectorAll('.carousel');
let buttonSound = new sound("./Sounds/click.mp3");
let radius, theta, speed;


/************************ Page Load ************************/

carousel.forEach((column)=>{
	let cells = column.querySelectorAll('.carousel__cell');
	let cellHeight = column.offsetHeight;
	function changecolumn() {
	  theta = 360 / cells.length;
	  radius = Math.round( ( cellHeight / 2) / Math.tan( Math.PI / cells.length));
	  for ( let i=0; i < cells.length; i++) {
		    let cellAngle = theta * i;	
		    cells[i].style.transform = `rotateX(${cellAngle}deg) translateZ(${radius}px)`;
	 	}
	  column.style.transform = `translateZ(${-radius}px) rotateX(${360}deg)`;
	};
	window.addEventListener("load", changecolumn);
});




/************************ Button press ************************/

let playButton = document.querySelector('.button');
let active = false;
let angle = 0;
	
playButton.addEventListener( 'click', () => {
	buttonSound.play();
	if(active == false){
		active = true;
		let i = 0;
		let speed = Math.ceil(Math.random() * 180);
		setInterval(()=>{
			if(i < carousel.length){ 
				angle += speed * 30;
				carousel[i].style.transform = `translateZ(${-radius}px) rotateX(${-angle}deg)`;
				carousel[i].style.transition = "transform 4s ease-in-out"; 
			}; 
			i++;
		},250);

	};
	carousel[carousel.length-1].addEventListener("transitionend", ()=>{setTimeout(()=>{active = false},500)});
});


/************************ Mute ************************/
let mute = document.querySelector(".mute");
mute.addEventListener("click", ()=>{
	let sound = document.getElementsByTagName("audio");
	mute.classList.toggle("mute");
	sound[0].muted ? sound[0].muted = false: sound[0].muted = true;	
})



//****************************************** Sound effects ************************************//
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}


//****************************************** Coin effects ************************************//


// let j = 1;
// function coinmove(){
// 	if(j == 21){j = 1};
// 	let coin = document.getElementById(j/*`${Math.ceil(Math.random() * 20)}`*/);
// 	coin.classList.add("coins");
// 	coin.style.cssText = `left: ${Math.floor(Math.random() * screen.width * 0.9)}px`;
// 	j++;

// };

// setInterval(coinmove, 350);

// var windowWidth = window.innerWidth;
// var windowHeight = window.innerHeight;

// window.addEventListener('resize', getNewWindowSize);

// function getNewWindowSize() {
// 	if (windowWidth !== window.innerWidth || windowHeight !== window.innerHeight) {
// 		location.reload();
// 		return;
// 	}
// }


