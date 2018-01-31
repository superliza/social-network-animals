// Initialize Firebase
var config = {
    apiKey: "AIzaSyACkzddrK1VCr-wFW9XM7L2PCzPkjBeY5I",
    authDomain: "red-social-ab349.firebaseapp.com",
    databaseURL: "https://red-social-ab349.firebaseio.com",
    projectId: "red-social-ab349",
    storageBucket: "red-social-ab349.appspot.com",
    messagingSenderId: "371967715964"
  };
  
  firebase.initializeApp(config);
  
  function loadPage() {
    $('#sign-up').click(signUp);
  }
  
  function signUp(e) {
    // console.log("hola");
    e.preventDefault();  
    var email = $('#email').val();
    var password = $('#password').val();
    // console.log(email);
    // console.log(password);
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
      
      // ...
    });
    
  }

//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });
  

  $(document).ready(loadPage);