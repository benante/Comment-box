function getData (event) {
    event.preventDefault()
    let FullName = document.getElementById("FullName").value
    let email = document.getElementById("email").value
    let textarea = document.getElementById("textarea").value

    let newComment = document.createElement("li")
    newComment.innerHTML = textarea
    document.getElementById("singleComment").append(newComment)    
}

textarea.addEventListener("input" , function charCount () {
    let maxNum = 140
    let currentNum = document.getElementById("textarea").value
    currentNum = currentNum.length;
    document.getElementById("charcount").innerHTML = currentNum + "/140";
    if (currentNum > maxNum) {
        document.getElementById("textarea").classList.add("wrong")
    } else {
        document.getElementById("textarea").classList.remove("wrong")
    }
})
