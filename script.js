// Greeting based on time of day
function greetUser() {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    if (hour < 12) {
        greeting.innerText = "Good Morning!";
    } else if (hour < 18) {
        greeting.innerText = "Good Afternoon!";
    } else {
        greeting.innerText = "Good Evening!";
    }
}

// Toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Validate Contact Form
function validateContactForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.').focus;
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert('Please enter a 10-digit phone number.');
        return false;
    }
    alert('Form submitted successfully!');
    return true;
}

// Toggle project details
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        button.innerText = "Hide Details";
    } else {
        details.style.display = "none";
        button.innerText = "Show Details";
    }
}
