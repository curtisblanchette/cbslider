cbslider
========

Fully-Responsive, Looping Slider

Initalize cbslider on the document 

```javascript
$(document).cbslider();
```
Basic HTML Markup 

```html
<div id="slideWrapper">
	<section id="slideshow">
		<ol>
			<li>
				<feature>
					<img src="images/featureimage.jpg">
				</feature>
				<article>
					<h4>Title</h4>
					<p>Some text</p>
				</article>
			</li>
			<li>
				<feature>
					<img src="images/featureimage2.png">
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
Less

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