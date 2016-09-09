$(document).ready(function() {

	console.log("here")

	$(".input").keypress(function(evt){
		var colorName = ntc.name($(".input").val())
		
		console.log("there", colorName)

		$(".SpecialThanks").append("<h1>"+colorName[1]+"</h1>");
	});

});