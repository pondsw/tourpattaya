$(document).ready(function () {
    var language;

    function getLanguage() {
        (localStorage.getItem('language') == null) ? setLanguage('en'): false;
        $.ajax({
            url: 'js/lang/' + localStorage.getItem('language') + '.json',
            dataType: 'json',
            async: false,
            dataType: 'json',
            success: function (lang) {
                language = lang
            }
        });
    }

    getLanguage();
    changeText();

    function setLanguage(lang) {
        if (localStorage.getItem('language') !== lang) {
            localStorage.setItem('language', lang);
            getLanguage();
        }
    }

    function changeText() {
        $('#home-link').text(language.home);
        $('#package-link').text(language.package);
        $('#pattaya-link').text(language.pattaya);
        $('#contact-link').text(language.contact);
        $('#pattay-city-content-1').text(language.pattayap1);
        $('#pattay-city-content-2').text(language.pattayap2);
        $('#address').text(language.address);
    }

    $('#thBtn').click(function () {
        setLanguage("th");
        changeText();
    });

    $('#enBtn').click(function () {
        setLanguage("en");
        changeText();
    });
});