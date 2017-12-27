$(document).ready(function() {

    var $container = $(".masonry-container");
    $container.imagesLoaded(function() {
        $container.masonry( {
            columWidht: ".item",
            itemSelector: ".item"
            });
         });
    });








