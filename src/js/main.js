$(document).ready(function() {

    var $container = $('.masonry-container');
    $container.imagesLoaded(function() {
        $container.masonry( {
            columWidht: '.item',
            itemSelector: '.item'
            });
         });


    var mixer = mixitup('.container-mix', {
        animation: {
            effects: 'scale fade',
            duration: '100'
        }
    });

});


