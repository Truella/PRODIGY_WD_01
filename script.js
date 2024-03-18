const navOpener = document.querySelector(".open-nav");
const navCloser = document.querySelector(".close-nav");
const nav = document.querySelector(".hide-nav");
const subMenu = document.querySelector(".sub-menu")
const subMenuDropdown = document.querySelector(".event-dropdown");
navOpener.addEventListener("click", ()=>{
    nav.classList.remove("hide-nav")
    navOpener.classList.add("hidden")
    navCloser.classList.remove("hidden")
})
navCloser.addEventListener("click", ()=>{
    nav.classList.add("hide-nav")
    navCloser.classList.add("hidden")
    navOpener.classList.remove("hidden")
})
subMenuDropdown.addEventListener("click", ()=>{
    subMenu.classList.toggle("hidden")
})