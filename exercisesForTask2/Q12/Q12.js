let num = Number(prompt("enter an integer : "))
while (num < 0 || isNaN(num)){
    num = Number(prompt("Invalid integer, please try again : "))   
}

let sum = 0;
for (i = 1; i<= num; i++){
    sum += i;
}
alert("total = "+sum)
