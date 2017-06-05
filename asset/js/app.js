function initMap() {
        var uluru = {lat: 19.4176387, lng: -99.1648153};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$(document).ready(initMap);

