'use-strict'

// Load html after js
$(document).ready(function(){

    // btns portfolio active class
    var portfolioTab = $('.js-btn').on('click', function(event) {
            event.preventDefault();
            portfolioTab.removeClass('active');
            $(this).addClass('active');
        });
    
    // porfolio sort on click
    
    var $grid = $('.portfolio__grid').isotope({
           itemSelector: '.portfolio__grid-item'

    });
    
    $('.portfolio__btns').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
    });

    
    });