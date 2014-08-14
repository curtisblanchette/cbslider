cbslider
========

is a fully-responsive, customizable, looping slideshow

Requires <strong>jQuery</strong> and <strong>TweenMax</strong>

```html
<script src="jquery-1.11.1.js"></script>
<!--CDN link for the latest TweenMax-->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"/></script>
<!-- link to cbslider css -->
<link href="css/cbslider.css" rel="stylesheet">
<!-- Include cbslider.js -->
<script src="cbslider.js"></script>
```

Initalize cbslider on the document 

```javascript
$(document).ready(function(){

	$(document).cbslider();	

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
                    <h4>Title</h4>
                    <p>Some text</p>
                </article>
            </li>
            <li>
                <feature>
                    <img src="http://lorempixel.com/400/400/abstract">
                </feature>
                <article>
                    <h4>Title</h4>
                    <p>Some text</p>
                </article>
            </li>
            <li>
                <feature>
                    <img src="http://lorempixel.com/400/400/abstract">
                </feature>
                <article>
                    <h4>Title</h4>
                    <p>Some text</p>
                </article>
            </li>
        </ol>
    </section>
    <a id="nextSlide">Next</a>
    <a id="prevSlide">Prev</a>
</div>
```


<h1>Options</h1>
<p>cbslider comes with userfriendly API</p>
```javascript 
$(document).ready(function(){

	$(document).cbslider({
		speed: 2,
		bgcolor: 'lightblue',
		aniamtion: 'slide'
	});

});
```
