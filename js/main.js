// ----------- Scroll Function -----------
function scrollToForm() {
    const formSection = document.querySelector('.book-form-container');
    formSection.scrollIntoView({ behavior: "smooth" });
}

// ----------- Book Appointment Button ----------- 
const bookBtn = document.getElementById('bookAppointmentButton');
if (bookBtn) {
    bookBtn.addEventListener('click', () => {
        console.log("Book Appointment button clicked");
        scrollToForm();
    });
}

// ----------- Hero Section Button -----------
const heroBtn = document.getElementById('heroBtn');
if (heroBtn) {
    heroBtn.addEventListener('click', () => {
        console.log("Hero button clicked");
        scrollToForm();
    });
}

// ----------- Root Canal Section Button -----------
const rootBtn = document.getElementById('rootCanalBtn');
if (rootBtn) {
    rootBtn.addEventListener('click', () => {
        console.log("Root Canal button clicked");
        scrollToForm();
    });
}

// ----------- Get Free Consultation Button -----------
const freeBtn = document.getElementById('getFreeButton');
if (freeBtn) {
    freeBtn.addEventListener('click', () => {
        console.log("Get Free Consultation button clicked");
        scrollToForm();
    });
}
