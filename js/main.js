// for main menu mobile
$(function () {
    $('.hidden-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('hidden-menu-active');
        }
    });
});

// for main menu desctop
$(function () {
    $('.main-menu .list-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('main-menu-active');
        }
    });
});

// for services-more page services item
$(function () {
    $('.services-section .services-list li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).parents("li").addClass('services-item-active');
        }
    });
});


// for footer menu
$(function () {
    $('.footer-main-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('footer-menu-active');
        }
    });
});

// for services menu
$(function () {
    $('.footer-services-menu li a').each(function () {
        var location = window.location.pathname;
        var link = this.pathname;
        var result = location.match(link);
        if(result && link.length > 0) {
            $(this).addClass('services-item-active');
        }
    });
});

// FOR SLIDER MORE 
$(document).ready(function() {
    $('.center').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
        }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
    }
}
],
nextArrow: '<img class="prev-btn" src="images/more-prev.png" alt="more prev">',
prevArrow: '<img class="next-btn" src="images/more-next.png" alt="more next">',
});
});


// TEXT SLIDER ON MAIN PAGE
$(document).ready(function() {
    $('.fade').slick({
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 500,
      fade: true,
      centerPadding: '10px',
      cssEase: 'linear',
      nextArrow: '<div class="next-btn"></div>',
      prevArrow: '<div class="prev-btn"></div>'
  });
});

// for go to block for id
$(document).ready(function(){
    $(function(){
        $('.quote-btn').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                && location.hostname == this.hostname) {
                var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
        var targetOffset = $target.offset().top - ($("#quote-block").outerHeight(true)- 590); //#main-header - заменить на ваш элемент
        $('html,body').animate({scrollTop: targetOffset}, 1000);
        return false;
    }
}
});
    });
});
