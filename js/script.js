document.addEventListener('DOMContentLoaded', () => {

    // --- Basic Setup: Set current year in footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Enhanced Typing Animation (Boot Sequence + Name/Title) ---
    const nameElement = document.getElementById('typing-name');
    const titleElement = document.getElementById('typing-title');
    const bootMsg1 = document.getElementById('boot-msg-1');
    const bootMsg2 = document.getElementById('boot-msg-2');
    const bootMsg3 = document.getElementById('boot-msg-3');

    // Text content for animations
    const bootText1 = "Initializing AI Command Center v2.5...";
    const bootText2 = "Loading Profile Matrix... [OK]";
    const bootText3 = "Establishing Secure Connection...";
    const nameText = "AbdElKader Seif El Islem RAHMANI";
    const titleText = "Deep Learning Engineer | Data Scientist | AI Enthusiast";

    // Animation parameters
    const typingSpeed = 60; // Milliseconds per character
    const bootDelay = 100; // Delay between boot messages
    const nameDelay = 300; // Delay before typing name

    function typeWriter(element, text, index, speed, callback) {
        // Check if element exists
        if (!element) {
            if(callback) callback(); // Proceed if callback exists
            return;
        }
        if (index < text.length) {
            // Display text and add blinking cursor
            element.innerHTML = text.substring(0, index + 1) + '<span class="typing"></span>';
            setTimeout(() => typeWriter(element, text, index + 1, speed, callback), speed);
        } else {
            element.textContent = text; // Remove cursor span when done
            if (callback) {
                setTimeout(callback, bootDelay); // Use delay for next step
            }
        }
    }

    // Start the boot sequence typing animation
    if (bootMsg1) bootMsg1.innerHTML = '<span class="typing"></span>'; // Initial cursor for first message
    typeWriter(bootMsg1, bootText1, 0, typingSpeed, () => {
        if (bootMsg2) bootMsg2.innerHTML = '<span class="typing"></span>';
        typeWriter(bootMsg2, bootText2, 0, typingSpeed, () => {
            if (bootMsg3) bootMsg3.innerHTML = '<span class="typing"></span>';
            typeWriter(bootMsg3, bootText3, 0, typingSpeed, () => {
                // --- Start Name and Title Typing after Boot Sequence ---
                if (nameElement) nameElement.innerHTML = '<span class="typing"></span>';
                if (titleElement) titleElement.innerHTML = ' '; // Placeholder
                setTimeout(() => { // Delay before typing name
                    typeWriter(nameElement, nameText, 0, typingSpeed, () => {
                        if (titleElement) titleElement.innerHTML = '<span class="typing"></span>';
                        typeWriter(titleElement, titleText, 0, typingSpeed, null); // Last step, no further callback
                    });
                }, nameDelay);
            });
        });
    });


    // --- Smooth Scrolling Function ---
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // --- Smooth Scroll for Main Navigation Links ---
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                smoothScrollTo(href.substring(1));
            }
        });
    });

    // --- Smooth Scroll for Chat Quick Links ---
    const quickLinks = document.querySelectorAll('.chat-footer .quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            if (targetId && targetId.startsWith('#')) {
                smoothScrollTo(targetId.substring(1));
                // Optional: Close chat window after quick link click
                // const chatWindow = document.getElementById('chat-window');
                // const chatToggleButton = document.getElementById('chat-toggle-button');
                // if (chatWindow && chatToggleButton) {
                //     chatWindow.classList.remove('is-visible');
                //     chatToggleButton.classList.remove('active');
                // }
            }
        });
    });


    // --- Fade-in Animation on Scroll (Modules) ---
    const modules = document.querySelectorAll('.module');
    const moduleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // observer.unobserve(entry.target); // Optional: Animate only once
            }
            // Optional: Reset animation when scrolling out of view
            // else {
            //     entry.target.style.opacity = "0";
            //     entry.target.style.transform = "translateY(20px)";
            // }
        });
    }, {
        threshold: 0.05 // Trigger when 5% visible
    });

    modules.forEach(module => {
        module.style.opacity = "0"; // Initial hidden state
        module.style.transform = "translateY(20px)";
        module.style.willChange = "opacity, transform"; // Performance hint
        moduleObserver.observe(module);
    });


    // --- Timeline Animation on Scroll ---
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% visible
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });


    // --- Service Contact Button Logic ---
    const serviceItems = document.querySelectorAll('.services-list li[data-service]');
    const yourWhatsAppNumber = '213668704202'; // Replace if needed
    const yourEmail = 'a.e.k426rahmani@gmail.com'; // Replace if needed

    serviceItems.forEach(item => {
        const serviceName = item.getAttribute('data-service');
        const whatsappButton = item.querySelector('.service-whatsapp');
        const emailButton = item.querySelector('.service-email');

        // Generate WhatsApp link
        if (serviceName && whatsappButton) {
            const baseWhatsAppMessage = `Hello AbdElKader, I visited your portfolio and I'm interested in your "${serviceName}" service. Could we discuss this further?`;
            const encodedWhatsAppMessage = encodeURIComponent(baseWhatsAppMessage);
            whatsappButton.href = `https://wa.me/${yourWhatsAppNumber}?text=${encodedWhatsAppMessage}`;
        }

        // Generate Email link
        if (serviceName && emailButton) {
            const emailSubject = `Inquiry about ${serviceName} Service`;
            const emailBody = `Hello AbdElKader,\n\nI saw your portfolio and I'm interested in learning more about your "${serviceName}" service.\n\n[Optional: Add specific question here]\n\nBest regards,\n[Your Name]`;
            const encodedSubject = encodeURIComponent(emailSubject);
            const encodedBody = encodeURIComponent(emailBody);
            emailButton.href = `mailto:${yourEmail}?subject=${encodedSubject}&body=${encodedBody}`;
        }
    });


    // --- Infinite Auto-Playing Recommendations Slider Logic ---
    const slider = document.querySelector('.recommendations-slider');
    const track = slider?.querySelector('.recommendations-track');
    const originalCards = slider?.querySelectorAll('.recommendation-card');
    const prevButton = slider?.querySelector('.slider-button.prev');
    const nextButton = slider?.querySelector('.slider-button.next');

    // Check if slider elements exist and there are enough cards
    if (track && originalCards && originalCards.length > 1 && prevButton && nextButton) {
        let cardWidth = 0;
        let trackOffset = 0;
        let cards = []; // Will hold original + clones
        let currentIndex = 1; // Start index (first real card)
        let isTransitioning = false;
        let autoPlayInterval = null;
        const autoPlayDelay = 2000; // 3 seconds

        function setupSlider() {
            // --- Clone first and last cards ---
            const firstClone = originalCards[0].cloneNode(true);
            const lastClone = originalCards[originalCards.length - 1].cloneNode(true);
            firstClone.setAttribute('aria-hidden', 'true');
            lastClone.setAttribute('aria-hidden', 'true');
            track.appendChild(firstClone);
            track.insertBefore(lastClone, originalCards[0]);
            cards = Array.from(track.children); // Update collection

            // --- Calculate dimensions and set initial position ---
            calculateDimensions();
            positionTrack(true); // Position without transition initially
            updateActiveCard();
            startAutoPlay(); // Start auto-play
        }

        function calculateDimensions() {
            if (!cards || cards.length === 0) return;
            const firstCard = cards[0];
            const cardStyle = window.getComputedStyle(firstCard);
            const cardMarginWidth = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
            cardWidth = firstCard.offsetWidth + cardMarginWidth;
            const sliderWidth = slider.offsetWidth;
            trackOffset = (sliderWidth / 2) - (cardWidth / 2); // Center alignment offset
        }

        function positionTrack(instant = false) {
            if (!track || !cards || cards.length === 0) return;
            const translateX = trackOffset - (currentIndex * cardWidth);
            if (instant) {
                track.classList.add('no-transition');
            }
            track.style.transform = `translateX(${translateX}px)`;
            if (instant) {
                track.offsetHeight; // Force reflow/repaint
                track.classList.remove('no-transition');
            }
        }

        function updateActiveCard() {
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
            positionTrack(); // Move with transition
            updateActiveCard();
        }

        function startAutoPlay() {
            stopAutoPlay(); // Clear existing interval
            autoPlayInterval = setInterval(() => {
                moveTo(currentIndex + 1);
            }, autoPlayDelay);
        }

        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }

        // --- Event Listeners ---
        track.addEventListener('transitionend', () => {
            isTransitioning = false;
            // Handle infinite loop jump
            if (currentIndex === 0) { // Landed on prepended clone
                currentIndex = cards.length - 2; // Index of last real card
                positionTrack(true); // Jump instantly
                updateActiveCard();
            } else if (currentIndex === cards.length - 1) { // Landed on appended clone
                currentIndex = 1; // Index of first real card
                positionTrack(true); // Jump instantly
                updateActiveCard();
            }
        });

        nextButton.addEventListener('click', () => {
            stopAutoPlay();
            moveTo(currentIndex + 1);
        });

        prevButton.addEventListener('click', () => {
            stopAutoPlay();
            moveTo(currentIndex - 1);
        });

        // Optional: Click on side cards (simplified: moves one step towards)
        cards.forEach((card, index) => {
             card.addEventListener('click', () => {
                 stopAutoPlay();
                 if (index !== currentIndex && !isTransitioning) {
                     moveTo(index); // Center the clicked card
                 }
             });
         });

        // Optional: Pause on hover
        slider.addEventListener('mouseenter', stopAutoPlay);
        slider.addEventListener('mouseleave', startAutoPlay);

        // --- Initialization & Resize Handling ---
        setupSlider(); // Initial setup

        let resizeTimer;
        window.addEventListener('resize', () => {
            stopAutoPlay();
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (isTransitioning) { startAutoPlay(); return; } // Don't resize during transition
                calculateDimensions();
                positionTrack(true); // Reposition instantly based on new dimensions
                startAutoPlay(); // Resume
            }, 250);
        });

    } else {
        // Handle case where slider elements aren't found or not enough cards
        if (originalCards && originalCards.length <= 1) {
             console.warn("Slider disabled: Need more than one recommendation card.");
        } else {
             console.warn("Slider disabled: Recommendation slider elements not found.");
        }
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
    }
    // --- END: Recommendations Slider Logic ---


    // --- AI Assistant Chat Toggle Logic ---
    const chatToggleButton = document.getElementById('chat-toggle-button');
    const chatWindow = document.getElementById('chat-window');

    if (chatToggleButton && chatWindow) {
        chatToggleButton.addEventListener('click', () => {
            chatWindow.classList.toggle('is-visible');
            chatToggleButton.classList.toggle('active');
        });

        // Optional: Close chat if clicking outside
        document.addEventListener('click', (event) => {
            // Check if the click is outside the chat window AND outside the toggle button
            if (!chatWindow.contains(event.target) && !chatToggleButton.contains(event.target) && chatWindow.classList.contains('is-visible')) {
                 chatWindow.classList.remove('is-visible');
                 chatToggleButton.classList.remove('active');
            }
        });
    }
    // --- END: AI Assistant Chat Toggle Logic ---

}); // End DOMContentLoaded