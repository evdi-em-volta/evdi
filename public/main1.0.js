// Initialize Firebase (ADD YOUR OWN DATA)
 var firebaseConfig = {
    apiKey: "AIzaSyAif2DYkaW22Kkdo8O_nZ18oofvS3B54sw",
    authDomain: "edvi-a51a9.firebaseapp.com",
    databaseURL: "https://edvi-a51a9.firebaseio.com",
    projectId: "edvi-a51a9",
    storageBucket: "edvi-a51a9.appspot.com",
    messagingSenderId: "391546261320",
    appId: "1:391546261320:web:89c9a280272c7476942d7d",
    measurementId: "G-M6QQ4PLB2Z"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}