var firebaseConfig = {
  apiKey: "AIzaSyBsl6DZ-RS-xr3i3ISEjigB-28-XRmgAc4",
  authDomain: "funmath-4af76.firebaseapp.com",
  databaseURL: "https://funmath-4af76.firebaseio.com",
  projectId: "funmath-4af76",
  storageBucket: "funmath-4af76.appspot.com",
  messagingSenderId: "695702166780",
  appId: "1:695702166780:web:ffb0c423e15557fe"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Funtion that brings sentence, answers and correct answer by given id.
function getChalenge(id) {
  // Read from FireBase
  let leadsRef = database.ref("gameCase/challenge" + id);
  leadsRef.once("value", function(snapshot) {
    // Variables.
    let json = null;
    let txt = '{ "gameCase": {';
    let array = [];
    let arrayKey = [];

    snapshot.forEach(function(childSnapshot) {
      // JSON value
      array.push(childSnapshot.val());
      // JSON key
      arrayKey.push(childSnapshot.key);
    });

    // Make JSON.
    for (var i = 0; i < arrayKey.length; i++) {
      if (i < arrayKey.length - 1) {
        txt += '"' + arrayKey[i] + '":"' + array[i] + '",';
      } else {
        txt += '"' + arrayKey[i] + '":"' + array[i] + '"}}';
      }
    }

    // Send JSON
    json = JSON.parse(txt);
    console.log(json);
    return json;
  });
}

// Funtion that brings video link by given id.
function getVideo(id) {
  // Read from FireBase
  let leadsRef = database.ref("gameCase/videos/");
  leadsRef.once("value", function(snapshot) {
    // Variables.
    let array = [];
    let arrayKey = [];
    let json = null;
    let txt = "{";
    snapshot.forEach(function(childSnapshot) {
      if (childSnapshot.key == "v" + id) {
        // JSON value
        array.push(childSnapshot.val());
        // JSON key
        arrayKey.push(childSnapshot.key);
      }
    });

    // Make JSON.
    for (var i = 0; i < arrayKey.length; i++) {
      if (i < arrayKey.length - 1) {
        txt += '"' + arrayKey[i] + '":"' + array[i] + '",';
      } else {
        txt += '"' + arrayKey[i] + '":"' + array[i] + '"}';
      }
    }

    // Send JSON
    json = JSON.parse(txt);
    console.log(json);
    return json;
  });
}

// Funtion that compares corret answer from database for a given challenge id and user answer.
function check(idChallenge, asw) {
  // Read from FireBase
  let leadsRef = database.ref("gameCase/challenge" + idChallenge);
  leadsRef.once("value", function(snapshot) {
    // Variables.
    let correctASW = "";
    let txt = "";
    snapshot.forEach(function(childSnapshot) {
      if (childSnapshot.key == "correctASW") {
        // JSON value
        correctASW = childSnapshot.val();
      }
    });

    // Make JSON.
    if (correctASW == asw) {
      txt += '{"check": "true"}';
    } else {
      txt += '{"check": "false"}';
    }

    // Send JSON
    json = JSON.parse(txt);
    console.log(json);
    return json;
  });
}
