const firebaseConfig = {
  apiKey: "AIzaSyCtwYy_56mfqeP5pi0pJuQttuiv1DfvZ6M",
  authDomain: "giorgiebi.firebaseapp.com",
  databaseURL: "https://giorgiebi-default-rtdb.firebaseio.com",
  projectId: "giorgiebi",
  storageBucket: "giorgiebi.appspot.com",
  messagingSenderId: "154991384561",
  appId: "1:154991384561:web:b3df61aa5ce0339eb05650",
  measurementId: "G-E68GE736Y1",
};

firebase.initializeApp(firebaseConfig);

function randomID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateFirebaseItem(ID, value) {
  return {
    userid: ID,
    data: value,
  };
}

function addElementInFirebase(REF, data) {
  firebase
    .database()
    .ref(REF + randomID())
    .set(data);
}

function getArrayFromFirebase(REF) {
  let tempArray = [];
  firebase
    .database()
    .ref(REF)
    .on("value", (response) => {
      response.forEach((element) => {
        tempArray.push(generateFirebaseItem(element.key, element.val()));
      });
    });
  return tempArray;
}

function removeRefFromFirebase(REF) {
  firebase.database().ref(`${REF}`).remove();
}

function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}

function getElementFromFirebaseByID(REF, id) {
  const tempArray = getArrayFromFirebase(REF);
  let temp = {};
  tempArray.forEach((element) => {
    if (element.userid === id) {
      temp = element;
    }
  });
  return temp;
}

function changeDataOnFirebaseByID(REF, ID, data) {
  firebase
    .database()
    .ref(REF + "/" + ID)
    .set(data);
}
