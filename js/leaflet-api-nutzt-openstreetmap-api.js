/*
 1.) Initialisieren der Karten 'leaflet_using_mapbox' und 'leaflet_using_osmap'
 2.) Ansicht auf geografische Koordinaten der Schule setzen
 3.) Zoomstufe festlegen
*/
var leaflet_using_osmap  = L.map('map_id').setView([52.5383701,13.3943003], 17);

/*
  1.) Erstellen einer Karten-Kachel-Fläche mit der 'Leaflet' API Methode 'tileLayer()'
      https://leafletjs.com/reference-1.7.1.html#tilelayer
      (Karten werden in Form von mehreren einzelnen Kacheln/Rechtecken geladen.)
  2.) Auf Karten-Kacheln von einem Karten-Provider (hier z.B. 'Mapbox') zugreifen,
      wobei die URL zum Karten-Provider als API dient.
      https://docs.mapbox.com/api/maps/#static-tiles
  3.) Karten-Kacheln auf den Typ 'mapbox/streets-v11' festlegen
  4.) Zoom und Ansichtsoptionen festlegen.
      https://leafletjs.com/reference-1.7.1.html#geojsonevent-id
      https://leafletjs.com/reference-1.7.1.html#gridlayer-tilesize
      https://leafletjs.com/reference-1.7.1.html#gridlayer-maxzoom
      https://leafletjs.com/reference-1.7.1.html#tilelayer-zoomoffset
*/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        id: '',
        tileSize: 512,
        maxZoom: 20,
        zoomOffset: -1
    }
).addTo(leaflet_using_osmap);

/*
 Haus E blau umranden
*/
var polygon = L.polygon([
    [52.537993, 13.393104],
    [52.537673, 13.393364],
    [52.537849, 13.394010],
    [52.538394, 13.393597],
    [52.538334, 13.393313],
    [52.538093, 13.393459]
]).addTo(leaflet_using_osmap);

/*
 Haupteingang markieren
 https://leafletjs.com/reference-1.7.1.html#marker
*/
var marker = L.marker([52.539119, 13.393250]).addTo(leaflet_using_osmap);
marker.bindTooltip("Haupteingang", {permanent: true, className: "Haupteingang", offset: [0, 0] });
marker.addTo(leaflet_using_osmap);

/*
 ERS Icon auf Turnhalle hinzufügen
 https://leafletjs.com/reference-1.7.1.html#icon
*/
var greenIcon = L.icon({
    iconUrl: 'image/logo-ers.svg',
    iconSize:     [48, 95] // size of the icon
});
L.marker([52.538800, 13.392700], {icon: greenIcon}).addTo(leaflet_using_osmap);

/* 
 Raum E114 mit rotem Kreis kennzeichen
*/
var circle = L.circle([52.537804, 13.393341], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(leaflet_using_osmap);

/*
  - Links zu dem Produktseiten und deren APIs der Karte hinzufügen.
*/
leaflet_using_osmap.attributionControl.setPrefix(
                '<a href="https://leafletjs.com/index.html"\
                    target="_blank">\
                    leaflet\
                 </a>\
                 (\
                 <a href="https://leafletjs.com/reference-1.7.1.html"\
                    target="_blank">\
                    API\
                 </a>\
                 )\
                 &#8594;\
                 <a href="https://www.mapbox.com/maps/"\
                    target="_blank">\
                    mapbox\
                 </a>\
                 (\
                 <a href="https://docs.mapbox.com/api/maps/"\
                    target="_blank">\
                    API\
                 </a>\
                 )\
                 &#8594;\
                 <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API"\
                    target="_blank">\
                    Web-Fullscreen\
                 </a>\
                 (\
                 <a href="https://developer.mozilla.org/en-US/docs/Web/API"\
                    target="_blank">\
                    Web-API\
                 </a>\
                 )\
                 '
)
