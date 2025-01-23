// Testimonails slider JS

const testimonials = [
    { text: "Erin was a wonderful teacher. She was personable, kind, organized, and great with facilitating group discussion.", author: "Katy L." },
    { text: "John is an excellent instructor. His patience and knowledge make learning an enjoyable experience.", author: "Omkar K." },
    { text: "Sophia's guidance helped me gain confidence in my skills. Her classes are structured and engaging.", author: "Ishwar S." },
    { text: "The best learning experience I've had in years. Mark is simply outstanding!", author: "Abhay V." },
    { text: "Lisa's passion for teaching is evident in every session. She goes above and beyond to help students.", author: "David T." },
    { text: "A truly transformative learning journey! Highly recommend Jessica as a mentor.", author: "Rohan M." }
];

let currentIndex = 0; // Track current testimonial index

// Function to update the testimonial content
function updateTestimonial() {
    document.getElementById("testimonial-text").innerText = testimonials[currentIndex].text;
    document.getElementById("testimonial-author").innerText = testimonials[currentIndex].author;
}

// Function to show the next testimonial
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
}

// Function to show the previous testimonial
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
}

// Event listeners for manual navigation
document.getElementById("nextBtn").addEventListener("click", nextTestimonial);
document.getElementById("prevBtn").addEventListener("click", prevTestimonial);

// Auto-slide every 2 seconds
setInterval(nextTestimonial, 2000);

// Initialize with the first testimonial
updateTestimonial();






// Form Handling of Sign Up Form

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");

    // Show form
    openFormBtn.addEventListener("click", function () {
        signupForm.style.display = "flex";
    });

    // Hide form
    closeFormBtn.addEventListener("click", function () {
        signupForm.style.display = "none";
    });

    // Form validation
    const form = document.getElementById("registrationForm");

    form.addEventListener("input", function (event) {
        validateField(event.target.id);
    });

    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.getElementById(`error-${fieldId}`);
        let errorMessage = "";

        if (fieldId === "firstName" || fieldId === "lastName") {
            if (field.value.trim() === "") {
                errorMessage = "This field is required.";
            }
        }

        if (fieldId === "email") {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(field.value)) {
                errorMessage = "Enter a valid email.";
            }
        }

        if (fieldId === "password") {
            const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$&]).{8,}$/;
            if (!passwordPattern.test(field.value)) {
                errorMessage = "At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special (@#$&).";
            }
        }

        if (fieldId === "confirmPassword") {
            const password = document.getElementById("password").value;
            if (field.value !== password) {
                errorMessage = "Passwords do not match.";
            }
        }

        // Show or hide error message
        errorDiv.innerText = errorMessage;
    }
});



// Email field validation for newletter

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("newsletterEmail");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
        alert("Subscribed successfully!"); // Placeholder for actual subscription logic
    }
});