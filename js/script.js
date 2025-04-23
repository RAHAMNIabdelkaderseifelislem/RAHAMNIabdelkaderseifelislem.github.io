document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Typing Animation ---
    const nameElement = document.getElementById('typing-name');
    const titleElement = document.getElementById('typing-title');
    const nameText = "AbdElKader Seif El Islem RAHMANI";
    const titleText = "Deep Learning Engineer | Data Scientist | AI Enthusiast";
    const typingSpeed = 80;
    const delayBetween = 500;

    function typeWriter(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index + 1) + '<span class="typing"></span>';
            setTimeout(() => typeWriter(element, text, index + 1, callback), typingSpeed);
        } else {
            element.innerHTML = text;
            if (callback) {
                setTimeout(callback, delayBetween);
            }
        }
    }

    if (nameElement && titleElement) {
        nameElement.innerHTML = '<span class="typing"></span>';
        titleElement.innerHTML = ' ';
        typeWriter(nameElement, nameText, 0, () => {
            titleElement.innerHTML = '<span class="typing"></span>';
             typeWriter(titleElement, titleText, 0, null);
        });
    }

    // --- Smooth Scroll for Navigation Links ---
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // --- Fade-in Animation on Scroll ---
    const modules = document.querySelectorAll('.module');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        modules.forEach(module => {
            const elementTop = module.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                module.style.opacity = "1";
                module.style.transform = "translateY(0)";
            }
            // Reset can be added here if needed:
            // else {
            //     module.style.opacity = "0";
            //     module.style.transform = "translateY(20px)";
            // }
        });
    };

    modules.forEach(module => { // Initial state for animation
        module.style.opacity = "0";
        module.style.transform = "translateY(20px)";
        module.style.transition = "opacity 0.8s ease-out, transform 0.6s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // --- ***** NEW: Service Contact Button Logic ***** ---
    const serviceItems = document.querySelectorAll('.services-list li[data-service]');
    const yourWhatsAppNumber = '213668704202'; // Your WhatsApp number (no '+', spaces or dashes)
    const yourEmail = 'a.e.k426rahmani@gmail.com';

    serviceItems.forEach(item => {
        const serviceName = item.getAttribute('data-service');
        const whatsappButton = item.querySelector('.service-whatsapp');
        const emailButton = item.querySelector('.service-email');

        if (serviceName && whatsappButton) {
            const baseWhatsAppMessage = `Hello AbdElKader, I visited your portfolio and I'm interested in your "${serviceName}" service. Could we discuss this further?`;
            const encodedWhatsAppMessage = encodeURIComponent(baseWhatsAppMessage);
            whatsappButton.href = `https://wa.me/${yourWhatsAppNumber}?text=${encodedWhatsAppMessage}`;
        }

        if (serviceName && emailButton) {
            const emailSubject = `Inquiry about ${serviceName} Service`;
            const emailBody = `Hello AbdElKader,\n\nI saw your portfolio and I'm interested in learning more about your "${serviceName}" service.\n\n[Optional: Add specific question here]\n\nBest regards,\n[Your Name]`;
            const encodedSubject = encodeURIComponent(emailSubject);
            const encodedBody = encodeURIComponent(emailBody);
            emailButton.href = `mailto:${yourEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        }
    });
    // --- ***** END: Service Contact Button Logic ***** ---

    // --- ***** NEW: Recommendations Slider Logic ***** ---
    const slider = document.querySelector('.recommendations-slider');
    const track = slider?.querySelector('.recommendations-track'); // Use optional chaining
    const cards = slider?.querySelectorAll('.recommendation-card');
    const prevButton = slider?.querySelector('.slider-button.prev');
    const nextButton = slider?.querySelector('.slider-button.next');

    if (track && cards && cards.length > 0 && prevButton && nextButton) { // Check if elements exist
        let currentIndex = 0;
        let cardWidth = 0;
        let trackOffset = 0; // Offset to center the active card

        function calculateDimensions() {
            // Calculate width based on the first card - assumes all cards are same width initially
            const firstCard = cards[0];
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMarginWidth = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
            cardWidth = firstCard.offsetWidth + cardMarginWidth;

            // Calculate offset to center the active card within the slider viewport
            const sliderWidth = slider.offsetWidth;
            trackOffset = (sliderWidth / 2) - (cardWidth / 2); // Adjust based on desired alignment

            // Apply initial padding if needed to ensure side cards are visible
            // track.style.paddingLeft = `${trackOffset}px`;
            // track.style.paddingRight = `${trackOffset}px`; // Padding might affect width calcs, careful
        }


        function updateSlider() {
            if (!track || !cards || cards.length === 0) return; // Guard clause

            // Calculate the translation needed to center the current card
            // Translation = Initial Offset - (Index * Full Card Width)
            const translateX = trackOffset - (currentIndex * cardWidth);
            track.style.transform = `translateX(${translateX}px)`;

            // Update active class
            cards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.classList.add('is-active');
                    card.setAttribute('aria-hidden', 'false');
                } else {
                    card.classList.remove('is-active');
                     card.setAttribute('aria-hidden', 'true');
                }
            });

            // Update button states
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === cards.length - 1;
        }

        function slideToIndex(index) {
            if (index >= 0 && index < cards.length) {
                currentIndex = index;
                updateSlider();
            }
        }

        // --- Event Listeners ---
        nextButton.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSlider();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });

         // Optional: Click on side cards to center them
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                if (index !== currentIndex) {
                    slideToIndex(index);
                }
            });
        });


        // --- Initialization and Resize Handling ---
        calculateDimensions(); // Calculate initial sizes
        updateSlider(); // Set initial position

        // Recalculate on window resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                calculateDimensions();
                updateSlider(); // Re-apply transform based on new dimensions
            }, 250); // Debounce resize event
        });

    } else {
        console.warn("Recommendation slider elements not found. Slider functionality disabled.");
        // Optionally hide buttons if slider elements aren't found
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
    }
    // --- ***** END: Recommendations Slider Logic ***** ---

}); // End DOMContentLoaded