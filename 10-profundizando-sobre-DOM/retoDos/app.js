'use strict'

const cities = {
    madrid: [
        'https://pesweb.azureedge.net/spimg/geographicimages/madrid.jpg?scale=downscaleonly&encoder=freeimage&progressive=true&quality=50&w=480&h=480&mode=crop',
        'https://img.emg-services.net/HtmlPages/HtmlPage17358/madridoverview.png',
        'https://www.lifestyletravelnetwork.com/wp-content/uploads/2019/05/Madrid_05.jpg'
    ],

    paris: [
        'https://www.sortiraparis.com/images/80/1467/534046-visuel-paris-tour-eiffel-2.jpg',
        'https://cache.marriott.com/marriottassets/destinations/hero/paris-destination.jpg?interpolation=progressive-bilinear',
        'https://cdn1.thr.com/sites/default/files/2020/03/gettyimages-1151479660.jpg'
    ],
    NY: [
        'https://dam.ngenespanol.com/wp-content/uploads/2020/04/nueva-york-museos.jpg',
        'https://images.movehub.com/wp-content/uploads/2017/08/21152208/New-York-AA.jpg',
        'https://www.gannett-cdn.com/media/2018/12/15/USATODAY/usatsports/MotleyFool-TMOT-657f0436-21e9af86.jpg'
    ]
};

const select = document.querySelector('select');
const imgs = document.querySelectorAll('img');

select.style = 'padding:5px; font-weight:bold;';

select.addEventListener('change', () => {
    let selectedCity = select.value;
    imgs.forEach((img, index) => {
        img.setAttribute('src', cities[selectedCity][index]);
        img.style = 'width:300px; margin:5px;';
    });
});