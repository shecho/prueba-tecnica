

/* mesaje de enviado del form */
const enviar = () => {
  console.log("workingForm");
  let nombre = document.getElementById("name").value  
  let correo = document.getElementById("email").value  
  let mensaje = document.getElementById("message-text").value  

if(!nombre|| !correo|| !mensaje){
  mostrartexto= document.getElementById("pintarMensaje").innerHTML=`
 <div class="alert alert-danger alert-dismissible fade show" role="alert">
    Formulario incompleto, por favor llena todos los campos
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>

  `
  
}
else{
  mostrartexto= document.getElementById("pintarMensaje").innerHTML=`
   <div class="alert alert-success alert-dismissible fade show" role="alert">
  Mensaje enviado
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button> 
    `
 } 
}

let send= document.getElementById('send-button').addEventListener("click",enviar)


