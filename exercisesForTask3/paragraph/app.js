var paragText = document.getElementById("paragText");
var paragContent = paragText.textContent;
const paragWords = paragContent.split(" ")
for (let i = 0; i < paragWords.length; i++){
    if (paragWords[i].length > 8){
        let innerHTML = paragText.innerHTML;
        innerHTML = innerHTML.replaceAll(paragWords[i], "<span class='highlight'>"+paragWords[i]+"</span>");
        paragText.innerHTML = innerHTML;
    }
}