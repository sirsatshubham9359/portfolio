//==================================================
// PROJECT PAGE JAVASCRIPT
//==================================================


//================ TAB SWITCHING =================//

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const projectContent = document.querySelector(".project-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active button
        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Pause all videos before changing tabs

const videos = document.querySelectorAll("video");

videos.forEach(video => {

    video.pause();


});


// Hide all panels

tabPanels.forEach(panel => {

    panel.classList.remove("active");

});
        // Activate button
        button.classList.add("active");

        // Show selected panel
        const target = button.dataset.tab;

        document
            .getElementById(target)
            .classList.add("active");

        // Smooth Scroll
        projectContent.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});



//================ GALLERY LIGHTBOX =================//

const galleryImages = document.querySelectorAll(".gallery-grid img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML = `

    <img src="" alt="Gallery Image">

`;

document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector("img");

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = image.src;

    });

});



// Close on click

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});



// Close using ESC

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        lightbox.style.display = "none";

    }

});