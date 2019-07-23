var nomes = '';
    var cen = 1;
    function trocarImg(nroImg,nome,bandeira){
        // document.getElementById("imgEstrela").src = "img/imgEstrela0"+nroImg+".png";
        		nomes = nome
                document.getElementById("imgEstrela").src ="./img/"+nome+"1.gif";
                document.getElementById("bandeira").src ="./img/"+ bandeira+".gif";
    }

    function trocar(nroImg){
        // document.getElementById("imgEstrela").src = "img/imgEstrela0"+nroImg+".png";

                 document.getElementById("imgEstrela").src ="./img/"+nomes+nroImg+".gif";
                //document.getElementById("imgEstrela").src = "blanka1.gif";
    }

      function trocarCenario(nroImg){
      	if(cen>3){
      		cen = 1;

      	}
        nroImg = cen;

                 document.getElementById("cenario").src ="./img/"+'cenario'+nroImg+".gif";
                 cen++;
                //document.getElementById("imgEstrela").src = "blanka1.gif";
    }

  function mover() {
  	nomes = 'blanka';
  	document.getElementById("imgEstrela").src = "./img/blanka1.gif";
  	document.getElementById("bandeira").src = "./img/brasil.gif";
  var elem = document.getElementById("imgEstrela");   
  var pos = 50;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 250) {
      clearInterval(id);
      document.getElementById("imgEstrela").src = "./img/blanka4.gif";
    } else {
      pos++; 
      //elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}