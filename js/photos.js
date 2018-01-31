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

  var folder = $('#images');

  function loadPage() {
    folder.change(uploadImages);
  }

  function uploadImages(e) {
    e.preventDefault();

    var file = e.target.files[0];
    // console.log(file);
    
    var storageRef = firebase.storage().ref('imagenes/' + file.name);
    // console.log(storageRef);

    var task = storageRef.put(file);
    console.log(storageRef);
    
    
    // // console.log(storageRef);
    // var imagesLoad = folder.files[0];
    // // console.log(imagesLoad);
    // var uploadTask = storageRef.child('imagenes/' + imagesLoad.name).put(imagesLoad);
    // console.log(uploadTask);
    
  }

  $(document).ready(loadPage);