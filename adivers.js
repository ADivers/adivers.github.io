

particlesJS("particles-js", 
{ "particles": { "number": { "value": 160, "density": { "enable": true, "value_area": 800 } }, 
"color": { "value": "#ffffff" }, 
"shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, 
"polygon": { "nb_sides": 5 }, 
"image": { "src": "img/github.svg", "width": 100, "height": 100 } },
 "opacity": { "value": 1, 
"random": true, "anim": { "enable": true, "speed": 1, 
"opacity_min": 0, "sync": false } },
 "size": { "value": 3, "random": true, 
 "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, 
 "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, 
 "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", 
 "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, 
 "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, 
 "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, 
 "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
  "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, 
//   "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, 
  "remove": { "particles_nb": 2 } } }, "retina_detect": true }); 
  
//   var count_particles, stats, update; stats = new Stats;
//  stats.setMode(0); 
//   stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px';
//    stats.domElement.style.top = '0px'; 
//   document.body.appendChild(stats.domElement); 
//   count_particles = document.querySelector('.js-count-particles'); 
//   update = function () { stats.begin(); stats.end(); 
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
//     { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; 
//   requestAnimationFrame(update);;



/*========================================================================


========================================================================*/


(function ($) {
    "use strict"
    var mypage = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    mypage.WebLoad = function () {
        document.getElementById("loading").style.display = "none";
    };

    /*--------------------
        * Header Class
    ----------------------*/
    mypage.HeaderSticky = function () {
        $(".navbar-toggler").on("click", function (a) {
            a.preventDefault(), $(".navbar").addClass("fixed-header")
        });
    };

    /*--------------------
        * Menu Close
    ----------------------*/
    mypage.MenuClose = function () {
        $('.navbar-nav .nav-link').on('click', function () {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    mypage.HeaderScroll = function () {
        $('a[href*="#"]:not([href="#"])').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 65,
                    }, 1000);
                    return false;
                }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    mypage.HeaderFixed = function () {
        if ($(window).scrollTop() >= 60) {
            $('.navbar').addClass('fixed-header');
        }
        else {
            $('.navbar').removeClass('fixed-header');
        }
    }

    /*--------------------
        * Progress Bar 
    ----------------------*/
    mypage.ProgressBar = function () {
        $(".progress .progress-bar").each(function () {
            var bottom_object = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();
            var progressWidth = $(this).attr('aria-valuenow') + '%';
            if (bottom_window > bottom_object) {
                $(this).css({
                    width: progressWidth
                });
            }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    mypage.Counter = function () {
        var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
            });
            a = 1;
        }
    }

    /*--------------------
    * Isotope
    ----------------------*/
    mypage.MasoNry = function () {
        var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
        });
        //Filtering items on portfolio.html
        var portfolioFilter = $('.filter li');
        // filter items on button click
        $(portfolioFilter).on('click', function () {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
        });
        //Add/remove class on filter list
        $(portfolioFilter).on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
    }

    /*--------------------
    * owl Slider
    ----------------------*/
    mypage.BlogSlider = function () {
        var testimonials_slider = $('#blog-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1140: {
                    items: 3
                }
            }
        });
    }

    mypage.ClientSlider = function () {
        var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 3
                },
                1140: {
                    items: 3
                }
            }
        });
    }


    mypage.PopupVideo = function () {
        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }

    mypage.LightboxGallery = function () {
        $('.portfolio-content').magnificPopup({
            delegate: '.lightbox-gallery',
            type: 'image',
            tLoading: '#%curr%',
            mainClass: 'mfp-fade',
            fixedContentPos: true,
            closeBtnInside: true,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    }


    // Window on Load
    $(window).on("load", function () {
        mypage.WebLoad();
    });

    $(document).on("ready", function () {
        mypage.MasoNry(),
            mypage.ClientSlider(),
            mypage.MenuClose(),
            mypage.BlogSlider(),
            mypage.Counter(),
            mypage.ProgressBar(),
            mypage.HeaderScroll(),
            mypage.PopupVideo(),
            mypage.LightboxGallery(),
            mypage.HeaderSticky();
    });

    $(window).on("scroll", function () {
        mypage.Counter(),
            mypage.ProgressBar(),
            mypage.HeaderFixed();
    });

})(jQuery);


console.log("log")
console.warn("warn")
console.info("info")
console.error("error")
