var img = document.getElementsByClassName("animal");
var clase = "animal ";
var select = document.getElementById("select");
select.onchange = function(){
  changeClass(select.value);
}

function changeClass(value){
  for(var i = 0; i < img.length; i++){
        img[i].classList.remove("sepia");
        img[i].classList.remove("blanco-negro");
        img[i].classList.remove("original");
        img[i].classList.remove("invertir-colores");
        img[i].classList.add(value);
      }
}
