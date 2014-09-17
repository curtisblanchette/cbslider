cbslider.js
========
<h5>jQuery Responsive, Touch-Ready, Looping SlideShow Plugin</h5>


Requires <strong>jQuery</strong> and <strong>Hammer JS</strong>

<a href="http://webdesignstudio.ca/github/cbslider/example.html">Check out the demo</a>

```html
<!-- jQuery 1.11.1 -->
<script src="dist/jquery-1.11.1.js"></script>
<!-- Hammer CDN -->
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
<!--link to cbslider css -->
<link href="cbslider.css" rel="stylesheet">
<!-- Require cbslider.js -->
<script src="cbslider.js"></script>
```

<h3>Basic HTML Markup (minimum of 3 slides)</h3>

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

<h3>Initialize cbslider on the slideshow</h3>

```javascript
   $('#slideshow').cbslider();	
```
<h3>API Options</h3>

```javascript 
	$('#slideshow').cbslider({
		speed       : 0.5,
	    autoplay    : true,
	    interval    : 5000
	});
```
<h4>Documentation</h4>
<p>If you run into any issues with the slide positions on a window resize, you can invoke ```javascript fixWidth(); ``` which is returned by the plugin as an object.</p>
