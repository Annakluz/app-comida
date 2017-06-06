var restaurantes = [
    {
        "nombre": "Perro Negro",
        "coordenadas": {"lat": 19.4242966, "long":-99.1851035 } ,
        "dir": "Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX"
    },
    {
        "nombre": "La fabrica Pizza",
        "coordenadas":{"lat":19.4193285,"long": -99.1682378},


        "dir": "Plaza Villa de Madrid No.22, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX"
    },
    {
        "nombre": "Chuchito Pérez",
        "coordenadas":{"lat": 19.4193285, "long": -99.1682378},
        "dir": "Durango 187, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX"
    }
    ];

var plantillaRestaurante =
    '<div class="tarjeta-restaurante">' +
    '<div class="logo-restaurante">' +
    '<i class="material-icons">room</i>' +
    '</div>' +
    '<div class="informacion-restaurante">' +
    '<h5 class="nombre-restaurante " data-latitud="__lat__" data-longitud="__long__">__nombre__</h5>' +
    '<p class="direccion ">__direccion__</p>' +
    '</div>' +
    '</div>';


function cargarPagina() {
    obtenerUbicacionActual();
    $(document).on("click",".nombre-restaurante",cambiarUbicacion);
    $("#search-form").submit(filtrarContactos);

}

function obtenerUbicacionActual() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarPosicionActual);
  } else {
    alert("Geolocalización no es soportado en tu navegador");
  }
}

function mostrarPosicionActual(posicion) {
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;

  var coordenadas = {
    lat: latitud,
    lng: longitud
  };

  mostrarMapa(coordenadas);
}

// @coordenadas: { lat: <number>, lng: <number> }
function mostrarMapa(coordenadas) {
  var map = new google.maps.Map($('.map')[0], {
    zoom: 16,
    center: coordenadas
  });
  var marker = new google.maps.Marker({
    position: coordenadas,
    map: map
  });
}

function cambiarUbicacion() {
    var latitud = $(this).data("latitud");
    var longitud = $(this).data("longitud");

    var coordenadas = {
        lat: latitud,
        lng: longitud
    };
    mostrarMapa(coordenadas);
}


var mostrarRestaurantes = function (restaurantes) {
    var plantillaFinal = " ";
    restaurantes.forEach(function (restaurantes) {
        plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurantes.nombre)
            .replace("__direccion__", restaurantes.dir)
            .replace("__lat__", restaurantes.coordenadas.lat)
            .replace("__long__", restaurantes.coordenadas.long)

    });
    $("#seccionRestaurant").html(plantillaFinal);
};



function filtrarContactos(e){
    e.preventDefault();
	var criterioBusqueda = $("#search").val().toLowerCase();
	var contactosFiltrados = restaurantes.filter(function (restaurantes) {
		return restaurantes.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
});
mostrarRestaurantes(contactosFiltrados);
};

/*function initMap() {
    var uluru = {
        lat: 19.4176387,
        lng: -99.1648153
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}*/

$(document).ready(function () {
    //initMap();
    obtenerUbicacionActual();
    mostrarRestaurantes(restaurantes);
    cargarPagina();


});
