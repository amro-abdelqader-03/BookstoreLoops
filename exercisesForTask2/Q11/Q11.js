let num = Number(prompt("enter number between 0 and 100 : "))
while (num > 100 || num < 0 || isNaN(num)){
    num = Number(prompt("Invalid number, enter number between 0 and 100 : "))   
}