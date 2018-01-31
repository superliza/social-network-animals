$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
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


window.onload = function () {
var button = document.getElementById("twittear");
  button.addEventListener("click", addText); //botton
var textArea = document.getElementById("writting");
  textArea.addEventListener("keyup", addAccount); //Contar tipeado
};
function addText(){ //agregar texto
  var length = document.getElementById("writting").value.length;
    if (length>"0" & length<="140"){
      var textArea = document.getElementById("writting").value;
      var container = document.createElement("div");
      var twitting= document.createElement("div");
      var time=document.createElement("p");
      var date = new Date(); //editando formato de hora
      time.innerText= "Hora de la publicación: " + date.getHours()+ ":" + date.getMinutes();//hora:minutes
      var content = document.createTextNode("User: \n" + textArea + " ");//añadir hora//
      var main = document.getElementById("news-feed")
        container.appendChild(twitting);
        twitting.appendChild(content);
        twitting.classList.add ("twitting");
        twitting.appendChild(time);
        time.classList.add("time");
        main.appendChild(twitting);
        document.getElementById("writting").value="";//borra mensaje escrito en el input cuando se manda //
        document.getElementById("contador").value="140"; //número del contador
        document.getElementById("contador").style.color="black";
        document.getElementById("writting").focus();
      }
  };
function addAccount (){ //Contador de tipeado
  var max = "140";
  var twitting = document.getElementById("writting").value;
  var longitud = twitting.length;
  var counting = document.getElementById("counting");
    if(longitud>="0" & longitud<"120"){  //Cambios de estilo del contador
      counting.style.color="#6B93A5";
      counting.value = max-longitud;
    }
    else if(longitud>="120" & longitud<"130"){ //cambiando a amarillo
      counting.style.color="orange";
      counting.value = max-longitud;
    }
    else if(longitud>="130" & longitud<="140"){ //cambiando a rojo
      counting.style.color="#821b2a";
      counting.value = max-longitud;
    }
    else if(longitud>"140"){ //números negativos
      counting.value =("-"+(longitud-max));
    }
};
