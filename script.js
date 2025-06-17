console.log("hello world");
const BTN = document.querySelector(".btn")
const CANVAS = 965;
let no_square = 16 * 16;
let [r, g, b] = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
let color = `rgb(${r}, ${g}, ${b})`

const CONTAINER = document.querySelector(".container");
for (let i = 0; i < no_square; i++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    let pixelWidth = CANVAS/Math.sqrt(no_square);
    pixel.style.width = `${pixelWidth}px`;
    pixel.style.height = `${pixelWidth}px`;
    CONTAINER.appendChild(pixel);
}


CONTAINER.addEventListener("mouseover",(event)=>{
    target = event.target;
    if (target.classList.contains("hovered")){
        let opacity = parseFloat(getComputedStyle(target).opacity);
        if (opacity < 1){
            opacity += 0.1;
            target.style.opacity = opacity;

        }
    }else{
        target.style.backgroundColor = color;


    }
    


})
CONTAINER.addEventListener("mouseout",(event)=>{
    target = event.target;
    if (target.matches(".pixel")){
        target.classList.add("hovered");
        target.classList.remove("pixel")

    }

})
BTN.addEventListener("click",()=>{
    no_square = parseInt(prompt("how many squares per side"));
    if (isNaN(no_square) || no_square < 1 || no_square > 100){
        alert("please enter a number between 0 to 100");
        return
    }else{
        [r, g, b] = [Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)];
        color = `rgb(${r}, ${g}, ${b})`
        CONTAINER.innerHTML = "";
        for (let i = 0; i < no_square ** 2; i++){
            const genPixel = document.createElement("div");
            genPixel.classList.add("pixel");
            pixelWidth = CANVAS/no_square;
            genPixel.style.width = `${pixelWidth}px`;
            genPixel.style.height = `${pixelWidth}px`;
            CONTAINER.appendChild(genPixel);
        }

    }
})

