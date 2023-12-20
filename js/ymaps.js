ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("ymap", {
            center: [61.238, 73.442],
            zoom: 15,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [61.2, 73.4]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([61.237681, 73.446748], {
            balloonContent: '<strong>ТЦ Росич, второй этаж</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFD700'
        }));

    var myMap = new ymaps.Map("ymap2", {
            center: [61.285, 73.353],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        
        .add(new ymaps.Placemark([61.285562, 73.353050], {
            balloonContent: '<strong>Справа от магазина Магнит</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFD700'
        }));

    var myMap = new ymaps.Map("ymap3", {
            center: [61.250, 73.452],
            zoom: 16,
            controls: ['zoomControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [61.250, 73.452]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        
        .add(new ymaps.Placemark([61.250830, 73.452443], {
            balloonContent: '<strong>Торговый Центр "Взлетный"</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#FFD700'
        }));
};

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});