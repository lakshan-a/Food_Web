(function($) {
    "use strict";
     $(document).on('ready', function() {

		// Magnific Popup JS  //
		$('.work-popup').magnificPopup({
			type: 'image',
			gallery:{
			enabled:true
			}
		});

		// Video Popup  //
		$('.video-popup').magnificPopup({
			type: 'video',
		});
	});
})(jQuery);






