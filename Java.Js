let  texto =document.getElementById("texto");
  let position = 0;
  function mover(){
    position += 10;
    texto.style.marginLeft=position + "px";
    if(position > 600){
        position = 0;
    }
  }
  setInterval (mover, 30);