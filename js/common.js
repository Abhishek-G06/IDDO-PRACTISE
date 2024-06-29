new PureCounter({
    selector: ".count",
});

$(function () {
    $("#portfolio .btn").click(function () {
        if ($(this).text() == "All") {
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".project").fadeIn();
        }
        else if ($(this).text() == "Website") {
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".project").fadeOut(0);
            $(".website").fadeIn();
        }
        else if ($(this).text() == "Branding") {
            $("#portfolio .btn").removeClass("active");
            $(this).addClass("active");
            $(".project").fadeOut(0);
            $(".branding").fadeIn();
        }
    });



    $(".accordion a").click(function (e) {
        e.preventDefault();

        if ($(this).hasClass("active") == false) {
            $(".accordion a").removeClass("active");
            $(this).addClass("active");
            $(".accordion p").slideUp();
            $(this).next("p").slideDown();
        }
        // else{            
        //     $(".accordion a").removeClass("active");
        //     $(".accordion p").slideUp();
        // }
    });



    $(".signup").click(function () {
        const form = $(".formdata").html();
        console.log(form);
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append(form);
        $(".popup input:eq(0)").focus();
        $(".close").click(function () {
            $(".popup, .overlay").remove();
        });
        $(window).keyup(function (e) {
            if (e.which == 27) {
                $(".popup, .overlay").remove();
            }
        });
    });




    $(".banner button, .banner a").click(function (e) {
        e.preventDefault();
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);

        $(".popup").append(`<button class="close"><span class="fa fa-times"></span></button>`);
        $(".close").click(function () {
            $(".popup, .overlay").remove();
        });

        $(".popup").append(`<iframe></iframe>`);            //remove the height of the video to 0 and make it hidden
        $(".popup iframe").css({ 'display': 'inline' });
        // $(".popup iframe").animate({height:'0'});        use when ifrmae source is given.    && give the hieght of the video in iframe.

        $(window).keyup(function (e) {
            if (e.which == 27) {
                $(".popup, .overlay").remove();
            }
        });
    });



    $("footer button").click(function () {
        $("html,body").animate({ scrollTop: 0 })
    });



    $(".reviews").bxSlider({
        controls: false,
        auto: true,
        pause: 5000
    });


    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle()
    });

    if( screen.width<767 ){
        $(".collapse a").click(function(){ 
            $(".collapse").slideUp();
            $(".menu").removeClass("active");
        })
    }


});