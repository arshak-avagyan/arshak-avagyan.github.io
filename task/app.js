let activeLink = document.getElementsByTagName('li');
let underline = document.querySelector(".underline");

underline.addEventListener('click', () => {
    underline.style.transform = "translateX(100px)";
})



function remove() {
    for(let i = 0; i < activeLink.length; i++){
        activeLink[i].classList.remove('border');
    }
}


for(let i = 0; i < activeLink.length; i++){
    activeLink[i].addEventListener("click", () => {
        remove();
        activeLink[i].classList.add('border');
        console.log(activeLink[i].getBoundingClientRect());
        console.log(underline.getBoundingClientRect());
        underline.style.transform = `translateX(${activeLink[i].getBoundingClientRect().x - underline.getBoundingClientRect().x}px)`;
    })
}
