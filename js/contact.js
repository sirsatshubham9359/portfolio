// ==========================
// EmailJS Initialization
// ==========================

emailjs.init("5MNr1E-SuZVWUMF2Y");

// ==========================
// Copy Email / Phone
// ==========================

document.querySelectorAll(".copy-btn").forEach(button => {

    button.addEventListener("click", () => {

        const id = button.dataset.copy;

        const text = document.getElementById(id).innerText;

        navigator.clipboard.writeText(text);

        button.innerHTML = "✓ Copied";

        setTimeout(() => {

            button.innerHTML = "Copy";

        }, 2000);

    });

});

// ==========================
// Contact Form
// ==========================

const form = document.getElementById("contactForm");

const sendBtn = document.querySelector(".send-btn");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    sendBtn.disabled = true;

    sendBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';

    emailjs.send("service_9ldq5m2", "template_gtb1c9h", {

        name: form.querySelectorAll("input")[0].value,

        email: form.querySelectorAll("input")[1].value,

        subject: form.querySelectorAll("input")[2].value,

        message: form.querySelector("textarea").value

    })

    .then(function () {

        sendBtn.innerHTML =
            '<i class="fas fa-check"></i> Message Sent';

        sendBtn.style.background = "#22c55e";

        alert("✅ Thank you! Your message has been sent successfully.");

        form.reset();

        setTimeout(() => {

            sendBtn.disabled = false;

            sendBtn.innerHTML =
                '<i class="fas fa-paper-plane"></i> Send Message';

            sendBtn.style.background = "";

        }, 3000);

    })

    .catch(function (error) {

        console.error(error);

        sendBtn.disabled = false;

        sendBtn.innerHTML =
            '<i class="fas fa-paper-plane"></i> Send Message';

        alert("❌ Failed to send message. Please try again.");

    });

});