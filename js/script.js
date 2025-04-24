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
    const typingSpeed = 60;
    const delayBetween = 500;

    const bootMsg1 = document.getElementById('boot-msg-1');
    const bootMsg2 = document.getElementById('boot-msg-2');
    const bootMsg3 = document.getElementById('boot-msg-3');

    const bootText1 = "Initializing AI Command Center v2.5...";
    const bootText2 = "Loading Profile Matrix... [OK]";
    const bootText3 = "Establishing Secure Connection...";
    const bootDelay = 150; // Delay between boot messages
    const nameDelay = 300; // Delay before typing name

    function typeWriter(element, text, index, speed, callback) {
        if (!element) { if(callback) callback(); return; } // Check if element exists
        if (index < text.length) {
            // Use textContent for efficiency, add cursor via class/pseudo-element if preferred
             element.textContent = text.substring(0, index + 1);
             // Or add cursor dynamically:
             element.innerHTML = text.substring(0, index + 1) + '<span class="typing"></span>';
            setTimeout(() => typeWriter(element, text, index + 1, speed, callback), speed);
        } else {
            element.textContent = text; // Remove cursor span
            if (callback) {
                setTimeout(callback, bootDelay); // Use bootDelay between steps
            }
        }
    }

    // Start the boot sequence
    if (bootMsg1) bootMsg1.innerHTML = '<span class="typing"></span>'; // Initial cursor
    typeWriter(bootMsg1, bootText1, 0, typingSpeed, () => {
        if (bootMsg2) bootMsg2.innerHTML = '<span class="typing"></span>';
        typeWriter(bootMsg2, bootText2, 0, typingSpeed, () => {
            if (bootMsg3) bootMsg3.innerHTML = '<span class="typing"></span>';
            typeWriter(bootMsg3, bootText3, 0, typingSpeed, () => {
                // Boot sequence finished, start name/title
                if (nameElement) nameElement.innerHTML = '<span class="typing"></span>';
                if (titleElement) titleElement.innerHTML = ' '; // Prevent layout shift
                setTimeout(() => { // Delay before name typing starts
                    typeWriter(nameElement, nameText, 0, typingSpeed, () => {
                        if (titleElement) titleElement.innerHTML = '<span class="typing"></span>';
                        typeWriter(titleElement, titleText, 0, typingSpeed, null);
                    });
                }, nameDelay);
            });
        });
    });


    // --- Smooth Scroll for Nav & Quick Links ---
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Chat Quick Links
    const quickLinks = document.querySelectorAll('.chat-footer .quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            if (targetId && targetId.startsWith('#')) {
                smoothScrollTo(targetId.substring(1));
                // Optionally close chat window after click
                // chatWindow.classList.remove('is-visible');
                // chatToggleButton.classList.remove('active');
            }
        });
    });

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

    const slider = document.querySelector('.recommendations-slider');
    const track = slider?.querySelector('.recommendations-track');
    const originalCards = slider?.querySelectorAll('.recommendation-card');
    const prevButton = slider?.querySelector('.slider-button.prev');
    const nextButton = slider?.querySelector('.slider-button.next');

    if (track && originalCards && originalCards.length > 1 && prevButton && nextButton) {
        let cardWidth = 0;
        let trackOffset = 0;
        let cards = [];
        let currentIndex = 1; // Start at the first REAL card
        let isTransitioning = false;
        let autoPlayInterval = null; // Variable to hold the interval ID
        const autoPlayDelay = 5000; // 10 seconds

        function setupSlider() {
            // Cloning (same as before)
            const firstClone = originalCards[0].cloneNode(true);
            const lastClone = originalCards[originalCards.length - 1].cloneNode(true);
            firstClone.setAttribute('aria-hidden', 'true');
            lastClone.setAttribute('aria-hidden', 'true');
            track.appendChild(firstClone);
            track.insertBefore(lastClone, originalCards[0]);
            cards = Array.from(track.children);

            // Initial Calculation & Positioning (same as before)
            calculateDimensions();
            track.classList.add('no-transition');
            const initialTranslateX = trackOffset - (currentIndex * cardWidth);
            track.style.transform = `translateX(${initialTranslateX}px)`;
            track.offsetHeight;
            track.classList.remove('no-transition');
            updateActiveCard();

            startAutoPlay(); // *** Start auto-play after setup ***
        }

        function calculateDimensions() {
            // Calculation logic (same as before)
            if (!cards || cards.length === 0) return;
            const firstCard = cards[0];
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMarginWidth = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
            cardWidth = firstCard.offsetWidth + cardMarginWidth;
            const sliderWidth = slider.offsetWidth;
            trackOffset = (sliderWidth / 2) - (cardWidth / 2);
        }

        function updateActiveCard() {
            // Active card update logic (same as before)
            if (!cards || cards.length === 0) return;
            cards.forEach((card, index) => {
                if (index === currentIndex) {
                    card.classList.add('is-active');
                    card.setAttribute('aria-hidden', 'false');
                } else {
                    card.classList.remove('is-active');
                    card.setAttribute('aria-hidden', 'true');
                }
            });
        }

        function moveTo(index) {
            if (isTransitioning || !track || !cards || cards.length === 0) return;
            isTransitioning = true;
            currentIndex = index;
            const translateX = trackOffset - (currentIndex * cardWidth);
            track.classList.remove('no-transition');
            track.style.transform = `translateX(${translateX}px)`;
            updateActiveCard();
            // Note: isTransitioning is reset in the 'transitionend' listener
        }

        // --- Auto-Play Functions ---
        function startAutoPlay() {
            stopAutoPlay(); // Clear any existing interval first
            autoPlayInterval = setInterval(() => {
                // Simulate clicking next
                moveTo(currentIndex + 1);
            }, autoPlayDelay);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }

        // --- Event Listener for Transition End ---
        track.addEventListener('transitionend', () => {
            isTransitioning = false; // Reset flag FIRST

            // Check for jumps (same as before)
            if (currentIndex === 0) { // Landed on the PREPENDED clone
                track.classList.add('no-transition');
                currentIndex = cards.length - 2; // Last REAL card index
                const jumpTranslateX = trackOffset - (currentIndex * cardWidth);
                track.style.transform = `translateX(${jumpTranslateX}px)`;
                track.offsetHeight;
                track.classList.remove('no-transition');
                updateActiveCard();
            } else if (currentIndex === cards.length - 1) { // Landed on the APPENDED clone
                track.classList.add('no-transition');
                currentIndex = 1; // First REAL card index
                const jumpTranslateX = trackOffset - (currentIndex * cardWidth);
                track.style.transform = `translateX(${jumpTranslateX}px)`;
                track.offsetHeight;
                track.classList.remove('no-transition');
                updateActiveCard();
            }

            // Optionally restart autoplay after manual interaction jump completes
            // if (!autoPlayInterval) { startAutoPlay(); } // Uncomment to restart after jump
        });

        // --- Navigation Button Listeners (Stop Auto-Play on Click) ---
        nextButton.addEventListener('click', () => {
            stopAutoPlay(); // *** Stop auto-play on manual interaction ***
            if (!isTransitioning) {
                moveTo(currentIndex + 1);
            }
        });

        prevButton.addEventListener('click', () => {
            stopAutoPlay(); // *** Stop auto-play on manual interaction ***
            if (!isTransitioning) {
                moveTo(currentIndex - 1);
            }
        });

        // --- Optional: Stop Auto-Play on Card Click ---
        cards.forEach((card, index) => {
             card.addEventListener('click', () => {
                 stopAutoPlay(); // *** Stop auto-play on manual interaction ***
                 if (index !== currentIndex && !isTransitioning) {
                     if (index === currentIndex + 1 || index === currentIndex - 1) {
                          moveTo(index);
                     }
                     // Decide if clicking non-adjacent cards should do anything or center them
                     // else { moveTo(index); } // This might jump if clicking clones
                 }
             });
         });

         // --- Optional: Pause Auto-Play on Hover ---
         slider.addEventListener('mouseenter', stopAutoPlay);
         slider.addEventListener('mouseleave', startAutoPlay);


        // --- Initialization and Resize Handling ---
        setupSlider(); // Sets everything up and starts auto-play

        let resizeTimer;
        window.addEventListener('resize', () => {
            stopAutoPlay(); // Pause during resize calculation
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (isTransitioning) { // If still transitioning, wait and retry
                    startAutoPlay(); // Restart autoplay if we aborted resize calculation
                    return;
                }
                track.classList.add('no-transition');
                calculateDimensions();
                const currentTranslateX = trackOffset - (currentIndex * cardWidth);
                track.style.transform = `translateX(${currentTranslateX}px)`;
                track.offsetHeight;
                track.classList.remove('no-transition');
                startAutoPlay(); // Resume auto-play after resize adjustment
            }, 250);
        });

    } else {
        // Error/Warning handling (same as before)
        if (originalCards && originalCards.length <= 1) {
             console.warn("Need more than one recommendation card for slider functionality.");
             if (prevButton) prevButton.style.display = 'none';
             if (nextButton) nextButton.style.display = 'none';
        } else {
             console.warn("Infinite recommendation slider elements not found or insufficient cards. Slider functionality disabled.");
             if (prevButton) prevButton.style.display = 'none';
             if (nextButton) nextButton.style.display = 'none';
        }
    }

    // --- ***** NEW: AI Assistant Chat Toggle Logic ***** ---
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatWindow = document.getElementById('chat-window');

    if (chatToggleButton && chatWindow) {
        chatToggleButton.addEventListener('click', () => {
            chatWindow.classList.toggle('is-visible');
            chatToggleButton.classList.toggle('active'); // Toggle button appearance
        });

        // Optional: Close chat if user clicks outside of it
        document.addEventListener('click', (event) => {
            if (!chatWindow.contains(event.target) && !chatToggleButton.contains(event.target) && chatWindow.classList.contains('is-visible')) {
                 chatWindow.classList.remove('is-visible');
                 chatToggleButton.classList.remove('active');
            }
        });
    }
     // --- ***** END: AI Assistant Chat Toggle Logic ***** ---

}); // End DOMContentLoaded