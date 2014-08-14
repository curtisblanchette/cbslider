(function($){
	$.fn.cbslider = function(options) {

		//establish default settings
		var settings = $.extend({
			speed		: 1, //
			bgcolor     : '',
			animation   : 'slide'  
		}, options);

		var $slideWrapper = $('#slideWrapper'),
			$slideshow 	  = $('#slideshow'),
			$slideol 	  = $('#slideshow ol'),
			$slideli 	  = $('#slideshow ol li'),
			slidelength   = $slideshow.find('ol > li').length;


			$slideWrapper.css({background: settings.bgcolor});

		    // Determines how many slides are in the set and adjusts li widths accordingly
			// set the container width to be the # of slides * 100
			$slideol.css('width', slidelength * 100 + '%'); 
			// set the slide width to be a division of 100 percent
			$slideli.css('width', (100 / slidelength) + '%');

			// Fix the Resize Slideshow Issue
			///////////////////////////////////////
			var newW = $slideWrapper.width();

			$(window).on('resize', function(){
				//store the new window size, and apply it to the slideol * the current slide
				newW = $slideWrapper.width();
				$slideol.css({'left': 0 });
			});

			function animateNext() {
				var tl = new TimelineMax();
					tl.to($slideol, options.speed, {left: -newW, onComplete:cloneFirst });
			}
			function cloneFirst() {
				$slideol.find('li:first').clone().appendTo($slideol);
				$slideol.find('li:first').remove();
				$slideol.css('left', 0);
			}

			function animatePrev() {
				$slideol.find('li:last').clone().prependTo($slideol);
				$slideol.find('li:last').remove();
				$slideol.css('left', -newW);


				var tl = new TimelineMax();
					tl.to($slideol, options.speed, {left: 0});

			}
			

		$slideWrapper.on('click', 'a', function(e){
			var $this  = e.target;

			switch ($this.id) {
				case 'prevSlide':
					animatePrev();
				break;

				case 'nextSlide':
					animateNext();
				break;
			}
		});
	};//end plugin fn
}(jQuery));