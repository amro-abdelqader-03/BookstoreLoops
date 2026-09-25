function startBorrowing() {

    let name = prompt("Enter your name : ");
    let type = prompt("Enter your membership type (student/regular) : ");
    let title;

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
    alert("The " + borrow + " book is being reserved")
    console.log("user : " + name + " order : " + book + " book / fiction : " + fiction)
}