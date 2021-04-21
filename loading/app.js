const button = document.querySelector('.button');
const loaded = document.querySelector('.loaded');
const text = document.querySelectorAll('.text');
let check = true;



button.addEventListener("click", () => {
	if (check === true) {
	 	check = false;
		let width = 0;
		setInterval(() => {
			if (width < 100) {
				width += 0.1;
				loaded.style.width = width + '%';
			};		
			if (width > 33) {text[0].classList.add("none")};
			if (width > 66) {text[1].classList.add("none")};
			if (width > 100) {text[2].classList.add("none")};
		}, 5);
	}
})
