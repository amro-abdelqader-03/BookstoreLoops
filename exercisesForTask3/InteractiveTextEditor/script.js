const text_display = document.querySelector(".text-display")
const text_color = document.querySelector("#textColor")
const back_color = document.querySelector("#backColor")
const font_size = document.querySelector("#fontSize")
const font = document.querySelector("#font")

function addBold() {
    if (text_display.style.fontWeight !== "bold")
        text_display.style.fontWeight = "bold";
    else
        text_display.style.fontWeight = "normal";
}

function addItalic() {
    if (text_display.style.fontStyle !== "italic")
        text_display.style.fontStyle = "italic";
    else
        text_display.style.fontStyle = "normal";
}

function leftText(){
    text_display.style.justifyContent = "left"
}

function centerText(){
    text_display.style.justifyContent = "center"
}

function rightText(){
    text_display.style.justifyContent = "right"
}

function upperText(){
    text_display.style.textTransform = "uppercase"
}

function lowerText(){
    text_display.style.textTransform = "lowercase"
}

function capitalText() {
    text_display.style.textTransform = "capitalize";
}

text_color.addEventListener("input", () =>{
    text_display.style.color = text_color.value;
})

back_color.addEventListener("input", () =>{
    text_display.style.backgroundColor = back_color.value;
})

font_size.addEventListener("input", () =>{
    text_display.style.fontSize = font_size.value+"px";
})

font.addEventListener("input", () =>{
    text_display.style.fontFamily = font.value;
})