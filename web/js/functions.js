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

  $('#contactFrm').submit(function(ev) {
    // Prevent the form from actually submitting
    ev.preventDefault();

    // Send it to the server
    $.post({
        url: '/',
        dataType: 'json',
        data: $(this).serialize(),
        success: function(response) {
            if (response.success) {
                $('#thanks').fadeIn();
                $('#contactFrm').fadeOut();
            } else {
                // response.error will be an object containing any validation errors that occurred, indexed by field name
                // e.g. response.error.fromName => ['From Name is required']
                alert('An error occurred. Please try again.');
            }
        }
    });
});


(function ($) {

	// Init ScrollMagic
    var controller = new ScrollMagic.Controller();

	    // SCENE 5 - parallax effect on the intro slide
	    // move bcg container when intro gets out of the the view

	    var introTl = new TimelineMax();

	    introTl
	    	.to($('#hero-feature-scrolly .hero-copy'), 1, {autoAlpha: 0.2, top: '+=500', ease:Power1.easeOut})
	    	.to($('#hero-feature-scrolly .bcg'), 1, {autoAlpha: 0.2, y: '20%', ease:Power1.easeOut}, '-=1')
	    	.to($('#hero-feature-scrolly'), 1, {ease:Power1.easeNone}, '-=1');

		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#hero-feature-scrolly',
	        triggerHook: 0,
	        duration: "100%"
	    })
	    .setTween(introTl)
		  // .addIndicators()
	    .addTo(controller);

}(jQuery));
