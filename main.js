"use strict";

(function () {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }

    const mobile = isMobile();

    if (mobile) {
        document.body.classList.remove("desktop");
        document.body.classList.add("mobile");
    }

    // Intro (UNCHANGED — CSS handles timing)
    setTimeout(() => {
        const box = document.getElementById("intro");
        if (box) box.style.display = "none";
    }, 4000);

    const render = (template, node) => {
        node.innerHTML = template;
    };

    const article = document.querySelector(".article");
    const dots = document.querySelectorAll(".dot");
    const progressBar = document.getElementById("carousel-progress-bar");

    const slides = [

        `
        <p class="section-title">Professional Bio</p>

        <p>
            Hello, I'm Adrian Braun, a creative software developer from the Southwest United States.
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
            Full Stack Software Developer with experience in Java, Spring Boot,
            JavaScript, AWS, LLMs, and enterprise systems.
        </p>

        <ul>
            <li>JPMorgan Chase &amp; Co — <i>Present</i></li>
            <li>Photographer</li>
            <li>United States Army</li>
        </ul>
        `,

        `
        <p class="section-title">Career Interests</p>

        <ul>
            <li>Cloud Architecture</li>
            <li>Distributed Systems</li>
            <li>Engineering Leadership</li>
            <li>Technical Strategy</li>
        </ul>
        `,

        `
        <p>Hello, I'm Adrian, a creative software developer from the Southwest United States.
        I'm lucky to have had the privilege of learning from the wonderful instructors at
        <a class="support" href="https://codeup.com/" target="_blank">Codeup</a>.
        Here's some of my works.</p>

        <p class="salut">Crafted with love</p>

        <ul>
            <li>
                <a href="https://github.com" target="_blank" rel="noopener">
                    Movie Directory Application
                </a>
            </li>

            <li>
                <a href="https://github.com" target="_blank" rel="noopener">
                    Weather Forecast Application
                </a>
            </li>

            <li class="zwanzigzweiundzwanzig">
                <a href="https://github.com" target="_blank" rel="noopener">
                    Coffee Web Project
                </a>
            </li>
        </ul>

        <p class="last-para">
            I'm available for work. Feel free to contact me !
        </p>
        `
    ];

    let currentSlide = 0;
    let carouselTimer;
    let startX = 0;

    function updateProgress(index) {
        if (!mobile || !progressBar) return;

        const percent = ((index + 1) / slides.length) * 100;
        progressBar.style.width = percent + "%";
    }

    function showSlide(index) {

        article.classList.add("fade-out");

        setTimeout(() => {

            currentSlide = index;

            render(slides[currentSlide], article);

            dots.forEach(dot => dot.classList.remove("active"));

            if (dots[currentSlide]) {
                dots[currentSlide].classList.add("active");
            }

            updateProgress(currentSlide);

            article.classList.remove("fade-out");

        }, 250);
    }

    function changeSlide() {

        let next = currentSlide + 1;

        if (next >= slides.length) {
            next = 0;
        }

        showSlide(next);
    }

    function startCarousel() {
        carouselTimer = setInterval(changeSlide, 7000);
    }

    function resetTimer() {
        clearInterval(carouselTimer);
        startCarousel();
    }

    // -------------------------
    // DESKTOP DOTS
    // -------------------------
    if (!mobile) {

        dots.forEach(dot => {

            dot.addEventListener("click", () => {

                resetTimer();

                showSlide(Number(dot.dataset.slide));
            });
        });
    }

    // -------------------------
    // MOBILE SWIPE
    // -------------------------
    if (mobile) {

        article.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        article.addEventListener("touchend", (e) => {

            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) < 40) return;

            let next = currentSlide;

            if (diff > 0) {
                next = currentSlide + 1;
            } else {
                next = currentSlide - 1;
            }

            if (next < 0) next = slides.length - 1;
            if (next >= slides.length) next = 0;

            showSlide(next);
            resetTimer();
        });
    }

    // -------------------------
    // HERO TEXT CHANGE
    // -------------------------
    function makeChange() {
        const span = document.getElementById("willChange");
        if (!span) return;

        span.innerHTML = "Creative";
        span.style.color = "#B22222FF";
    }

    setTimeout(makeChange, 10500);

    // -------------------------
    // INIT
    // -------------------------
    window.addEventListener("load", () => {

        showSlide(0);
        updateProgress(0);
        startCarousel();
    });

})();
