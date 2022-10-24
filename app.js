let maxNum = 140
document.addEventListener("submit" , function (event){
    event.preventDefault()
    let FullName = document.getElementById("FullName").value
    let email = document.getElementById("email").value
    let textarea = document.getElementById("textarea").value
    if (textarea.length > maxNum) {
        window.alert("Comment length exceeded")
        textarea = textarea.slice(0,maxNum)
    }

    let newComment = document.createElement("li")
    newComment.innerHTML = textarea
    document.getElementById("singleComment").append(newComment)
})

// function getData (event) {
    // console.log(event)
        
// }

textarea.addEventListener("input" , function charCount () {
    let currentNum = document.getElementById("textarea").value
    currentNum = currentNum.length;
    document.getElementById("charcount").innerHTML = currentNum + "/140";
    if (currentNum > maxNum) {
        document.getElementById("textarea").classList.add("wrong")
    } else {
        document.getElementById("textarea").classList.remove("wrong")
    }
})
