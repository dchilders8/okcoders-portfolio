$(document).ready(() => {
	console.log('Document is ready');

	var user1 = { // System User
		email: 'dchilders0806@gmail.com',
		password: 'danny',
		name: 'Danny Childers'
	};


	$('.button.login').click(() => { // Check email and password
		var emailAddress = $('.input.email').val();
		var password = $('.input.password').val();
		login(emailAddress, password);
	});

	$('input').keydown(() => {
		console.log('input key down');
		if ($('.input.email').val().length > 0 && $('.input.password').val().length > 6) {
			// $('.button.login').removeAttr('disabled');
			$('.button.login').attr('disabled', true);
		};
	});

	function login(email, password) {
		if (email === user1.email && password === user1.password) {
			$('.input.email').hide(500);
			$('.input.password').hide(500);
			$('.button.login').hide(500);
			$('body').append(`<center><p>Welcome back ${user1.name}`).css('color', 'green');
			location.href = "../HTML/webpage.html";  // this is how you redirect to another page.

		} else {
			$('.input.email').hide(500);
			$('.input.password').hide(500);
			$('.button.login').hide(500);
			// $('.access-denied').show(1000);             one way to let them know
			$('body').append('<center><p>Access Denied</p></center>').css('color', 'red'); //  preferred way to let them know
		}
	}

});