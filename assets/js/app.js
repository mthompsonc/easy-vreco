function initMap() {
  var laboratoriaChile = {
    lat: -33.4190406,
    lng: -70.6438986
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratoriaChile
  });
  var markadorLaboratoria = new google.maps.Marker({
    map: map
  });


  function buscar() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }
  var latitude, longitude;
  var funcionExito = function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
    var iconBase = 'https://image.ibb.co/k8ha3x/mini_bike.png';
    var miUbicación= new google.maps.Marker({
      position: {lat: latitud, lng: longitud},
      map: map,
      icon: iconBase
    });
    map.setZoom(18);
    map.setCenter({
      lat: latitud,
      lng: longitud
    });
  }

  var funcionError = function(error) {
    alert("Tenemos un problema con encontrar tu ubicación");
  }
  document.getElementById('findme').addEventListener('click',buscar);

// Agregando funcionalidad de inputs
var inputOrigen= document.getElementById("origen");
var inputDestino= document.getElementById("destino");

new google.maps.places.Autocomplete(inputOrigen);
new google.maps.places.Autocomplete(inputDestino);

// Trazar Ruta

var directionsService= new google.maps.DirectionsService;
var directionsDisplay= new google.maps.DirectionsRenderer;

var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
  directionsService.route({
    origin: inputOrigen.value,
    destination: inputDestino.value,
    travelMode: 'BICYCLING'
  }, function(response, status){
    if(status === 'OK'){
      directionsDisplay.setDirections(response);
    }else{
      window.alert('No encontramos una ruta');
    }
  })
  document.getElementById('trazar-ruta').addEventListener('click',calculateAndDisplayRoute);
}
}



/*function findMe(){
  var output= document.getElementById('map');
  if(navigator.geolocation){
    console.log('Si se puede!');
  } else {
    console.log('no se puede :(')
  }

  function localizacion(posicion){
  
  var latitude= posicion.coords.latitude;
  var longitude= posicion.coords.longitude;

  var imgUrl= "https://maps.googleapis.com/maps/api/staticmap?size=1000x400&markers=icon:https://image.ibb.co/k8ha3x/mini_bike.png%7C"+ latitude +","+ longitude +"&key=AIzaSyAgLmFihHNPEaxSiqWqVbNw-9S9-GqKowA"


  output.innerHTML= "<img class=mapg src='"+ imgUrl +"'>"
  console.log(latitude);
  console.log(longitude);
  }
  function error(){
    console.log('no se puede encontrar su posición')
  }
  navigator.geolocation.getCurrentPosition(localizacion,error);
}
*/

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
/*
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        // autocompletado input origen
        function initialize() {
          var input = document.getElementById('pac-input');
          new google.maps.places.Autocomplete(input);
        }
        
        // autocompletado input destino
        function initialize2() {
          var input = document.getElementById('pac-input-2');
          new google.maps.places.Autocomplete(input);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, 'load', initialize2);

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
  
*/