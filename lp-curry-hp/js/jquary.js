jQuery(function(){
    let appear = false;
    let pagetop = $('#page_top');
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            if(appear == false){
                appear = true;
                pagetop.stop().animate({
                    'bottom':'0px'
                },300);
            }
        } else {
            if(appear){
                appear = false;
                pagetop.stop().animate({
                    'bottom':'-150px'
                },300);
            }
        }
    });
    pagetop.click(function(){
        $('body,html').animate({ scrollTop:0 },500);
        return false;
    });
});

$(function(){
    　$(window).scroll(function (){
        $('.scrollbox').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});
    });

