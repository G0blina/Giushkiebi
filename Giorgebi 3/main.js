function displayAlert(title, text, icon) {
  Swal.fire({
    icon: icon,
    text: text,
    title: title,
  });
}

if (localStorage.getItem("userid")) {
  let url = location.href.split("/")[3];
  let user = {};
  firebase
    .database()
    .ref("User")
    .on("value", (response) => {
      response.forEach((element) => {
        if (element.key === localStorage.getItem("userid")) {
          user = { userid: element.key, data: element.val() };
          document.querySelector(".nickname").innerHTML = user.data.name;
          return;
        }
      });
    });
}

// if (!localStorage.getItem("userid")) {
//   if (location.href.split("/")[3] === "livechat.html") {
//     location.href = "index.html";
//   }
// }
