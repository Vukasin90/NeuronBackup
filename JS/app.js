$( document ).ready(function() {
        // PARTICLES LOADER
    var i;
    for (i = 0; i < window.length; i++) {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('callback - particles.js config loaded');
        });

        //AOS Init
        AOS.init();
    }

    //Smooth scrolling
        var scrollLink = $('.scroll');
        for (i = 0; i < window.length; i++) {
            scrollLink.click(function(e) {
                e.preventDefault;
                $('body, html').animate({
                    scrollTop: $(this.hash).offset().top
                },1000);
            });
        }

    // Hamburger menu toggle
    $('.menu-icon').click(function() {
        $('.nav').addClass('nav-open');
        $('body').addClass("fixedPosition");
    });

    $('.close-menu').click(function() {
        $('.nav').removeClass('nav-open');
        $('body').removeClass("fixedPosition");
    });

    if($('.nav-open')) {
        $('a').click(function() {
            $('.nav').removeClass('nav-open'); 
            $('body').removeClass("fixedPosition");
        });
    }

    $( document ).on( 'keydown', function ( e ) {
        if ( e.keyCode === 27 ) { // ESC
             $('.nav').removeClass('nav-open');
             $('body').removeClass("fixedPosition");
        }
    });
        
    //Fixed nav on scroll 
    for (i = 0; i < window.length; i++) {
        $(window).scroll(function() {
            if($(document).scrollTop() >= $('.hero').height()) {
                $('.navigation').addClass('alt-nav-scroll').removeClass('container');
                $(window).click(function() {
                    $('.navigation').removeClass('alt-nav-scroll');
                });
            } else {
                $('.navigation').removeClass('alt-nav-scroll').addClass('container');
            }
        
            // Active link changer
            var scrollbarLocation = $(this).scrollTop();
            var scrollLink = $('.scroll');
            
            scrollLink.each(function() {
                var sectionOffset = $(this.hash).offset().top;
        
                if(sectionOffset <= scrollbarLocation + 300) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            });
        
            // // Parallax effects
                //Header
                $('.intro').css({
                    'transform': 'translate(0px, '+ scrollbarLocation /11 +'%)'
                });
        });
    }

// Projcets toggle 
    $('.icon-right-open, .icon-left-open').click(function() {
        var $this = $(this),
        curActiveProject = $('.projects-wrap').find('.active-project'),
        position = $('.projects-wrap').children().index(curActiveProject),
        projectNum = $('.project').length;
    
        if($this.hasClass('icon-right-open')) {
            if(position < projectNum -1) {
                $('.active-project').removeClass('active-project').next().addClass('active-project');
            } else {
                $('.project').removeClass('active-project').first().addClass('active-project');
            }
        } else {
            if(position === 0) {
                $('.project').removeClass('active-project').last().addClass('active-project');
            } else {
                $('.active-project').removeClass('active-project').prev().addClass('active-project');
            }
            
        }
    });
    // All projects animation
    $(window).scroll(function() {
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
        
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
        
            return ((elemBottom <= docViewBottom + 300) && (elemTop >= docViewTop + 300));
        }

        var wScroll = $(this).scrollTop();
        var projectsLog = $('.project-log');
        if ($(document).scrollTop() >= $('.hero-projects').length) {
            $(projectsLog).each(function(e) {
                if (isScrolledIntoView(this) === true) {
                    setTimeout(function() {
                        $(projectsLog).eq(e).addClass('project-log-is-showinig');
                    }, 150 );
                } 
            });
        }
    });

    //Form spam proof
    var randomNum1 = Math.floor((Math.random() *10) + 1 );
    var randomNum2 = Math.floor((Math.random() *10) + 1 );
    var mathSolution = randomNum1 + randomNum2;
    
    $('.first-random-num').html(randomNum1 +' +');
    $('.second-random-num').html(randomNum2 + ' ?');

    $('.form-submit').click(function(e) {
        var answer = $('.answer').val();
        if(answer != mathSolution) {
            e.preventDefault();
            $('.answer').trigger('reset');
            alert('Nije tacan rezultat');
        } 
    });

});
