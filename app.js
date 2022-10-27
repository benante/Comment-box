let maxNum = 140;

// Get data from form after Submit button has been pressed.
// If number of characters exceed do not publish the comment and set an alert
document.addEventListener("submit", function (event) {
  event.preventDefault();
  let FullName = document.getElementById("FullName").value;
  let email = document.getElementById("email").value;
  let textarea = document.getElementById("textarea").value;
  if (textarea.length <= maxNum) {
    let newComment = document.createElement("li");
    newComment.innerHTML = textarea;
    document.getElementById("singleComment").append(newComment);
  } else {
    window.alert("Your comment can't exceed 140 characters");
  }
});

// Count numbers of characters while user types and display them
// If numbers exceeds show a red border on the div
textarea.addEventListener("input", function charCount() {
  let currentNum = document.getElementById("textarea").value;
  currentNum = currentNum.length;
  document.getElementById("charcount").innerHTML = currentNum + "/140";
  if (currentNum > maxNum) {
    document.getElementById("textarea").classList.add("wrong");
  } else {
    document.getElementById("textarea").classList.remove("wrong");
  }
});
