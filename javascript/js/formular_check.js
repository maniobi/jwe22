// Button "suchen" und in Variable speichern
let submit = $('#nl_submit');

submit.click(function(e){
    // Button davor bewahren, das Formular abzuschicken
    e.preventDefault();
    

    let stimme = 0;

    // Lesen des Formularfeldes: nl_salutation
    const salutation = $('input[name="nl_salutation"]:checked');

    
    if(salutation.length > 0) {
        // Bedingung erfüllt, super
        console.log('super, Anrede gewählt');
        $('#err_nl_salutation').slideUp();
        stimme++;
    } else {
        // nicht erfüllt / Fehler
        console.error('Fehler: keine Anrede');
        $('#err_nl_salutation').slideDown();
    }


    const fullname = $('#nl_name');

    if(fullname.val() != '' && fullname.val().length > 3 && fullname.val().indexOf(' ') > 2) {
        console.log('Alles richtig!');
        $('#err_nl_name').slideUp();
        stimme++;
    } else {
        console.error('Fehler: Name wurde nicht korrekt angegeben.');
        $('#err_nl_name').slideDown();
    }


    const email = $('#nl_email');

    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/gm;

    if (email.val().match(regExp)) {
        $('#err_nl_email').slideUp();
        stimme++;
    } else {
        console.error('E-Mail Adresse entspricht nicht dem richtigen Muster')
        $('#err_nl_email').slideDown();
    }


    const gdpr = $('#nl_gdpr:checked');

    if(gdpr.length == 1) {
        console.log('Datenschutz OK!');
        $('#err_nl_gdpr').slideUp();
        stimme++;
    } else {
        console.error('Bitte stimmen Sie zu dass wir Ihre Daten verkaufen dürfen!');
        $('#err_nl_gdpr').slideDown();
    }

    console.log(stimme);

    if(stimme == 4) {
        $('.success').slideDown();
        $('form').slideUp();
    }
    



    // Button davor bewahren, das Formular abzuschicken
    return false;
});