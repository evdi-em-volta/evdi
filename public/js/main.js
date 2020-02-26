
// Your web app's Fire configuration
var firebaseConfig = {
    apiKey: "AIzaSyAif2DYkaW22Kkdo8O_nZ18oofvS3B54sw",
    authDomain: "edvi-a51a9.firebaseapp.com",
    databaseURL: "https://edvi-a51a9.firebaseio.com",
    projectId: "edvi-a51a9",
    storageBucket: "edvi-a51a9.appspot.com",
    messagingSenderId: "391546261320",
    appId: "1:391546261320:web:a18e0b2d6f341f3e942d7d",
    measurementId: "G-P958GJX954"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);




// grabbin our DOM element
const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('userFullName');
let userCompany = document.querySelector('userCompany');
let userEmail = document.querySelector('userEmail');
let userPhone = document.querySelector('userPhone');

let userMessage = document.querySelector('userMessage');

const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value;



    db.doc()
       .set({
         name: userNameInput,
         email: userEmailInput,
        message: userMessageInput

    })
    .then(function() {
        console.log("Data Saved");

    })
    .catch(function(error) {
        console.log(error);


    });
});



