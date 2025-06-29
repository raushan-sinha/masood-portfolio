'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const burgerIcon = document.querySelector('.burger');

    //todo: Smooth Scroll -
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });


    //todo: Logo Text Warning -
    document.querySelector('.logo-text').addEventListener('copy', (e) => {
        e.preventDefault();
        const textWarning = document.createElement('div');
        textWarning.id = 'warning';
        textWarning.textContent = '⚠️ Copying isn`t allowed here!';
        document.body.append(textWarning);
        setTimeout(() => {
            textWarning.style.opacity = '1';
            textWarning.style.visibility = 'visible';
            textWarning.style.transform = 'translateX(-50%) translateY(0)';
        }, 10);
        setTimeout(() => {
            document.body.removeChild(textWarning);
        }, 2000);
    }, false);


    //todo: Open Navigation bar after clicking the Burger icon[ Only for Mobile ] -
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, idx) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${idx / 5 + 0.2}s`;
            }
        });
    });


    //todo: Close mobile menu when clicking on links -
    navLinks.forEach((link => {
        link.addEventListener('click', (e) => {
            if (link.querySelector('a').getAttribute('href').startsWith('#')) {
                e.preventDefault();
            }
            // Always close mobile menu when a link is clicked
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burgerIcon.classList.remove('toggle');
                navLinks.forEach((link => {
                    link.style.animation = '';
                }));
            }
        }, false);
    }));


    //todo: Close mobile menu when clicking outside -
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('nav-active') && !nav.contains(e.target) && !burgerIcon.contains(e.target)) {
            nav.classList.remove('nav-active');
            burgerIcon.classList.remove('toggle');
            navLinks.forEach((link => {
                link.style.animation = '';
            }));
        }
    }, false);

    // Name Typing Animation - Fixed to build full name character by character
    const nameElement = document.querySelector('.highlight');
    const userName = 'Masood Vali Appecherla';
    let idx = 0;

    function typeUserName() {
        if (idx < userName.length) {
            nameElement.textContent += userName.charAt(idx);
            idx++;
            setTimeout(typeUserName, 100);
        }
    }
    setTimeout(typeUserName, 500);


    //todo: Skills Typing Animation with professional typing effect
    const typedTextElement = document.querySelector('.typed-text');
    const skills = ['Frontend Developer 👨‍💻'];
    let currentSkillIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let newTextDelay = 2000; // Delay between current and next text

    function type() {
        const currentSkill = skills[currentSkillIndex];

        if (isDeleting) {
            // Remove a character
            typedTextElement.textContent = currentSkill.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            // Add a character
            typedTextElement.textContent = currentSkill.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }

        // If word is complete
        if (!isDeleting && charIndex === currentSkill.length) {
            // Set delay before starting to delete
            typingDelay = newTextDelay;
            isDeleting = true;
        }

        // If word is deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to next word
            currentSkillIndex = (currentSkillIndex + 1) % skills.length;
            // Pause before typing next word
            typingDelay = 500;
        }

        setTimeout(type, typingDelay);
    }

    // Start the typing animation
    setTimeout(type, 1000);

    //todo: Resume.pdf Link -
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open('https://apricot-cortney-67.tiiny.site/', '_blank');
        });
    }
    



    //todo: Access each Social Icons -
    const socialLinkUrls = [
        'https://www.instagram.com/m_a_s_0_0_d?utm_source=qr&igsh=MWNzZDMzcXZsNWpzYw==',
        'https://www.linkedin.com/in/masood-vali-appecherla-820a75213',
        'mailto:vmasood02@gmail.com',
        'https://github.com/Masood170'
    ];
    document.querySelectorAll('.social-icons a').forEach((link, idx) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(socialLinkUrls[idx], '_blank');
        }, false);
    });


    //todo: Open Projects Link -
    document.querySelector('#projectsLink').addEventListener('click', (e) => {
        e.preventDefault();
        window.open('projects.html', '_blank');
    }, false);

});

