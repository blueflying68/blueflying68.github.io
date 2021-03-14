//typed
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 30,
        startDelay: 500,
        backDelay: 8000,
        loop: true,
    });
});
//progress bar
function DOMContentLoaded() {
    var progressBar = document.querySelectorAll(".skill-item");
    var time = 2000;

    progressBar.forEach(function(i) {
        let label = i.children[0];
        let line = i.children[1];
        let count = 0;
        let labelTxt = label.children[1];
        let dataCount = labelTxt.getAttribute("data-progress");
        let lineCount = line.children[0];

        let runTime = time / dataCount;

        let animationLineCount = setInterval(function() {
            if (count < dataCount) {
                count++;
                lineCount.style.width = count + '%';
                labelTxt.innerHTML = count + '%';
            }
        }, runTime);
    });
}

function isPartOfElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
}

var oBox = document.getElementById('view-range');
var value = document.getElementsByClassName('percentage')[0].innerHTML;
//console.log(value);

window.addEventListener('scroll', function() {
    var valueNew = document.getElementsByClassName('percentage')[0].innerHTML;
    //console.log(valueNew)
    if (value == valueNew) {
        change();
    }
});

function change() {
    if (isPartOfElementInViewport(oBox)) {
        DOMContentLoaded();
        //oBox = null;
    }
}
//particle
particlesJS("particles-js", { "particles": { "number": { "value": 120, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#666666" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.8, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#999999", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
// animate scroll
$(document).ready(function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            } else {
                $element.removeClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});