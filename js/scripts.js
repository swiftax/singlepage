$(document).ready(function(){

$("#submit-button").on("click" , function() {
	console.log("clicked");
	var comment = $(".message-box").val();
	console.log(comment);
	$("#visible-comment").html(comment);
	return false;
	})
	$(".message-box").css("background-color", "pink");
});


