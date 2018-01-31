window.onload = function () {
var button = document.getElementById("twittear");
  button.addEventListener("click", addText); //botton
// var textArea = document.getElementById("writting");
  // textArea.addEventListener("keyup", addAccount); //Contar tipeado
};
function addText(){ //agregar texto
  var length = document.getElementById("writting").value.length;
  // console.log(length);  
      var textArea = document.getElementById("writting").value;
      // console.log(textArea);      
      var container = document.createElement("div");
      // console.log(container);     
      var twitting= document.createElement("div");
      // console.log(twitting);      
      var time=document.createElement("p");
      var date = new Date(); //editando formato de hora
      // console.log(date);     
      time.innerText= "Hora de la publicación: " + date.getHours()+ ":" + date.getMinutes();//hora:minutes
      var content = document.createTextNode("User: \n" + textArea + " ");//añadir hora//
      var main = document.getElementById("news-feed")
      // console.log(main);      
        container.appendChild(twitting);
        twitting.appendChild(content);
        twitting.classList.add ("twitting");
        twitting.appendChild(time);
        time.classList.add("time");
        main.appendChild(twitting);
        document.getElementById("writting").value="";//borra mensaje escrito en el input cuando se manda //
        document.getElementById("writting").focus();
  };