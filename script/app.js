function startBorrowing() {

    let name = prompt("Enter your name : ");
    let type = prompt("Enter your membership type (student/regular) : ");
    let title;

    while (type != "student" && type != "regular"){
        type = prompt("incorrect membership type, please try again (student/regular) : ")
    }
    if (type === "student")
        title = "Scholar";
    else if (type === "regular")
        title = "Member";

    if (title)
        alert("Welcome " + name + " , and your title is " + title)
    else
        alert("Welcome " + name + " , you don't have a title")

    let fiction = prompt("Are you prefers a fiction or non-fiction book genre : ")
    let book = prompt("write the specific title of the book you wants to borrow : ")
    alert("The " + book + " book is being reserved")
    const student = [name, type, fiction, book]
    console.log(student);
    return student
}

function applyDiscount(userData) {
    let type = userData[1]
    if(type == "student")
        userData.push("20% Discount")
    else if(type == "regular")
        userData.push("No Discount")

    return userData

}

const availableGenres = ["Fiction", "Science", "History", "Biography"]

function addNewGenre(genre){
    availableGenres.push(genre)
}

// addNewGenre("quantum physics")
// console.log(availableGenres)
// applyDiscount(startBorrowing())