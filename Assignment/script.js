document.addEventListener('DOMContentLoaded', () => {
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
    });
});

function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    let valid = true;

    if (!name.value.trim()) {
        document.getElementById('name-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('name-error').classList.add('hidden');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById('email-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('email-error').classList.add('hidden');
    }

    if (valid) {
        // Submit the form
        console.log('Form submitted');
    }
}
