// JavaScript For Schleife
for(let i=0; i < 10; i++) {
    // console.log(i);
    if(i == 5 || i == 9 || i == 3) {
        // $('#output').append(i); 
    }

}

// while-schleife
let n = 0;
while (n < 3) {
    console.log(n);
    n++;
}

// JavaScript forEach
let einkaufsliste = [
    'Milch',
    'Eier',
    'Brot',
    'Snickers',
    'Chips',
    'Klebeband',
    'Seil',
    'Augenbinde'
];

// JavaScript Variante
einkaufsliste.forEach(function(element) {
    // console.log(element);
    // $('#output').append(element + '<br>');
});

// jQuery Variante
$(einkaufsliste).each(function(index, element) {
    // console.log(element);
    //$('#output').append(element + '<br>');
});

let produkte = [
    ['Semmel', 0.25],
    ['Kornspitz', 0.75],
    ['Hausbrot', 2.80],
    ['Laugenstangerl', 1.10]
];

// produkte 
//     array1
//         "Semmel",
//         0.25

//     array2
//     array3

$(produkte).each(function(index, produkt) {
    // console.log(element);

    let output = $(`<div id="p${index}" class="row product">  </div>`);

    $(produkt).each(function(subindex, detail) {
        output.append('<span>' + detail + '</span>');
    });

    output.append(`<input name="p${index}_amount" id="p${index}_amount" type="number" min="0" max="99">`)

    $('#output').append(output);

});


/*

    Interval vs. Loop

*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let x = 0;

let meinInterval = window.setInterval(function() {

    $('#strange_layer').css({
        left: getRandomInt(0, 500),
        top: getRandomInt(0, 500),
        'border-radius': getRandomInt(0, 50) + '%',
        'transform': 'rotateX('+getRandomInt(0, 360)+'deg) rotateZ('+getRandomInt(0, 360)+'deg)'
    });
    
}, 1000);









