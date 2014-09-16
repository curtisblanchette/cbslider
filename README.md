cbslider.js
========
<h5>jQuery Responsive, Touch-Ready, Looping SlideShow Plugin</h5>


Requires <strong>jQuery</strong> and <strong>Hammer JS</strong>

<a href="http://webdesignstudio.ca/github/cbslider/example.html">Check out the demo</a>

```html
<script src="jquery-1.11.1.js"></script>
<!-- Hammer JS -->
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
<!-- link cbslider css -->
<link href="css/cbslider.css" rel="stylesheet">
<!-- Include cbslider.js -->
<script src="cbslider.js"></script>
```

Initalize cbslider on the slideshow

```javascript
$(document).ready(function(){
	
    $('#slideshow').cbslider();	

});

```
Basic HTML Markup (minimum of 3 slides)

```html
<div id="slideWrapper">
    <section id="slideshow">
        <ol>
            <li>
                <feature>
                    <img src="http://lorempixel.com/400/400/abstract">
                </feature>
                <article>
                    <h2>Title</h2>
                    <p>Some text</p>
                </article>
            </li>
            <li>
                <feature>
                    <img src="http://lorempixel.com/400/400/abstract">
                </feature>
                <article>
                    <h2>Title</h2>
                    <p>Some text</p>
                </article>
            </li>
            <li>
                <feature>
                    <img src="http://lorempixel.com/400/400/abstract">
                </feature>
                <article>
                    <h2>Title</h2>
                    <p>Some text</p>
                </article>
            </li>
        </ol>
    </section>
    <a id="nextSlide">Next</a>
    <a id="prevSlide">Prev</a>
</div>
```


<h1>API Options</h1>

```javascript 
$(document).ready(function(){

	$(document).cbslider({
		speed       : 0.5,
		bgcolor     : 'lightblue',
		animation   : 'slide',
        easing      : 'Circ.easeInOut' // Use any of the TweenMax Easing Properties,
        autoplay    : true,
        interval    : 5000
	});

});
```
