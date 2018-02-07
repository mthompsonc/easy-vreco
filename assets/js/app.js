function findMe(){
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

