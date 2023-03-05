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

const containerEl = document.querySelector(".c-container");

for(let i=0;i<30;i++){
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColor()

function generateColor(){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor()
        colorContainerEl.style.backgroundColor="#"+newColorCode;
        colorContainerEl.innerText = "#"+newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef"
    const colorCodeLength = 6;
    let colorCode = "";
    for(let ind=0;ind<colorCodeLength;ind++){
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode +=chars.substring(randomNum,randomNum+1);
        
    }
    return colorCode;
}