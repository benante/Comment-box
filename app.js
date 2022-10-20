function getData (event) {
    event.preventDefault()
    let FullName = document.getElementById("FullName").value
    let email = document.getElementById("email").value
    let textarea = document.getElementById("textarea").value

    let newComment = document.createElement("li")
    newComment.innerHTML = textarea
    document.getElementById("singleComment").append(newComment) 
        
    
}