

  function getData() {
        initMap();
     
  }
  function initMap() {
    // The location of Uluru
    let uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    var mapa = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru
    });

}
initMap()
  