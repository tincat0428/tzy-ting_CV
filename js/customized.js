$(document).ready(function(){
    // header color change
    $(window).on("scroll",function(){
        var scrollDistance = $(window).scrollTop();
        var $header = $(".js-header");
        if(scrollDistance > 80){
            $header.addClass("header-color");
        }
        else{
            $header.removeClass("header-color");
        }
    })

    // wow-plugging
   
        new WOW().init();
   

    // stellar plugging
   
        $(window).stellar();
    
})
