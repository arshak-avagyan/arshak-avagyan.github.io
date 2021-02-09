
let temperatureDescription = document.querySelector(".temperature-description");
let temperatureDegree = document.querySelector(".temperature-degree");
let locationTimezone = document.querySelector(".location-timezone");
let iconplace = document.querySelector(".icon div")
let tempspan = document.querySelector(".temperature span")
let degsec = document.querySelector(".degree-section")


window.addEventListener("load", ()=>{
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			let long = position.coords.longitude;
			let lat = position.coords.latitude;

			//const proxy = "http://cors-anywhere.herokuapp.com/"
			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=93fe06250750b75bfd6ae8e765419ca6`
			//const api = `https://api.openweathermap.org/data/2.5/weather?q=Ukraine&units=metric&appid=93fe06250750b75bfd6ae8e765419ca6`;

			fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				const {temp} = data.main;
				const {main, icon, id} = data.weather[0];
				const timezone = data.name;
				console.log(data)

				//Set DOM elements  from the api
				temperatureDegree.textContent = temp;
				temperatureDescription.textContent = main;
				locationTimezone.textContent = timezone;
				iconplace.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}.png">`

				degsec.addEventListener("click", () => {
					if(tempspan.textContent === "C") {
						tempspan.textContent = "F";
						temperatureDegree.textContent = temp * 9/5 + 32;
					} else {
						tempspan.textContent = "C";
						temperatureDegree.textContent = temp;
					}
				})
			})
		})
	}
})



//********* Typing animation *********//

let text = 'Welcome to my weather app, find me on Upwork "Arshak Avagyan"';
let i = 0;

(function type() {
  if (i < text.length) {
    document.querySelector(".type").innerHTML += text[i];
    i++;
    setTimeout(type, 150);
} else{setTimeout(function(){i = 0; document.querySelector(".type").innerHTML = ""; type()}, 3000)} 
})();

//********* 3D animation *********//

const container = document.querySelector(".container");
const timezone = document.querySelector(".location");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const card = document.querySelector(".card");


//***Mousemove**//
container.addEventListener("mousemove", (e) => {
	let posX = (window.innerWidth / 2 - e.pageX) / 15;
  	let posY = (window.innerHeight / 2 - e.pageY) / 15;
	card.style.transform = `rotateX(${posY}deg) rotateY(${posX}deg)`;
});


//***Mouseenter**//
container.addEventListener("mouseenter", (e) => {
	timezone.style.transform = "translateZ(100px)";
	icon.style.transform = "translateZ(125px)";
	temperature.style.transform = "translateZ(150px)";
	timezone.style.textShadow = "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1)";             
    temperature.style.textShadow = "0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1),0px 34px 30px rgba(0,0,0,0.1)";
});


//***Mouseleave**//
container.addEventListener("mouseleave", (e) => {
	card.style.transform = "none";
	timezone.style.transform = "translateZ(0px)";
	icon.style.transform = "translateZ(0px)";
	temperature.style.transform = "translateZ(0px)";
	timezone.style.textShadow = "none";             
    temperature.style.textShadow = "none";

});