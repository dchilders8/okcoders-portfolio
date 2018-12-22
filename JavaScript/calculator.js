// $(document).ready(() => {
// 	$('.button.add').click(() => {						// addition
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) + parseFloat(num2);
// 		console.log('total: %o', total);
// 		$('.cal-value').append(total);
// 	});

// 	$('.button.subtract').click(() => {					// subtraction
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) - parseFloat(num2);
// 		console.log('total: %o', total);
// 		$('.cal-value').append(total);		
// 	});

// 	$('.button.multiply').click(() => { 					// multiplication
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) * parseFloat(num2);
// 		console.log('total: %o', total);
// 		$('.cal-value').append(total);
// 	});

// 	$('.button.divide').click(() => {					 // division
// 		var num1 = $('.input.1').val();
// 		var num2 = $('.input.2').val();
// 		var total = parseFloat(num1) / parseFloat(num2);
// 		console.log('total: %o', total);
// 		$('.cal-value').append(total);
// 	});
// });

$(document).ready(function () {

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

});


$(".numberButton").click(function () {
	$(".outputBox").append($(this).html());
});