$(document).ready(function(){
    $(".nav-open").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.nav-close').on('click', function(){
    $(".overlay").fadeToggle(200);
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});


$(document).ready(function () {
    $('.thumb-tog-up').click(function (e) {
        e.preventDefault();
        $('.lnk-up').attr('src', function (i, oldSrc) {
            return oldSrc == '../imgz/icon-thumb-up-off.png' ? '../imgz/icon-thumb-up-off.png' : '../imgz/icon-thumb-up-on.png';
        });
    });
    $('.thumb-tog-down').click(function (e) {
        e.preventDefault();
        $('.lnk-down').attr('src', function (i, oldSrc) {
            return oldSrc == '../imgz/icon-thumb-down-off.png' ? '../imgz/icon-thumb-down-off.png' : '../imgz/icon-thumb-down-on.png';
        });
    });
});


  $(function () { // wait for document ready
    // init controller
  	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0}});

    // var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  	// build scenes
  	new ScrollMagic.Scene({triggerElement: "#sec1"})
            .setPin("#hero-feature")
            // .setTween(".parallax", {y: "20%", ease: Linear.easeNone})

  					// .setClassToggle("#hero-feature", "scroll-low") // add class toggle
  					.addIndicators() // add indicators (requires plugin)
  					.addTo(controller);
  });
