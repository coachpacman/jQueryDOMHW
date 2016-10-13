$(document).ready(function() {
	var carouselImages = [
	  {
	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
	    title: 'Sunset in the Cascades',
	    photographer_id: 'smpoutdoors'
	  },
	  {
	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
	    title: 'Seljalandsfoss, Iceland',
	    photographer_id: 'Robin Kamp'
	  },
	  {
	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
	    title: 'Gods Rays',
	    photographer_id: 'illuminati'
	  }
	];

	var htmlString = ""

	var pictures = function() {
		carouselImages.forEach(function(item,i) {
			htmlString += `
				<div id="image${i}" class="slideshow">
					<img class="absolute" src="${item.image_url}"/>
					<div class="label">"${item.title}" by <u>${item.photographer_id}</u>
					</div>
				</div>
			`
		})
		$("#gallery").html(htmlString)
		$(".slideshow:first-child").addClass("current")
	}

	pictures()

	$(".rightArrow").on("click",function(e) {
		var current = $(".current").attr("id")[5]
		var nextIndex = Number(current) + 1;

		if (nextIndex === carouselImages.length) {
			nextIndex = 0
		}

		$(`#image${current}`).removeClass("current")
		$(`#image${nextIndex}`).addClass("current")
	})
})

// $(document).ready(function(){
// 	var carouselImages = [
// 	  {
// 	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
// 	    title: 'Sunset in the Cascades',
// 	    photographer_id: 'smpoutdoors'
// 	  },
// 	  {
// 	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
// 	    title: 'Seljalandsfoss, Iceland',
// 	    photographer_id: 'Robin Kamp'
// 	  },
// 	  {
// 	    image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
// 	    title: 'Gods Rays',
// 	    photographer_id: 'illuminati'
// 	  }
// 	];

// 	var htmlString = ""

// 	var pictures = function(){
// 		carouselImages.forEach(function(item,i) {
// 		htmlString += `
// 			<div id="image${i}" class="slideshow">
// 				<img class="absolute" src="${item.image_url}"/>
// 				<div class="label">"${item.title}" by <u>${item.photographer_id}</u>
// 				</div>
// 			</div>
// 		`
// 		})
// 		$("#gallery").html(htmlString)
// 		$(".slideshow:first-child").addClass("current")
// 	} 

// 	pictures()

// 	$(".rightArrow").on("click",function(e) {
// 		// $(".slideShow").sibling().addClass("current")
// 		var current = $(".current").attr("id")[5]
// 		var nextIndex = Number(current) + 1;
		
// 		if (nextIndex === carouselImages.length) {
// 			nextIndex = 0
// 		}
		
// 		$(`#image${current}`).removeClass("current")
// 		$(`#image${nextIndex}`).addClass('current')
// 	})

// })










