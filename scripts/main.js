document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('rating-value');
    const message = document.querySelector("#formmessage");

    // Update rating value display
    rating.addEventListener('input', function() {
        ratingValue.textContent = this.value;
    });

    // Email validation
    email.addEventListener('input', function() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (this.value && !emailPattern.test(this.value)) {
            this.setCustomValidity('Please enter a valid BYUI email address');
            this.style.backgroundColor = "var(--error-background)";
        } else {
            this.setCustomValidity('');
            this.style.backgroundColor = "var(--input-background)";
        }
    });

    // Password confirmation check
    confirmPassword.addEventListener("focusout", checkPasswordMatch);

    function checkPasswordMatch() {
        if (password.value !== confirmPassword.value) {
            message.textContent = "❗Passwords DO NOT MATCH!";
            message.style.visibility = "visible";
            password.value = ""; // Clear both passwords
            confirmPassword.value = "";
            password.style.backgroundColor = "var(--error-background)";
            confirmPassword.style.backgroundColor = "var(--error-background)";
            password.focus(); // Focus back to first password
            return false;
        } else {
            message.style.visibility = "hidden";
            password.style.backgroundColor = "var(--input-background)";
            confirmPassword.style.backgroundColor = "var(--input-background)";
            return true;
        }
    }

    // Form submission validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;
        if (!emailPattern.test(email.value)) {
            message.textContent = "❗Please enter a valid BYUI email address";
            message.style.visibility = "visible";
            email.focus();
            return false;
        }

        if (!checkPasswordMatch()) {
            return false;
        }

        // If validation passes, submit the form
        this.submit();
    });
});

const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		kp2.style.backgroundColor = "#fff0f3";
		kp2.value = "";
		kp2.focus();
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

