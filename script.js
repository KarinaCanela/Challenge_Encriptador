function encriptar(){
    var mensaje= document.querySelector("#area-msj").value.toLowerCase();
    var txtEncriptado=mensaje.replace(/e/g,"enter");
    var txtEncriptado=txtEncriptado.replace(/i/g,"imes");
    var txtEncriptado=txtEncriptado.replace(/a/g,"ai");
    var txtEncriptado=txtEncriptado.replace(/o/g,"ober");
    var txtEncriptado=txtEncriptado.replace(/u/g,"ufat");
    document.getElementById("parrafo-msj").innerHTML=txtEncriptado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";
    document.getElementById("btn-copiar").style.marginTop="100px";
    document.getElementById("imagen").style.display="none";
    document.getElementById("parrafo-msj").style.marginTop="80px";
    document.getElementById("parrafo2").style.display="none";
}   
       
function copiarPortapapeles(id_elemento){
    var txtCopiado=document.createElement("input");
    txtCopiado.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(txtCopiado);
    txtCopiado.select();
    document.execCommand("copy");
    document.body.removeChild(txtCopiado);

    document.getElementById("area-msj").value="";   
}

function desencriptar(){
    var mensajeEncriptado= document.querySelector("#area-msj").value.toLowerCase();
    var txtDesencriptado=mensajeEncriptado.replace(/enter/g,"e");
    var txtDesencriptado=txtDesencriptado.replace(/imes/g,"i"); 
    var txtDesencriptado=txtDesencriptado.replace(/ai/g,"a");
    var txtDesencriptado=txtDesencriptado.replace(/ober/g,"o");
    var txtDesencriptado=txtDesencriptado.replace(/ufat/g,"u");
    document.getElementById("parrafo-msj").innerHTML=txtDesencriptado;
    document.getElementById("btn-copiar").style.display="show";
    document.getElementById("btn-copiar").style.display="inherit";
    document.getElementById("btn-copiar").style.marginTop="100px";
    document.getElementById("imagen").style.display="none";
    document.getElementById("parrafo-msj").style.marginTop="80px";
    document.getElementById("parrafo2").style.display="none";
}