$(document).ready(function(){
	$("#btnShamrock").click(function(){
		if ($( "#seeMoreShamrock" ).is(":visible")){
			$("#seeMoreShamrock").hide("slow");
			$('#btnShamrock').html("SEE MORE");
		}
		else{
			$("#seeMoreShamrock").show("slow");
			$('#btnShamrock').html("HIDE");
		}
	});
	$("#btnSurplus").click(function(){
		if ($( "#seeMoreSurplus" ).is(":visible")){
			$("#seeMoreSurplus").hide("slow");
			$("#btnSurplus").html("SEE MORE");
		}
		else{
			$("#seeMoreSurplus").show("slow");
			$('#btnSurplus').html("HIDE");
		}
	});
});


window.addEventListener("hashchange", function() { scrollBy(0, -50) })

