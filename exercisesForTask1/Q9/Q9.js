
let str = 'Coding aCademy by Orange';

function camelCase(str) {
    let i = 0;
    let new_str = "";
    let is_next_capital = 0;
    while (i < str.length){
        if(str[i] !== " "){
            if (is_next_capital || !i){
                new_str += str[i].toUpperCase();
                is_next_capital = 0;
            }
            else
                new_str += str[i].toLowerCase();
        }
        else
            is_next_capital = 1;
        i++;
    }
    return new_str
}

console.log(camelCase(str));