cbslider
========

Fully-Responsive, Looping Slider

Requires jQuery and TweenMax

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
Include this Less CSS to style the Slider

```less 
	#slideWrapper {
	position:relative;
	margin:0 auto;
	max-width:1440px;
	

	#slideshow {
		margin:0;
		min-width:100%;
		max-height:400px;

		
		position:relative;
		z-index:99999;
		overflow:hidden;

		ol {
			margin:0;
			min-width:300%;
			height:100%;
			position:relative;

			li {
				margin:0;
				float:left;
				width:33%;
				max-height:400px;
				display:flex;

				feature {
					height:100%;
					width:50%;
					text-align:center;

					img {
						width: 50%;
						margin:0 auto;
						margin-top:20px;
						transition:.5s;
					}
				}
				article {
					width:50%;

					h4, p {
						margin-left:20px;
						transition:.5s;
					}

				}
			}
		}
	}
	#prevSlide, #nextSlide	{
		position:absolute;
		top:50%;
		transform:translateY(-50%);
		z-index:99999;
		margin:0;
		color:#666;
	}

	#prevSlide { left:0; }
	#nextSlide { right:0; }
	
}

```