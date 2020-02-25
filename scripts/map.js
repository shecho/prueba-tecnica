
  function initMap() {
    console.log("test!");
    // The location of Uluru
    var uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var mapa = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    console.log("test2");
  }
// initMap(mapa)
 
// 