const domElements = {
	inputForLastName: document.getElementById('last-name'),
	inputForPassword: document.getElementById('password'),
	inputForEmail: document.getElementById('email'),
	inputForName: document.getElementById('name'),

	lastNameErrorIcon: document.querySelector('.error-last-name'),
    passwordErrorIcon: document.querySelector('.error-password'),
	emailErrorIcon: document.querySelector('.error-email'),
	nameErrorIcon: document.querySelector('.error-name'),
}

const handleError = (element, errorMessage, isValid) => {
	const errorIcon = element.previousElementSibling.querySelector('.error-icon')
	element.textContent = errorMessage
	element.style.display = isValid ? 'none' : 'block'
	errorIcon.style.display = isValid ? 'none' : 'block'
}

const validateField = (value, errorElement, errorMessage, validationFunc) => {
	const isValid = validationFunc(value)
	handleError(errorElement, errorMessage, isValid)

	return isValid
}

function validateForm () {
	const {
		inputForLastName,
		inputForPassword,
		inputForEmail,
		inputForName
	} = domElements

	const {
		lastNameErrorIcon,
		passwordErrorIcon,
		emailErrorIcon,
		nameErrorIcon
	} = domElements

	let isFormValid = true

	// the &= operator verifies that all the fields are valid
	isFormValid &= validateField(
		inputForName.value,
        nameErrorIcon,
        'Name cannot be empty.',
        (value) => value.trim() !== ''
	)
	isFormValid &= validateField(
		inputForLastName.value,
		lastNameErrorIcon,
		'Last Name cannot be empty.',
        (value) => value.trim() !== ''
	)
	isFormValid &= validateField(
		inputForEmail.value,
		emailErrorIcon,
        'Invalid email address.',
        (value) => /\S+@\S+\.\S+/.test(value)
	)
	isFormValid &= validateField(
		inputForPassword.value,
		passwordErrorIcon,
        'Password cannot be empty.',
        (value) => value.trim() !== ''
	)
}
