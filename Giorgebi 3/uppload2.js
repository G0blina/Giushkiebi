const Name = document.querySelector("#title1");
const address = document.querySelector("#title2");
const location = document.querySelector("#title3");
const text = document.querySelector("#text");
const image = document.querySelector("#image");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  let namevalue = Name.value;
  let textValue = text.value;
  if (namevalue == "" || textValue == "") {
    return;
  }
  let imgSrc = "";
  try {
    const reader = new FileReader();
    reader.readAsDataURL(image.files[0]);
    reader.onload = () => {
      imgSrc = reader.result;
      addElementInFirebase("Post/", {
        name: namevalue,
        text: textValue,
        imgSrc: imgSrc,
        uploadTime: new Date().toLocaleString(),
      });
    };
  } catch (err) {
    imgSrc =
      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
    addElementInFirebase("Post/", {
      name: namevalue,
      text: textValue,
      imgSrc: imgSrc,
      uploadTime: new Date().toLocaleString(),
    });
  }
  displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
  Name.value = "";
  text.value = "";
  setTimeout(() => {
    location.href = "index2.html";
  }, 1500);
});
