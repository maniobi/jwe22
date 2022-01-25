// sobald du eine Stk. Anzahl eingibst soll eine Funktion ausgeführt werden (Change oder Keypress)
// Zahl größer 0
// Preis/Stk. multipliziert mit Anzahl

$('.row.product').each(function(index) {

    // INFO: Hier war der Fehler. Ich vergas ein einfaches "let" für die Variablen-Deklaration.
    let i = index+1;

    // aktuelles Input Feld ermitteln (es gäbe eine bessere Möglichkeit über $(this))
    let input = $('#p'+i);
    // z.B. $('#p1')

    /*  
        input.change(function(){ .... });
        Die 'change'-Event-Variante würde erst nach dem verlassen des Focus dieses Feldes die Berechnung durchführen
        input.keyup(function() {});
        "Tastatur-Taste-auslassen"-Event auf dem Input Feld überwachen. Berechnung erfolgt nach Tastendruck
    */
    input.change(function() {
        // stk-preis aus dem Input Feld lesen
        let ppp = parseFloat(input.attr('data-price-per-piece'));
        // gleiches Ergebnis liefert: let ppp = input.attr('data-price-per-piece');     

        // Anzahl aus dem Input Feld lesen, "string" Value zu Datentyp "float" (Dezimalzahl) konvertieren/parsen
        let amout = parseFloat(input.val());

        // rechnen
        let result = ppp * amout;

        // Selektor speichern (weniger Tipparbeit) z.B. <span id="p1_sum"></span>
        let sum = $('#p'+i+'_sum');

        // Zwischensumme wird eingefügt als data-sum Attribut
        sum.attr('data-sum', result);

        // Berechnung der Gesamsumme
        let fullSum = 0;

        // Suchen wir alle span-Element die das Attribut data-sum aufweisen
        // .each() iteriert über alle Elmente (Loop)
        $('span[data-sum]').each(function(index, element){
            let elementSum = parseFloat( $(element).attr('data-sum') );
            fullSum = fullSum + elementSum;
        });

        // Bearbeitung der Ausgabe (formatierte Ausgabe)
        fullSum = fullSum.toFixed(2).toString().replace('.',',');
        fullSum = '€ ' + fullSum;

        $('#full_sum').text(fullSum);

        // in String konvertieren, das Punkt mit Komma ersetzen
        result = result.toFixed(2).toString().replace('.', ',');

        // Euro-Zeichen vorne anhängen
        result = '€ ' + result;

        // Einfügen in die Betrag-Spalte z.B. #p1_sum
        sum.text(result);

    });


});