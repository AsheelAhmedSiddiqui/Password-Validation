// select html tags for use in js
let passInp = document.getElementById("password");
let eyeIcon = document.getElementById("icon");
let list = document.getElementById("ul");
let li = list.querySelectorAll("li");

// For show password in text form
eyeIcon.addEventListener("click", () => {
	if (passInp.type === "password") {
		passInp.type = "text";
		eyeIcon.classList.add("fa-eye-slash");
		eyeIcon.classList.remove("fa-eye");
	} else {
		passInp.type = "password";
		eyeIcon.classList.add("fa-eye");
		eyeIcon.classList.remove("fa-eye-slash");
	}
});

// for password validation
passInp.addEventListener("change", () => {
	const lowerCase = new RegExp("(?=.*[a-z])");
	const UpperCase = new RegExp("(?=.*[A-Z])");
	const number = new RegExp("(?=.*[0-9])");
	const special = new RegExp("(?=.*[!@#$%^&*])");
	if (passInp.value.length >= 8) {
		li[0].innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> At least 8 characters`;
	} else {
		li[0].innerHTML = `<i class="fa-solid fa-xmark"></i>  At least 8 characters`;
	}
	if (UpperCase.test(passInp.value)) {
		li[1].innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> At least 1 uppercase letter (A...Z)`;
	} else {
		li[1].innerHTML = `<i class="fa-solid fa-xmark"></i>At least 1 uppercase letter (A...Z)`;
	}
	if (lowerCase.test(passInp.value)) {
		li[2].innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> At least 1 lowercase letter (a...z)`;
	} else {
		li[2].innerHTML = `<i class="fa-solid fa-xmark"></i> At least 1 lowercase letter (a...z)`;
	}
	if (special.test(passInp.value)) {
		li[3].innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> At least 1 special character letter`;
	} else {
		li[3].innerHTML = `<i class="fa-solid fa-xmark"></i> At least 1 special character letter`;
	}
	if (number.test(passInp.value)) {
		li[4].innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> At least 1 number (0...9)`;
	} else {
		li[4].innerHTML = `<i class="fa-solid fa-xmark"></i> At least 1 number (0...9)`;
	}
});

// Thank for watching 💖
