// Untuk ketika tombol di klik scrolling
// ABOUT
$('.btnDown').click(function() {
    $('html, body').animate({
        scrollTop: 1 + $('.scrolling').offset().top
      }, 800,'swing');
});













// Untuk ketika scroll ada efek Parallax
// About
$(window).scroll(function () {
    const nScroll = $(this).scrollTop();

    $('.whyme h3').css({
        'transform' : 'translate(0px, '+ nScroll/2 +'%)' 
    });

    if ($(this).scrollTop() > 410 && $(this).scrollTop() < 540) {
        $('.whyme').addClass('break-1');
    } else if ($(this).scrollTop() >= 540) {
        $('.whyme').addClass('break-0');
    } else {
        $('.whyme').removeClass('break-1');
        $('.whyme').removeClass('break-0');
    }

    if (window.matchMedia('(max-width:700px)').matches) {
        $('footer').css({
            'display' : 'grid'
        });
    } else {
        if ($(this).scrollTop() >= $('.scrolling').offset().top) {
            $('footer').css({
                'display' : 'flex'
            });

        } else {
            $('footer').css({
                'display' : 'none'
            });
        }
    }
});













// Untuk Resume
// About
$('.resume-thumb').click( function() {
    $('body').append('<div class="frame"></div>');
    $('.frame').css({
        'position' : 'fixed',
        'top' : '0',
        'bottom' : '0',
        'right' : '0',
        'left' : '0',
        'background' : 'rgba(0,0,0,.5)',
        'display' : 'flex',
        'justify-content' : 'center',
        'align-items' : 'center',
        'z-index' : '144'
    })

    const name = '<img src="image/CV.png"/>';

    const closeBtn = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <path d="M0.505,0.507c0.437-0.436,1.144-0.436,1.58,0l5.914,5.915l5.915-5.915c0.429-0.444,1.136-0.456,1.58-0.027c0.443,0.429,0.456,1.136,0.026,1.58c-0.009,0.009-0.019,0.018-0.026,0.027L9.579,8.001l5.915,5.915c0.429,0.444,0.416,1.151-0.027,1.58c-0.434,0.418-1.12,0.418-1.553,0L7.999,9.581l-5.914,5.915c-0.444,0.429-1.151,0.417-1.58-0.027c-0.418-0.434-0.418-1.12,0-1.553l5.914-5.915L0.505,2.087C0.069,1.65,0.069,0.943,0.505,0.507z"/></svg>'

    $('.frame').html(name + closeBtn);  
    $('.frame').css({
        'display' : 'flex'
    });

    $('.frame svg').click(function() {
        $('.frame').css({
            'display' : 'none'
        })
    })
})















// Untuk ketika gambah di klik muncul gallery box
// PORTFOLIO
$('.overlay').click(function() {
    const name = '<video width="1080" height="90%" controls><source src="'+$(this).attr('alt')+'" type="video/mp4"></video>';

    const closeBtn = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <path d="M0.505,0.507c0.437-0.436,1.144-0.436,1.58,0l5.914,5.915l5.915-5.915c0.429-0.444,1.136-0.456,1.58-0.027c0.443,0.429,0.456,1.136,0.026,1.58c-0.009,0.009-0.019,0.018-0.026,0.027L9.579,8.001l5.915,5.915c0.429,0.444,0.416,1.151-0.027,1.58c-0.434,0.418-1.12,0.418-1.553,0L7.999,9.581l-5.914,5.915c-0.444,0.429-1.151,0.417-1.58-0.027c-0.418-0.434-0.418-1.12,0-1.553l5.914-5.915L0.505,2.087C0.069,1.65,0.069,0.943,0.505,0.507z"/></svg>'

    $('.frame').html(name + closeBtn);  
    $('.frame').css({
        'display' : 'flex'
    });

    $('.frame svg').click(function() {
        $('.frame').css({
            'display' : 'none'
        })
    })
});















// Untuk gambar ketika di klik muncul galeri box
// PORTFOLIO
$('.overlay-img').click(function() {
    const name = '<img src="'+$(this).siblings('img').attr('src')+'"/>';

    const closeBtn = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"> <path d="M0.505,0.507c0.437-0.436,1.144-0.436,1.58,0l5.914,5.915l5.915-5.915c0.429-0.444,1.136-0.456,1.58-0.027c0.443,0.429,0.456,1.136,0.026,1.58c-0.009,0.009-0.019,0.018-0.026,0.027L9.579,8.001l5.915,5.915c0.429,0.444,0.416,1.151-0.027,1.58c-0.434,0.418-1.12,0.418-1.553,0L7.999,9.581l-5.914,5.915c-0.444,0.429-1.151,0.417-1.58-0.027c-0.418-0.434-0.418-1.12,0-1.553l5.914-5.915L0.505,2.087C0.069,1.65,0.069,0.943,0.505,0.507z"/></svg>'

    $('.frame').html(name + closeBtn); 
    $('.frame').css({
        'display' : 'flex'
    });

    $('.frame svg').click(function() {
        $('.frame').css({
            'display' : 'none'
        })
    })
});



















// Untuk responsive
// ABOUT
$(window).scroll(function () {
    if (
      $(this).scrollTop() >
      $(".scrolling:nth-child(1)").offset().top - 200
    ) {
      $(".scrolling:nth-child(1)").addClass("scroll");
    } else {
      $(".scrolling:nth-child(1)").removeClass("scroll");
    };

    if ($(this).scrollTop() > $(".scrolling:nth-child(1)").offset().top + 100) {
        $('.additional-skill').addClass('scroll');
    } else {
        $(".additional-skill").removeClass("scroll");
    }

    if ($(this).scrollTop() > $(".additional-skill").offset().top + 200) {
        $('.contact-person').addClass('scroll');
    } else {
        $(".contact-person").removeClass("scroll");
    } 
});