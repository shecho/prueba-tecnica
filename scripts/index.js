

  // function getData() {
  //       initMap();

  // }
     
  
//   function initMap() {
//     // The location of Uluru
//     var uluru = { lat: -25.344, lng: 131.036 };
//     // The map, centered at Uluru
//     var mapa = new google.maps.Map(document.getElementById('map'), {
//       zoom: 4,
//       center: uluru
//     });
//     var marker = new googl.map.Marker({position:uluru, map:map});
    

//   }
// initMap()
 

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


  