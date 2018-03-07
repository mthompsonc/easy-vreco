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


  // * Buscando ubicación actual.-

  function findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }
  var latitud, longitud;
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

  // * Función de autocompletado de inputs
  
  function autocomplete() {
    var origin = document.getElementById('pac-input');
    var destination = document.getElementById('pac-input-2');
    new google.maps.places.Autocomplete(origin);
    new google.maps.places.Autocomplete(destination);
  }
  google.maps.event.addDomListener(window, 'load', autocomplete);

  document.getElementById('findme').addEventListener('click',findMe);

  // * Trazar Ruta
    var latitud, longitud;

    var success = function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      var myLocation = new google.maps.Marker({
       position: {lat: latitude, lng: longitude},
       animation: google.maps.Animation.DROP,
       draggable: true,
       title: 'drag me!',
       map: map,
       icon: image
      });
      map.setZoom(17);
      map.setCenter({lat: latitude, lng: longitude});
    }

    var error = function(err) {
      console.log(err);
    }

    var origin = document.getElementById('origin');
    var destination = document.getElementById('destination');
    var autocomplete = new google.maps.places.Autocomplete(origin);
    autocomplete.bindTo('bounds', map);

    var autocompleteDest = new google.maps.places.Autocomplete(destination);
    autocompleteDest.bindTo('bounds', map);

     var directionsService = new google.maps.DirectionsService();
       var directionsDisplay = new google.maps.DirectionsRenderer();

       directionsDisplay.setMap(map);

       var onChangeHandler = function() {
         calculateAndDisplayRoute(directionsDisplay, directionsService);
       }

       document.getElementById('route').addEventListener('click', onChangeHandler);

      function calculateAndDisplayRoute(directionsDisplay, directionsService){
    directionsService.route({
      origin: document.getElementById("origin").value,
      destination: document.getElementById("destination").value,
      travelMode: 'WALKING'
    }, function(response, status){
      if(status === 'OK'){
        directionsDisplay.setDirections(response);
      } else {
        window.alert('No encontramos una ruta');
      }
    });
  }
};



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