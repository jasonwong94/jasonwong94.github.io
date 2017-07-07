
function initMap() {
    var yyz = {lat: 43.6474570, lng: -79.3952882};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: yyz,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({
      position: yyz,
      map: map
    });

    google.maps.event.addListener(map, "idle", function()
        {
            google.maps.event.trigger(map, 'resize');
        });
  }
