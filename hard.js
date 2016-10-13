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

	var photos = function() {
		carouselImages.forEach(function(item,i) {
			htmlString += `
			<div id="image${i}" class="slide">
				<img src="${item.image_url}"/>
				<div class="label">
					<div>"${item.title}" by <u>${item.photographer_id}</u></div>
				</div>
			</div>
			`
		})
		$("#gallery").html(htmlString)
		$(".slide:first-child").addClass("current")
	}

	photos()

	$(".rightArrow").on("click", function(e) {
		var currentNum = $(".current").attr("id")[5]
		var nextNum = Number(currentNum) + 1
		if (nextNum === carouselImages.length) {
			nextNum = 0
		}
		$(`#image${currentNum}`).removeClass("current")
		$(`#image${nextNum}`).addClass("current")	
	})

	$(".leftArrow").on("click", function(e) {
		var currentNum = $(".current").attr("id")[5]
		var nextNum = Number(currentNum) - 1
		if (nextNum === -1) {
			nextNum = carouselImages.length - 1
		}
		$(`#image${currentNum}`).removeClass("current")
		$(`#image${nextNum}`).addClass("current")	
	})

})







//YOUR CODE


// $(document).ready(function() {
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

// 	var pictures = function() {
// 		carouselImages.forEach(function(item,i) {
// 			htmlString += `
// 				<div id="image${i}" class="slideshow">
// 					<img class="absolute" src="${item.image_url}"/>
// 					<div class="label">"${item.title}" by <u>${item.photographer_id}</u>
// 					</div>
// 				</div>
// 			`
// 		})
// 		$("#gallery").html(htmlString)
// 		$(".slideshow:first-child").addClass("current")
// 	}

// 	pictures()

// 	$(".rightArrow").on("click",function(e) {
// 		var current = $(".current").attr("id")[5]
// 		var nextIndex = Number(current) + 1;

// 		if (nextIndex === carouselImages.length) {
// 			nextIndex = 0
// 		}

// 		$(`#image${current}`).removeClass("current")
// 		$(`#image${nextIndex}`).addClass("current")
// 	})
// })

/////////

//MIKE"S CODE


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










