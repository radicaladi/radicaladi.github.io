"use strict";

(function () {

    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }

    isMobile() && (
        document.querySelector("body").classList.remove("desktop"),
        document.querySelector("body").classList.add("mobile"),
        document.querySelector(".article").classList.remove("article")
    );

    setTimeout(() => {
        const box = document.getElementById("intro");
        box.style.display = "none";
    }, 4000);

    const render = function (template, node) {
        node.innerHTML = template;
    };

    const slides = [

        `
        <p class="section-title">Professional Bio</p>

        <p>
            Hello, I'm Adrian Brown, a creative software developer from the
            Southwest United States. I enjoy building software that balances
            technical excellence with thoughtful user experience.
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
            Spring Boot, JavaScript, AWS, LLMs, software engineering
            practices, and enterprise-scale applications.
        </p>

        <ul>
            <li>JPMorgan Chase &amp; Co — <i>Present</i></li>
            <li>Photographer</li>
            <li>United States Army</li>
        </ul>
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

    function makeChange() {
        const span = document.getElementById("willChange");

        span.innerHTML = "Creative";
        span.style.color = "#B22222FF";
    }

    setTimeout(makeChange, 10500);

    // -------------------------------------
    // Carousel
    // -------------------------------------

    let currentSlide = 0;

    const article = document.querySelector(".article");
    const dots = document.querySelectorAll(".dot");

    let carouselTimer;

    function showSlide(index) {

        article.classList.add("fade-out");

        setTimeout(() => {

            currentSlide = index;

            render(
                slides[currentSlide],
                article
            );

            dots.forEach(dot =>
                dot.classList.remove("active")
            );

            if (dots[currentSlide]) {
                dots[currentSlide].classList.add("active");
            }

            article.classList.remove("fade-out");

        }, 250);
    }

    function changeSlide() {

        let nextSlide = currentSlide + 1;

        if (nextSlide >= slides.length) {
            nextSlide = 0;
        }

        showSlide(nextSlide);
    }

    function startCarousel() {

        carouselTimer = setInterval(
            changeSlide,
            7000
        );
    }

    dots.forEach(dot => {

        dot.addEventListener("click", () => {

            clearInterval(carouselTimer);

            showSlide(
                Number(dot.dataset.slide)
            );

            startCarousel();
        });

    });

    // Initial render
    render(
        slides[0],
        article
    );

    if (dots[0]) {
        dots[0].classList.add("active");
    }

    currentSlide = 0;

    startCarousel();

})();
