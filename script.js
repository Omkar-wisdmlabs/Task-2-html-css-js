
const testimonials = [
    {
        text: "This product has completely transformed how we do business. The efficiency gains are remarkable!",
        author: "John Smith, CEO"
    },
    {
        text: "Outstanding service and incredible results. I couldn't be happier with the outcome.",
        author: "Sarah Johnson, Marketing Director"
    },
    {
        text: "The best solution we've found in the market. The team's support is exceptional.",
        author: "Michael Brown, Project Manager"
    }
];

// Get DOM elements
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const testimonialText = document.getElementById('testimonial-text');
const testimonialAuthor = document.getElementById('testimonial-author');
const testimonialTrack = document.querySelector('.testimonial-track');

let currentIndex = 0;
let isAnimating = false;

// Initialize first testimonial
updateTestimonial(currentIndex);

function updateTestimonial(index) {
    testimonialText.textContent = testimonials[index].text;
    testimonialAuthor.textContent = testimonials[index].author;
}

function slideTestimonial(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const currentSlide = document.querySelector('.testimonial-slide');
    const newSlide = currentSlide.cloneNode(true);
    
    // Position new slide
    if (direction === 'next') {
        testimonialTrack.appendChild(newSlide);
        newSlide.style.transform = 'translateX(100%)';
    } else {
        testimonialTrack.insertBefore(newSlide, currentSlide);
        newSlide.style.transform = 'translateX(-100%)';
        testimonialTrack.style.transform = 'translateX(100%)';
    }

    // Update content of new slide
    const newIndex = direction === 'next' 
        ? (currentIndex + 1) % testimonials.length 
        : (currentIndex - 1 + testimonials.length) % testimonials.length;
    
    const newSlideText = newSlide.querySelector('#testimonial-text');
    const newSlideAuthor = newSlide.querySelector('#testimonial-author');
    newSlideText.textContent = testimonials[newIndex].text;
    newSlideAuthor.textContent = testimonials[newIndex].author;

    // Trigger animation
    requestAnimationFrame(() => {
        testimonialTrack.style.transition = 'transform 0.5s ease-in-out';
        testimonialTrack.style.transform = direction === 'next' 
            ? 'translateX(-100%)' 
            : 'translateX(0%)';
        
        newSlide.style.transition = 'transform 0.5s ease-in-out';
        newSlide.style.transform = 'translateX(0)';
    });

    // Cleanup after animation
    setTimeout(() => {
        testimonialTrack.style.transition = 'none';
        testimonialTrack.style.transform = 'translateX(0)';
        currentSlide.remove();
        isAnimating = false;
        currentIndex = newIndex;
    }, 500);
}

// Event listeners
nextBtn.addEventListener('click', () => slideTestimonial('next'));
prevBtn.addEventListener('click', () => slideTestimonial('prev'));

// Optional: Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') slideTestimonial('prev');
    if (e.key === 'ArrowRight') slideTestimonial('next');
});

let autoPlayInterval;
const AUTO_PLAY_INTERVAL = 3000; // 3 seconds

function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        slideTestimonial('next');
    }, AUTO_PLAY_INTERVAL);
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play
startAutoPlay();

// Pause auto-play on hover
document.querySelector('.testimonial-container').addEventListener('mouseenter', stopAutoPlay);
document.querySelector('.testimonial-container').addEventListener('mouseleave', startAutoPlay);







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
            }// trim removes whitespace from both ends of a string
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
        console.log("Subscribed email:", emailInput.value);
    }
});