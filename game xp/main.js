var firebaseConfig = {
  apiKey: "AIzaSyC-X-dfS3m4a5ZFM8cwbidfGOY0yb8F_bE",
  authDomain: "game-4a1c7.firebaseapp.com",
  databaseURL: "https://game-4a1c7-default-rtdb.firebaseio.com",
  projectId: "game-4a1c7",
  storageBucket: "game-4a1c7.appspot.com",
  messagingSenderId: "893372124265",
  appId: "1:893372124265:web:b9ddea52e89436082d66f8"
}
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var rate = getInputVal('rate');
  var online = getInputVal('online');
  var message = getInputVal('message');

  saveMessage(name, company, email, phone, rate, online, message);

  
  document.querySelector('.alert').style.display = 'block';

  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// store msg to f base
function saveMessage(name, company, email, phone, rate, online, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    rate:rate,
    online:online,
    message:message
  });
}