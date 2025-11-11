document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeIcon = document.getElementById("close-icon");

    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});

// Initialize EmailJS
(function () {
    emailjs.init("2PF-NVsilpNl_u0Tq"); // Replace with your actual Public Key
})();

// Send Email Function
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        from_phone: document.getElementById("number").value,
        from_subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    console.log("Sending data:", formData);

    // Replace 'service_xxxxx' and 'template_xxxxx' with actual values
    emailjs.send("service_495acvb", "template_lxcipwu", formData)
        .then((response) => {
            console.log("Email sent successfully!", response);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Email send error:", error);
            alert("Failed to send email.");
        });
});