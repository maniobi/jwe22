// Bilder-Ausgabe generieren
for (var i = 1; i <= 23; i++) {
    i = i.toString();

    if (i.length < 3) {

        // hat die Zahl nur 1 Stelle (Länge 1), dann brauchen wir 2x eine Extra 0
        if (i.length < 2) {
            i = '00' + i;
            // ansonsten hat die Zahl 2 Stellen (Länge 2), dann brauchen wir 1x eine Extra 0
        } else {
            i = '0' + i;
        }
    }

    var imageTag = `<img src="img/thumbnails/${i}.jpg" alt="">`;
    var imageLink = $('<a data-fancybox="gallery" href="img/fullscreen/' + i + '.jpg" class="zoom-image">' + imageTag + '</a>');

    $('body').append(imageLink);
}

var lightboxContainer = $('<div class="lightbox-container"></div>');

$('body').append(lightboxContainer);
