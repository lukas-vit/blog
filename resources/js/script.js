$(document).ready(function(){
    /* ----------------------------------------------  */
    /* STICKY NAV */
    /* ---------------------------------------------- */
    $(window).scroll(function(){
        if(this.scrollY > 50)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");
    });


    /* ----------------------------------------------  */
    /* MENU TOGGLER */
    /* ---------------------------------------------- */
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

        /* ----------------------------------------------  */
    /* TYPED TEXT */
    /* ---------------------------------------------- */
    $(".section-home h2 span").typed({
        strings: ["UNIKÁTNÍM DESIGNEM", "PROPRACOVANOU STRUKTUROU","LÁSKOU"],
        loop: true,
        startDelay: 1e3,
        backDelay: 3e3
        });

    /* ----------------------------------------------  */
    /* SCROLL TO TOP BUTTON */
    /* ---------------------------------------------- */
    $(window).scroll(function(){
       if($(this).scrollTop()>100){
        $('#topButton').fadeIn();
       } 
       else{
           $('#topButton').fadeOut();
       }
    });

    $("#topButton").click(function(){
        $('html,body').animate({scrollTop:0},200)
    });

    /* ----------------------------------------------  */
    /* HIDE MENU ON CLICK */
    /* ---------------------------------------------- */


});
