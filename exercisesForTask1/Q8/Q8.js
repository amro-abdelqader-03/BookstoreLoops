function converts(str){
    let i = 0;
    let new_str = ""
    while (i < str.length){
        if (str[i] === str[i].toUpperCase())
            new_str += str[i].toLowerCase();
        else
            new_str += str[i].toUpperCase();
        i++;
    }
    return new_str;
}

console.log(converts("HellO"))