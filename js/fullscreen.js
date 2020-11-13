window.addEventListener("load", startup, false);

function startup() {
    /* Den ID-Selector nutzen um auf das <div> Element
       mit der id=map_id Bezug zu nehmen.
    */
    const map_id = document.getElementById("map_id");
    var fullscreen_button_id = document.getElementById("fullscreen_button_id");

    /* Mit der ENTER Taste die Methode 'toggleFullScreen()' zum
       Vollbild-umschalten aufrufen.
    */
    document.addEventListener("keypress", function(e) {
        if (e.key === 'Enter') {
            toggleFullScreen(map_id);
        }
    }, false);
    document.addEventListener("keypress", function(e) {
        if (e.key === 'f') {
            toggleFullScreen(map_id);
        }
    }, false);
    fullscreen_button_id.addEventListener("click", function() {
        toggleFullScreen(map_id);
    }, false);
    map_id.addEventListener("click", function() {
        toggleFullScreen(map_id);
    }, false);
}


function toggleFullScreen(map_id) {
    if (!document.fullscreenElement) {
        /* Wenn das DOM-document nicht (!) im Vollbildmodus, dann
           aktiviere Vollbildmodus.
        */
        map_id.requestFullscreen();
    }
    else {
        // Andernfalls verlasse Vollbildmodus.
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
