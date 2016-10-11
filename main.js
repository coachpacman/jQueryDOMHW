$(document).ready(function() {
	$(".header").on("click",function(e) {
		$(".copy").removeClass("show")
		$(this).find("+ .copy").addClass("show")
	})
})


// addClass
// removeClass