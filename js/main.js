
(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc'   // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // svg fallback
    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.png");
    }


   /* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {

            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            
            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        
        });
    };
    

   /* info toggle
    * ------------------------------------------------------ */
    var ssInfoToggle = function() {

        //open/close lateral navigation
        $('.info-toggle').on('click', function(event) {

            event.preventDefault();
            $('body').toggleClass('info-is-visible');

        });

    };


   /* slick slider
    * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });

    };


   /* placeholder plugin settings
    * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };


// <-------------------------------------THIS SECTION WAS ONLY MADE FOR THE PRE-RELEASE VERSION | DISABLED CURRENTLY (TIMELINE) -------------------------->

// // function for initializing the final countdown
// var initializeFinalCountdown = function() {
//     // target final date for the countdown
//     var finalDate = new Date("March 30, 2024 12:37:25").getTime();

//     // initialize countdown timer on elements with class 'home-content__clock'
//     $('.home-content__clock').countdown(finalDate)
//         // event listeners for countdown updates and finish
//         .on('update.countdown finish.countdown', function(event) {
//             // HTML template for displaying countdown elements
//             var template = '<div class=\"top\"><div class=\"time days\">' +
//                 '%D <span>day%!D</span>' +
//                 '</div></div>' +
//                 '<div class=\"time hours\">' +
//                 '%H <span>H</span></div>' +
//                 '<div class=\"time minutes\">' +
//                 '%M <span>M</span></div>' +
//                 '<div class=\"time seconds\">' +
//                 '%S <span>S</span></div>';

//             // update the countdown display with formatted time
//             $(this).html(event.strftime(template));
//         });
// };

   /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        
        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssFinalCountdown();
        ssAjaxChimp();

    })();


})(jQuery);

