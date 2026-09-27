const name = document.getElementById("name")
const score = document.getElementById("score")
const scoreTable = document.getElementById("scoreTable")
const names = []
const scores = [];

function addScore(){
    alert("Clicked")
    let name_value = name.value;
    let score_value = parseInt(score.value);
    if (name_value === "" || score_value === NaN)
    {
        return;
    }
    names.push(name_value);
    scores.push(score_value);
    name.value = "";
    score.value = "";
}

function displayResults(){
    console.log(scoreAverage());
    let index = highScoreIndex();
    console.log(names[index]);
    console.log(scores[index]);
}

function displayScores(){
    clearTable();
    for (let i = 0; i<names.length; i++)
    {
        let tableRow = document.createElement("tr")
        tableRow.innerHTML = "<td>"+names[i]+"</td><td>"+scores[i]+"</td>";
        scoreTable.appendChild(tableRow);
    }
}

function scoreAverage(){
    if (names.length === 0)
        return 0;
    let sum = 0;
    for (let i = 0; i<scores.length;i++)
    {
        sum += scores[i];
    }
    return (sum / scores.length)
}

function highScoreIndex(){
    let index = 0;
    for(let i = 0; i < scores.length; i++){
        if(scores[i] > scores[index]){
            index = i;
        }
    }
    return index;
}

function clearTable(){
    scoreTable.innerHTML = "<tr><th>Name</th><th>Score</th></tr>";
}