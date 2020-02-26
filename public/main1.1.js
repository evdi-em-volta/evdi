
  // Your web app's Firebase configuration
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
  firebase.analytics();
  firebase.initializeApp(firebaseConfig);



//reference messages collection
var messagesRef = firebase.database().ref('messages');

// listen for submit
docum.getElementById('contactForm').addEventListener('submit',
 submitForm);

 function submitForm(e){
    e.prevetDefaut();


    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');


///save message
    saveMessage(name, email, subject, message);



 }

 //function toi get form values

 function getIputVal(id){
    return document.getElementById(id).value;


 }

 // save message to firebase

 function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message

    });
 }

