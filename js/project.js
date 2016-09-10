$(document).ready(function() {

	console.log("here")

	$(".input").keyup(function(evt){
		var code = (evt.keyCode || evt.which);
		var colorInput = $(".input").val();
			console.log(colorInput);

		if(code == 27 || code == 37 || code == 38 || code == 39 || code == 40) {
        return;
    	}

		else if (colorInput.length == 6) {
			var colorName = ntc.name(colorInput);
			console.log(colorName[0]);
			$(".SpecialThanks").append("<h1 class=\"name\">"+colorName[1]+"</h1>");
			$(".fade").css("animation").detach;
			$("body").css({"background-color": colorName[0]});
		}

		else if (colorInput.length != 6) {
			$(".name").remove();
		};
	});
});