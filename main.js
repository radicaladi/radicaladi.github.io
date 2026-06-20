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
    <p class="section-title">Professional Bio</p>

    <p>
        Hello, I'm Adrian, a creative software developer from the Southwest United States.
        I enjoy building software that balances technical excellence with thoughtful user experience.
    </p>

    <p>
        My background includes full stack development, cloud technologies,
        enterprise software, and continual professional growth.
    </p>
    ,
    
    <p class="section-title">Résumé</p>

    <p>
        Full Stack Software Developer with experience in Java,
        SpringBoot, JavaScript, AWS, LLMs, software engineering 
        practices, and enterprise-scale applications.<br>
        • JPMorgan Chase & Co - <i>Present</i>
        • Photographer
        • United States Army
    </p>
    ,
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
    ];

    // const para =
    function makeChange() {
        let span = document.getElementById('willChange')
        span.innerHTML = 'Creative'
        span.style.color = '#B22222FF'
    }
    setTimeout(makeChange, 10500);

    // carousel
    let currentSlide = 0;

    render(
        slides[currentSlide],
        document.querySelector('.article')
    );
    function changeSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    render(
        slides[currentSlide],
        document.querySelector('.article')
        );
    }

    setInterval(changeSlide, 7000);

    startCarousel();

})();
