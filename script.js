document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    const supportLink = document.querySelector('.menu a[href="https://www.youtube.com/@younginvestigators/?sub_confirmation=1"]');

    if (supportLink) {
        supportLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const userConfirmation = confirm('You will now be navigated to YouTube. Do you want to continue?');

            if (userConfirmation) {
                // Redirect if user accepts
                window.location.href = supportLink.href;
            }
        });
    }

    document.querySelector('.subscribe-button-wrapper').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Show confirmation popup
        const userConfirmed = confirm("You will now be navigated to YouTube. Do you want to continue?");

        if (userConfirmed) {
            // Navigate to the link if user clicks 'OK'
            window.location.href = this.href;
        }
    });

    function loadVideo() {
        const videoContainer = document.getElementById("video-placeholder");
        const consentBanner = document.getElementById("video-consent");

        // Embed YouTube video after consent
        videoContainer.innerHTML = `
            <iframe 
                src="https://www.youtube-nocookie.com/embed/5m4ZkEqQrn0?si=6N1J9L_wPHSloScA" 
                title="YouTube video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        consentBanner.style.display = "none";

        // Save consent in local storage
        localStorage.setItem("videoConsent", "true");
    }

    // Check for existing consent
    if (localStorage.getItem("videoConsent") === "true") {
        loadVideo();
    }
});
