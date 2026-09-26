// part 1

let paragText = document.getElementById("paragText");
let paragContent = paragText.textContent;
const paragWords = paragContent.split(" ")
for (let i = 0; i < paragWords.length; i++){
    if (paragWords[i].length > 8){
        let innerHTML = paragText.innerHTML;
        innerHTML = innerHTML.replaceAll(paragWords[i], "<span class='highlight'>"+paragWords[i]+"</span>");
        paragText.innerHTML = innerHTML;
    }
}

// part 2

const src_link_div = document.getElementById("src-link")
src_link_div.innerHTML = "<a href='https://google.com/' target='_blank'>source</a>"