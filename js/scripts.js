$(document).ready(function(){

$("#submit-button").on("click" , function() {
	console.log("clicked");
	var comment = $(".message-box").val();
	console.log(comment);
	$("#visible-comment").html(comment);
	return false;
	})

	$(".message-box").css("background-color", "pink");

	$(".message-box").on("keyup", function() {
		console.log("keyup happened!");

		var nameName = 3;
		var name = "string";

		var charCount = $(".message-box").val().length;
		console.log(charCount);
		$("#charCount").html(charCount);

		if (charCount > 50) {
			$("#charCount").css("color", "red");
			$("#charCount").text("You exceeded the maximum character limit");
		} else {
			$("#charCount").css("color", "white");
		};
	})

	$("#email").on("keyup", function() {
		console.log("keyup with email!");
		var charCount = $("#email").val().length
		console.log(charCount);
		$("#charCount").html(charCount);
		if (charCount > 30) {
			$("#charCount").css("color", "red");
			$("#charCount").text("Invalid Email Address");
		} else {
			$("#charCount").css("color", "pink");
		};
	});

});


