document.addEventListener('DOMContentLoaded', () => {
    const openEmailDraft = (subject, details) => {
        const body = Object.entries(details)
            .map(([label, value]) => `${label}: ${value}`)
            .join('\n');
        window.location.href = `mailto:info@recursivecoders.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    /* =========================================
       1. ROBUST MENU TOGGLE LOGIC
       ========================================= */
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn && navLinks) {
        const menuIcon = menuBtn.querySelector('i');

        // Toggle Menu on Click
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Stop click from propagating to document
            
            navLinks.classList.toggle('active');
            
            // Toggle Icon
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });

        // Close Menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                if (menuIcon) {
                    menuIcon.classList.remove('fa-times');
                    menuIcon.classList.add('fa-bars');
                }
            }
        });
    }

    /* =========================================
       2. SALARY SLIDER LOGIC
       ========================================= */
    const salaryRange = document.getElementById('salaryRange');
    const salaryAmount = document.getElementById('salaryAmount');
    const roleBadge = document.getElementById('roleBadge');
    const skillsList = document.getElementById('skillsList');
    const effortScore = document.getElementById('effortScore');

    if (salaryRange) {
        salaryRange.addEventListener('input', function() {
            updateSalaryInfo(parseInt(this.value));
        });
        // Initialize to 0 LPA and 0 effort
        if (salaryRange.min !== undefined) {
            salaryRange.value = salaryRange.min;
            updateSalaryInfo(parseInt(salaryRange.min));
        } else {
            updateSalaryInfo(0);
        }
    }

    function updateSalaryInfo(val) {
        if (!salaryAmount) return;
        salaryAmount.innerText = `₹${val} LPA`;

        let role = "";
        let skills = [];
        let effort = "";
        
        if (val === 0) {
            role = "Getting Started";
            skills = [
                "Explore career options",
                "Learn basic computer skills",
                "Understand industry requirements",
                "Set up your environment",
                "Introduction to coding",
                "Soft skills awareness",
                "Motivation & planning",
                "Goal setting",
                "Resume basics",
                "Industrial Standards"
            ];
            effort = "0/10";
        } else if (val >= 1 && val <= 3) {
            role = "Tier-3 / Campus-Service Roles";
            skills = [
                "Fundamental coding",
                "Teamwork & communication",
                "Basic Data Structures",
                "Git basics",
                "Simple problem solving",
                "Debugging basics",
                "HTML & CSS intro",
                "Basic SQL",
                "Version control",
                "Entry-level projects",
                "Industrial Standards"
            ];
            effort = "2/10";
        } else if (val > 3 && val <= 5) {
            role = "Tier-3 / Campus-Service Roles";
            skills = [
                "Fundamental coding",
                "Teamwork & communication",
                "Basic Data Structures",
                "Git basics",
                "Simple problem solving",
                "Debugging basics",
                "HTML & CSS intro",
                "Basic SQL",
                "Version control",
                "Entry-level projects",
                "Industrial Standards"
            ];
            effort = "5/10";
        } else if (val > 5 && val <= 14) {
            role = "Product-Based Startups";
            skills = [
                "Intermediate DSA",
                "Web Dev Basics",
                "Database Management",
                "REST APIs",
                "Object-Oriented Programming",
                "Frontend frameworks",
                "Unit testing",
                "API integration",
                "Agile methodologies",
                "Deployment basics"
            ];
            effort = "5/10";
        } else if (val > 14 && val <= 20) {
            role = "Top MNCs & Global Startups";
            skills = [
                "Advanced DSA",
                "System Design",
                "Cloud Basics",
                "Full-stack Projects",
                "Microservices",
                "CI/CD pipelines",
                "Security fundamentals",
                "Performance optimization",
                "Code reviews",
                "Cross-team collaboration"
            ];
            effort = "8/10";
        } else {
            role = "Global Tech Giants & Remote";
            skills = [
                "Deep Algorithms",
                "Scalable Architecture",
                "Distributed Systems",
                "Open Source",
                "AI/ML basics",
                "Big Data tools",
                "DevOps mastery",
                "Global collaboration",
                "Technical leadership",
                "Cutting-edge research"
            ];
            effort = "10/10";
        }

        if (roleBadge) roleBadge.innerText = role;
        if (effortScore) effortScore.innerText = effort;
        if (skillsList) skillsList.innerHTML = skills.map(skill => `<li>${skill}</li>`).join('');
    }

    /* =========================================
       3. TESTIMONIAL SLIDER LOGIC (PAGE BASED)
       ========================================= */
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (track && prevBtn && nextBtn) {
        let currentIndex = 0;
        
        function updateSlider() {
            // Get the width of one "Page" (which is 100% of the viewport)
            const slideWidth = document.querySelector('.testimonial-viewport').offsetWidth;
            const offset = -(currentIndex * slideWidth);
            track.style.transform = `translateX(${offset}px)`;
        }

        nextBtn.addEventListener('click', () => {
            const totalPages = document.querySelectorAll('.testimonial-page').length;
            if (currentIndex < totalPages - 1) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to start
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            const totalPages = document.querySelectorAll('.testimonial-page').length;
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalPages - 1; // Loop to end
            }
            updateSlider();
        });

        // Recalculate on window resize to ensure alignment
        window.addEventListener('resize', updateSlider);
    }

    /* =========================================
       4. MENTOR SLIDER LOGIC (CARD BASED - DYNAMIC WIDTH)
       ========================================= */
    const mentorTrack = document.getElementById('mentorTrack');
    const mentorPrev = document.getElementById('mentorPrev');
    const mentorNext = document.getElementById('mentorNext');

    if (mentorTrack && mentorPrev && mentorNext) {
        let mentorIndex = 0;

        // Helper function to get the exact width of a card + its gap dynamically from CSS
        function getMentorSlideDistance() {
            const card = mentorTrack.querySelector('.mentor-card');
            if (!card) return 0;
            
            // Get exact width including padding/borders from the DOM element
            const cardWidth = card.offsetWidth;
            
            // Get the gap value from the computed CSS style of the track
            const gapStr = window.getComputedStyle(mentorTrack).gap;
            const gap = parseInt(gapStr) || 20; // Default to 20 if parse fails
            
            return cardWidth + gap;
        }

        function updateMentorSlider() {
            const slideDistance = getMentorSlideDistance();
            const offset = -(mentorIndex * slideDistance);
            mentorTrack.style.transform = `translateX(${offset}px)`;
        }

        mentorNext.addEventListener('click', () => {
            const totalCards = document.querySelectorAll('.mentor-card').length;
            const containerWidth = document.querySelector('.mentor-viewport').offsetWidth;
            const slideDistance = getMentorSlideDistance();
            
            // Calculate how many full cards fit on screen at once
            const visibleCards = Math.floor(containerWidth / slideDistance);
            
            // Limit the index so we don't scroll past blank space
            // (Total cards minus visible cards gives the last possible index)
            const maxIndex = totalCards - visibleCards;

            if (mentorIndex < maxIndex) {
                mentorIndex++;
            } else {
                mentorIndex = 0; // Loop back to start
            }
            updateMentorSlider();
        });

        mentorPrev.addEventListener('click', () => {
            const totalCards = document.querySelectorAll('.mentor-card').length;
            const containerWidth = document.querySelector('.mentor-viewport').offsetWidth;
            const slideDistance = getMentorSlideDistance();
            
            const visibleCards = Math.floor(containerWidth / slideDistance);
            const maxIndex = totalCards - visibleCards;

            if (mentorIndex > 0) {
                mentorIndex--;
            } else {
                mentorIndex = maxIndex; // Loop to end
            }
            updateMentorSlider();
        });
        
        // Handle Resize to fix slider bounds
        window.addEventListener('resize', () => {
            // Reset to start on resize to avoid alignment issues caused by width changes
            mentorIndex = 0; 
            updateMentorSlider();
        });
    }

    /* =========================================
       5. DB CONNECTION (DEMO FORM)
       ========================================= */
    const demoForm = document.getElementById('demoForm');
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Your email app will open with a subscription request. Send the email to complete it.');
            openEmailDraft('Newsletter subscription', {
                Email: subscribeForm.querySelector('input[type="email"]').value
            });
        });
    }

    if (demoForm) {
        demoForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Your email app will open with your demo request. Send the email to complete it.');
            openEmailDraft('Free demo request', {
                Name: document.getElementById('demo-name').value,
                Email: document.getElementById('demo-email').value,
                Phone: document.getElementById('demo-phone').value,
                Course: document.getElementById('demo-course').value
            });
        });
    }
});