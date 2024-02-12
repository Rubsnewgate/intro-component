function validateForm() {
	let name = document.getElementById('name').value
	let lastName = document.getElementById('last-name').value
	let email = document.getElementById('email').value
	let password = document.getElementById('password').value
	let valid = true

	// Name Validation
	if (name === '') {
		document.querySelector('.error-name').style.display = 'block'
		document.querySelector('.error-name').previousElementSibling.querySelector('.error-icon').style.display = 'block'
		valid = false
	}
	else {
		document.querySelector('.error-name').style.display = 'none'
		document.querySelector('.error-name').previousElementSibling.querySelector('.error-icon').style.display = 'none'
	}

	// Last Name Validation
	if (lastName === '') {
		document.querySelector('.error-last-name').style.display = 'block'
		document.querySelector('.error-last-name').previousElementSibling.querySelector('.error-icon').style.display = 'block'
		valid = false
	}
	else {
		document.querySelector('.error-last-name').style.display = 'none'
		document.querySelector('.error-last-name').previousElementSibling.querySelector('.error-icon').style.display = 'none'
	}

	// Email Validation
	if (email === '' || !validateEmail(email)) {
		document.querySelector('.error-email').style.display = 'block'
		document.querySelector('.error-email').previousElementSibling.querySelector('.error-icon').style.display = 'block'
		valid = false
	}
	else {
		document.querySelector('.error-email').style.display = 'none'
		document.querySelector('.error-email').previousElementSibling.querySelector('.error-icon').style.display = 'none'
	}

	// Password Validation
	if (password === '') {
		document.querySelector('.error-password').style.display = 'block'
		document.querySelector('.error-password').previousElementSibling.querySelector('.error-icon').style.display = 'block'
		valid = false
	}
	else {
		document.querySelector('.error-password').style.display = 'none'
		document.querySelector('.error-password').previousElementSibling.querySelector('.error-icon').style.display = 'none'
	}

	return valid
}

function validateEmail(email) {
	let re = /\S+@\S+\.\S+/

	return re.test(email)
}
