// leere Datei 


let colors = [
    'red',
    'green',
    'blue',
    'black',
    'orange',
    'brown'
];

$('h1').click(function() {
    let randomColor = colors[Math.floor( Math.random() * 5 )];
    console.log(randomColor);
    // mit this bereits gefundene Elemente wieder verwenden
    $(this)
        .css('color', randomColor)
        .css('font-size', Math.floor( Math.random() * 20 ) + 10)
    ;
});

if(typeof Cookies.get('cookie-consent') == 'undefined') {
    $('#cookie-consent').slideDown('slow');
    $('#cookie-consent button').click(function() {
        $('#cookie-consent').fadeOut('slow');
        Cookies.set('cookie-consent', '1');
    });
}


// HTML Element erzeugen
let tooltip = $('<div id="tt1">Tooltip Info Text</div>');
// dynamisches hinzufügen von Elementen im HTML Dokument
$('.tooltip').append(tooltip);

tooltip.css('display', 'none');


$('a.tooltip')
    .mouseover(function() {
        tooltip.fadeIn();
    })
    .mouseout(function() {
        tooltip.fadeOut();
    })
;








// Geschwindigkeit zwischen den Farbänderungen