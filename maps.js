

window.addEventListener('load', function(e){

    var links = document.querySelectorAll('header-contacts__link__map');
    links.addEventListener('click', onMenuClick);
    function onMenuClick(e){
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&load=Geolink"
        type="text/javascript"
    }
});