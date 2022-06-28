const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const ageInput = document.querySelector("#age");
const genderInput = document.querySelector("#gender");
const typeInput = document.querySelector("#type");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#myInput");
const submitButton = document.querySelector("#reg");

const userArray = getArrayFromFirebase("User");

submitButton.addEventListener("click", () => {
  let name = nameInput.value;
  let last_name = lastnameInput.value;
  let age = ageInput.value;
  let gender = genderInput.value;
  let type = typeInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  if (
    name == "" ||
    last_name == "" ||
    email == "" ||
    password == "" ||
    age == "" ||
    gender == "" ||
    type == ""
  )
    return;
  let alreadyUsedEmail = false;
  userArray.forEach((element) => {
    if (element.data.email === email) {
      alreadyUsedEmail = true;
      return;
    }
  });
  if (alreadyUsedEmail) {
    displayAlert("შეცდომა", "უკვე არსებობს ესეთი email", "info");
    return;
  }
  addElementInFirebase("User/", {
    name: name,
    last_name: last_name,
    age: age,
    gender: gender,
    type: type,
    email: email,
    password: password,
  });
  displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
});
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
