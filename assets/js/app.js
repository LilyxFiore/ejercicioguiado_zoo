var img = document.getElementsByClassName("animal");
var div = document.getElementById("animals");

var select = document.getElementById("select");
select.onchange = function(){
  if(select.value == "original"){
    for(var i = 0; i < img.length; i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
      img[i].setAttribute("class", "animal original");
    }
    div.class="original";
  }

  if(select.value == "blanco-negro"){
    for(var i = 0; i < img.length; i++){
      img[i].classList.remove("original");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
      img[i].setAttribute("class", "animal blanco-negro");
    }
  }

  if(select.value == "invertir-colores"){
    for(var i = 0; i < img.length; i++){
      img[i].classList.remove("original");
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("sepia");
      img[i].setAttribute("class", "animal invertir-colores");
    }
  }

  if(select.value == "sepia"){
    for(var i = 0; i < img.length; i++){
      img[i].classList.remove("original");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("blanco-negro");
      img[i].setAttribute("class", "animal sepia");
      }
  }
}
