const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#myInput");
const submitButton = document.querySelector("#submit");

const userArray = getArrayFromFirebase("User");

submitButton.addEventListener("click", () => {
  let email = emailInput.value;
  let password = passwordInput.value;
  let currentUser = {};
  let successAuth = false;
  userArray.forEach((element) => {
    if (element.data.email === email && element.data.password === password) {
      successAuth = true;
      currentUser = element;
      return;
    }
  });
  if (!successAuth) {
    displayAlert("შეცდომა", "არ არსებობს მომხარებელი", "info");
    return;
  }
  displayAlert("შესრულდა", "წარმატებით დაემატა გაიარეთ ავტორიზაცია", "success");
  localStorage.setItem("userid", currentUser.userid);
  setTimeout(() => {
    location.href = "index2.html";
  }, 1000);
});
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
