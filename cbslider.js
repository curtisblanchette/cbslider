(function($){
	$.fn.cbslider = function(options) {

		// establish our default settings
		var settings = $.extend({
			speed		: 0.5, 
			bgcolor     : '',
			autoplay    : 'true',
			interval    : 3,
			animation   : 'slide' 
		}, options);

		// get the slide elements
		var $slideWrapper = $('#slideWrapper'),
			$slideshow 	  = $('#slideshow'),
			$slideol 	  = $('#slideshow ol'),
			$slideli 	  = $('#slideshow ol li'),
			$article      = $('#slideshow ol li article'),
			$feature      = $('#slideshow ol li feature'),
			slidelength   = $slideshow.find('ol > li').length;

		var posX = $slideWrapper.width(); // default position
		$slideol.attr('id', 'hammer-el'); // give the ol the 'hammer-el' selector

		// Hammer Time
		var el = document.getElementById('hammer-el'),
		    wrapper = document.getElementById('slideshow'),
		    START_X = Math.round((wrapper.offsetWidth - el.offsetWidth) / 2);

		var mc = new Hammer.Manager(el);
			mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));
			mc.on("panstart panmove", onPan);
			mc.on("panend", panEnd);

		// init Slider 
		$feature.find('img').mousedown(function(){return false}); // stop image dragging
		$slideWrapper.css({background: settings.bgcolor}); // set the background color
		$slideol.css('width', slidelength * 100 + '%'); // set the container width to be  100% * slidelength
		$slideli.css('width', (100 / slidelength) + '%'); // set the slide width to be a division of 100 percent
		$slideol.css('left', -$slideli.width()); // set slide position to slide 2 (default position)
		$slideol.find('li:last').prependTo($slideol); // now that we are at slide 2, prepend the last slide to get us back to slide 1
		$slideol.css('left', -posX); // get back to slide 2 (aka slide 1)


		// Resize Slideshow Resolution
		$(window).on('resize', function(){
			fixWidth();
		});

		// Fix width when mobile button is toggled
		$('#mobile-btn').click(function(e) {
			e.preventDefault();
			var wait = setTimeout(fixWidth(), 350);
		});
		// Autoplay
		var cycle;
		if(options.autoplay) {
			// init auto play
			cycle = setInterval(function() {
				animateNext();
			}, options.interval);
		}
		// Disable Autoplay on mouseover
		$slideWrapper.on('mouseover', function(){
			clearInterval(cycle);
		});
		$slideWrapper.on('mouseout', function(){
			if(options.autoplay){
				cycle = setInterval(function() {
					animateNext();
				}, options.interval);
			}
		});
		// Next/Previous Handler
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
		// Animate To Next Slide
		function animateNext() {
			$slideol.addClass('slide-ani');
			$slideol.css({left: -posX*2});
			var wait = setTimeout(function(){
				$slideol.removeClass('slide-ani');
				$slideol.find('li:first').appendTo($slideol);
				$slideol.css('left', -posX);
			}, 250);
		}
		// Animate To Previous Slide
		function animatePrev() {
			$slideol.addClass('slide-ani');
			$slideol.css({left: 0});
			var wait = setTimeout(function(){
				$slideol.removeClass('slide-ani');
				$slideol.find('li:last').prependTo($slideol);
				$slideol.css('left', -posX);
			}, 250);
		}
		// Fix Resize Issues
		function fixWidth(){
			posX = $slideWrapper.width(); // store the new window size
			START_X = Math.round((wrapper.offsetWidth - el.offsetWidth) / 2); // reset deltaX
			$slideol.css({'left': -posX }); // stay at default position
		}	
		// Pan Handlers
		function onPan(ev) {
		   	var newLeft = START_X + ev.deltaX;
		    $(el).css({ left: newLeft + 'px'});
		}
		function panEnd(ev) {
			console.log(ev.deltaX);
			if(ev.deltaX >= 75) {
				animatePrev();
			}else if(ev.deltaX > 0 && ev.deltaX < 75) {
				$slideol.addClass('slide-ani');
				$(el).css({left: -posX});
				var wait = setTimeout(function() {
					$slideol.removeClass('slide-ani');
				}, 350);
			}
			if(ev.deltaX <= -75) {
				animateNext();
			}else if(ev.deltaX < 0 && ev.deltaX > -75) {
				$slideol.addClass('slide-ani');
				$(el).css({left: -posX});
				var wait = setTimeout(function() {
					$slideol.removeClass('slide-ani');
				}, 350);
			}
		}
	}//end plugin fn
}(jQuery));