const certificates = [

    {
        title: "Google AI Agents",
        issuer: "Google",
        year: "2025",
        category: "featured",
        image: "assets/certificates/images/5-day-ai-agentic-google.jpg",
        pdf: "assets/certificates/pdf/5-day-ai-agentic-google.pdf"
    },

    {
        title: "Deloitte Data Analytics",
        issuer: "Deloitte",
        year: "2025",
        category: "featured",
        image: "assets/certificates/images/deloitte-data-analytics.jpg",
        pdf: "assets/certificates/pdf/deloitte-data-analytics.pdf"
    },

    {
        title: "SSG Drone Internship",
        issuer: "SSG Embedded Solutions",
        year: "2025",
        category: "internship",
        image: "assets/certificates/images/ssg-internship-drone.jpg",
        pdf: "assets/certificates/pdf/ssg-internship-drone.pdf"
    },

    {
        title: "Embedded Systems Design",
        issuer: "Training",
        year: "2025",
        category: "internship",
        image: "assets/certificates/images/embedded-systems-design.jpg",
        pdf: "assets/certificates/pdf/embedded-systems-design.pdf"
    },

    {
        title: "Getting Started with AI",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/getting-started-ai.jpg",
        pdf: "assets/certificates/pdf/getting-started-ai.pdf"
    },

    {
        title: "Journey to Cloud",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/journey-to-cloud.jpg",
        pdf: "assets/certificates/pdf/journey-to-cloud.pdf"
    },

    {
        title: "Getting Started with Cybersecurity",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/getting-start-cybersecurity.jpg",
        pdf: "assets/certificates/pdf/getting-start-cybersecurity.pdf"
    },

    {
        title: "Python for Data Science",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/python-data-science.jpg",
        pdf: "assets/certificates/pdf/python-data-science.pdf"
    },

    {
        title: "MATLAB Onramp",
        issuer: "MathWorks",
        year: "2025",
        category: "featured",
        image: "assets/certificates/images/matlab-onramp.jpg",
        pdf: "assets/certificates/pdf/matlab-onramp.pdf"
    },

    {
        title: "RAG Introduction",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/rag-introduction.jpg",
        pdf: "assets/certificates/pdf/rag-introduction.pdf"
    },

    {
        title: "RAG using LangChain",
        issuer: "IBM",
        year: "2025",
        category: "ai",
        image: "assets/certificates/images/rag-langchain.jpg",
        pdf: "assets/certificates/pdf/rag-langchain.pdf"
    },

    {
        title: "Tata GenAI Analytics",
        issuer: "Tata",
        year: "2025",
        category: "featured",
        image: "assets/certificates/images/tata-genai-analytics.jpg",
        pdf: "assets/certificates/pdf/tata-genai-analytics.pdf"
    },

    {
        title: "IIT Delhi Placement Workshop",
        issuer: "IIT Delhi",
        year: "2025",
        category: "workshop",
        image: "assets/certificates/images/iit-delhi-placement.jpg",
        pdf: "assets/certificates/pdf/iit-delhi-placement.pdf"
    },

    {
        title: "Project Competition",
        issuer: "Competition",
        year: "2026",
        category: "workshop",
        image: "assets/certificates/images/project-competition.jpg",
        pdf: "assets/certificates/pdf/project-competition.pdf"
    }

];
const certificateContainer = document.querySelector(".certificate-container");
function createCard(certificate){

    return `

            <div class="certificate-card"
     data-category="${certificate.category}"
     data-pdf="${certificate.pdf}">

            <div class="certificate-image">

                <img src="${certificate.image}" alt="${certificate.title}">

            </div>

            <div class="certificate-info">

                <h3>${certificate.title}</h3>

                <p>${certificate.issuer}</p>

                <div class="certificate-footer">

                    <span class="certificate-year">
                        ${certificate.year}
                    </span>

                    <a href="${certificate.pdf}"
                       target="_blank"
                       class="certificate-btn">

                        View →

                    </a>

                </div>

            </div>

        </div>

    `;

}

function displayCertificates(category){

    // Clear previous cards
    certificateContainer.innerHTML = "";

    // Filter certificates
    const filteredCertificates = certificates.filter(certificate => {
        return certificate.category === category;
    });

    // Create all cards
    let cardsHTML = "";

    filteredCertificates.forEach(certificate => {
        cardsHTML += createCard(certificate);
    });

    // Display cards
    certificateContainer.innerHTML = cardsHTML;

    // Attach click events
    attachCardEvents();

}
function attachCardEvents() {

    const cards = document.querySelectorAll(".certificate-card");

    cards.forEach(card => {

        const button = card.querySelector(".certificate-btn");

        button.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        card.addEventListener("click", () => {
            window.open(card.dataset.pdf, "_blank");
        });

    });

}
// Show Featured certificates when page loads
displayCertificates("featured");

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        displayCertificates(button.dataset.filter);

    });

});