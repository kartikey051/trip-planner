//set map options
var myLatLng ={lat: 20.278940,lng:85.731682};
var mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP

};
//create map
var map= new google.maps.MAP(document.getElementById("googleMap"),mapOptions);

