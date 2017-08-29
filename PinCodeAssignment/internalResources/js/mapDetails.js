function initMap() {
    var position = {lat: 21.1458004, lng: 79.08815460000005};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: position
    });
  
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
}