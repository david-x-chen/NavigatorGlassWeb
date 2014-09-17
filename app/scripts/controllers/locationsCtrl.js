'use.strict'

angular.module('navigatorGlassProjectApp')
.controller('LocationCtrl',function(HttpService,$scope,LocationService){
    LocationService.getLocations().success(function(result){
        // console.log("Locations"+result);
        $scope.createNewDivs(result);
    });
    $scope.loadLocations = function() {

        var Json;
        var Maps = [];
        var MapsOpt = [];
        var MapsDivs = [];
        var Infos = [];
        var Markers = [];
        var Centers = [];
        var map;
        var ObjJson;

        function createMarkerInfo(MapSel, iE, Pos, Elem) {
            var Acc = Elem.accuracy;
            var Add = Elem.address;
            var Dsp = Elem.displayName;
            var Lat = Elem.latitude;
            var Lon = Elem.longitude;
            var Tim = Elem.timestamp;
            var Id = Elem.id;
            var Knd = Elem.kind;
            var TmR = Elem.timestampRaw;
            var InfoContent = '<font style="font-size: 6pt;font-family: Verdana;font-weight: normal;font-style: normal;color: black;">';
            InfoContent += '<b>ID:</b>' + Id;
            InfoContent += '&nbsp;&nbsp;<b>Accuracy:</b>' + Acc + '<br>';
            InfoContent += '<b>Lat/lon:</b>' + Lat + '/' + Lon + '<br>';
            InfoContent += '<b>Date:</b>' + Tim + '<br>';

            Infos[iE] = new google.maps.InfoWindow({ content: InfoContent });
            Markers[iE] = new google.maps.Marker({ map: MapSel, position: Pos });

            google.maps.event.addListener
            (
                Markers[iE],
                'click', function () {
                    Infos[iE].open(MapSel, Markers[iE]);
                    setTimeout
                    (
                        function () {
                            Infos[iE].close();
                            Maps[iE].setCenter(Pos);
                        }, 4000
                        );
                }
                );
        }

        $scope.createNewDivs= function(Json) {
            ObjJson = Json;

            var ScrollDiv = document.getElementById('scroll');
            for (var iE = 0; iE < ObjJson.length; iE++) {
                MapsDivs[iE] = document.createElement('div');
                MapsDivs[iE].id = 'map_canvas_' + iE;
                MapsDivs[iE].style.cssText = "width:265px;height:150px";
                document.getElementById('scroll').appendChild(MapsDivs[iE]);
            }
            initialize();
        }

        function initialize() {
            var ScrollDiv = document.getElementById('scroll');

            if (ObjJson.length > 0) {
                for (var iE = 0; iE < ObjJson.length; iE++) {
                    var Elem = ObjJson[iE];
                    var Lat = Elem.latitude;
                    var Lon = Elem.longitude;
                    var Time = Elem.timestamp;
                    var Center = new google.maps.LatLng(Lat, Lon);

                    var NewLeft = (270 * ((iE - 1) + 1));
                    var NewTop = (150 * (iE) * -1);

                    MapsDivs[iE].style.top = NewTop + 'px';
                    MapsDivs[iE].style.left = NewLeft + 'px';

                    var MapOptions =
                    {
                        zoom: 17,
                        center: Center,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }

                    if (MapsDivs[iE]) {
                        Maps[iE] = new google.maps.Map(MapsDivs[iE], MapOptions);
                    }
                    createMarkerInfo(Maps[iE], iE, Center, Elem);
                }
            }
            else {
                console.log("Error while loading");
            }
        }
    }

    $scope.loadLocations();
});