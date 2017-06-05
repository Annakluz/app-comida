var restaurantes = [
    {
        "nombre": "Perro Negro",
        "coord": {
            "lat": "19.4242966",
            "long": "-99.1851035,14"
        },
        "dir":"Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX"
    },
    {
        "nombre": "La fabrica Pizza",
        "coord": {
            "lat": "19.4193285,",
            "long": "-99.1682378,16"
        },
        "dir":"Plaza Villa de Madrid No.22, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX"
    },
    {
        "nombre": "Chuchito Pérez",
        "coord": {
            "lat": "19.4193285,-99.1682378,16",
            "long": "-99.1682378,17"
        },
        "dir":"Durango 187, Cuauhtémoc, Roma Nte., 06700 Ciudad de México, CDMX"
    }
    ];

var plantillaRestaurante =
    '<div class="tarjeta-restaurante">' +
    '<div class="logo-restaurante">' +
    '<i class="material-icons">room</i>' +
    '</div>' +
    '<div class="informacion - restaurante">' +
    '<h5 class="nombre - restaurante ">__nombre__</h5>' +
    '<p class="direccion ">__direccion__</p>' +
    '</div>' +
    '</div>';


var mostrarRestaurantes = function (restaurantes) {
	var plantillaFinal = " ";
	restaurantes.forEach(function (restaurantes) {
		plantillaFinal += plantillaRestaurante.replace("__nombre__", restaurantes.nombre)
			.replace("__direccion__", restaurantes.dir)
		
	});
	$("#seccionRestaurant").html(plantillaFinal);
};
    







function initMap() {
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
}

$(document).ready(function(){
    initMap();
    mostrarRestaurantes(restaurantes);
});
