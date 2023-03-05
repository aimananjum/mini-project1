const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

window.addEventListener("scroll",()=>{
    if(window.scrollY > bottomContainerEl.offsetTop-navbarEl.offsetHeight-50){
        navbarEl.classList.add("active");
    }
    else{
        navbarEl.classList.remove("active");
    }
})


const textareaEL = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEL.addEventListener("keyup",()=>{
    updateCounter()
})
function updateCounter(){
 totalCounterEl.innerText = textareaEL.value.length
 remainingCounterEl.innerText = textareaEL.getAttribute("maxLength")-textareaEL.value.length;
}