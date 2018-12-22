$(document).ready(function () {

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

});



$(".numberButton").click(function () {
		$(".outputBox").append($(this).html());
	}

);