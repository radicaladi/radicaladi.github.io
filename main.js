"use strict";

(function () {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    isMobile() && (document.querySelector('body').classList.remove('desktop'), document.querySelector('body').classList.add('mobile'), document.querySelector('.article').classList.remove('article'));

    setTimeout(() => {
        const box = document.getElementById('intro');
        box.style.display = 'none';
    }, 4000);

    let render = function (template, node) {
        node.innerHTML = template;
    };

    const slides = [
    `
    <p class="section-title">Professional Bio</p>

    <p>
        Hello, I'm Adrian, a creative software developer from the Southwest United States.
        I enjoy building software that balances technical excellence with thoughtful user experience.
    </p>

    <p>
        My background includes full stack development, cloud technologies,
        enterprise software, and continual professional growth.
    </p>
    `,
    
    `
    <p class="section-title">Résumé</p>

    <p>
        Full Stack Software Developer with experience in Java,
        SpringBoot, JavaScript, AWS, LLMs, software engineering 
        practices, and enterprise-scale applications.<br>
        • JPMorgan Chase & Co  2022-<i>Present</i>
        • Photographer 2017-2022
        • United States Army 2013-2017
    </p>
    `,
    
    `
    <p class="section-title">Career Interests</p>

    <p>
        Areas that currently excite me:
    </p>

    <ul>
        <li>Cloud Architecture</li>
        <li>Distributed Systems</li>
        <li>Engineering Leadership</li>
        <li>Technical Strategy</li>
        <li>Developer Experience</li>
    </ul>
    `
];

    // const para =
    function makeChange() {
        let span = document.getElementById('willChange')
        span.innerHTML = 'Creative'
        span.style.color = '#B22222FF'
    }
    setTimeout(makeChange, 10500);

    // carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.nav-dot');

    let currentSlide = 0;
    let carouselInterval;

    function showSlide(index) {

        slides.forEach(slide =>
            slide.classList.remove('active')
        );

        dots.forEach(dot =>
            dot.classList.remove('active')
        );

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {

        let next = currentSlide + 1;

        if (next >= slides.length) {
            next = 0;
        }

        showSlide(next);
    }

    function startCarousel() {

        carouselInterval = setInterval(() => {

            nextSlide();

        }, 8000);

    }

    dots.forEach(dot => {

        dot.addEventListener('click', () => {

            clearInterval(carouselInterval);

            showSlide(
                Number(dot.dataset.slide)
            );

            startCarousel();
        });

    });

    startCarousel();

})();
