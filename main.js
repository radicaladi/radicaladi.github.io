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

    let template = '<p>Hello, I\'m Adrian, a creative software developer from the Southwest United States. I\'m lucky to have had the privilege of learning from the wonderful instructors at <a class="support" href="https://codeup.com/" target="_blank">Codeup</a>. Here\'s some of my works.</p>\n' +
        '<p class="salut">Crafted with love</p>' +
        '<ul>' +
        '<li> <a href="https://github.com" target="_blank" rel="noopener">Movie Directory Application</a></li>' +
        '<li> <a href="https://github.com" target="_blank" rel="noopener">Weather Forecast Application</a> </li>' +
        '<li class="zwanzigzweiundzwanzig"> <a href="https://github.com" target="_blank" rel="noopener">Coffee Web Project</a></li>' +
        '</ul>' +
        '<p class="last-para">I\'m available for work. Feel free to contact me !</p>';

    render(template, document.querySelector('.article'));

    // const para =
    function makeChange() {
        let span = document.getElementById('willChange')
        span.innerHTML = 'Creative'
        span.style.color = '#B22222FF'
    }
    setTimeout(makeChange, 10500);

})();