var cities = [
    {
        city : 'Rose hill',
        desc : 'This is the best country in the world!',
        lat : 23.200000,
        long : 79.225487
    },
    {
        city : 'Flac',
        desc : 'The Heart of Mauritius!',
        lat : 28.500000,
        long : 77.250000
    },
    {
        city : 'Qtre bornes',
        desc : 'Bollywood city!',
        lat : 19.000000,
        long : 72.90000
    },
    {
        city : 'Moka',
        desc : 'Howrah Bridge!',
        lat : 22.500000,
        long : 88.400000
    },
    {
        city : 'Port louis  ',
        desc : 'Kathipara Bridge!',
        lat : 13.000000,
        long : 80.250000
    }
];

//Angular App Module and Controller

app.controller('MapCtrl', function ($scope) {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(20.29379,57.66),
        // center: new google.maps.LatLng(-19.38438, 57.37548),
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});

