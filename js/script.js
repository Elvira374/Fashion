'use strict';

window.addEventListener('load', function () {
    // slider
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let index = 0;

    function activeSlide(n) {
        for (let slide of slides) {
            slide.classList.remove('active');
        }
        slides[n].classList.add('active');
    }

    function activeDot(n) {
        for (let dot of dots) {
            dot.classList.remove('activeDot');
        }
        dots[n].classList.add('activeDot');
    }

    function prepareCurentSlide(ind) {
        activeDot(ind);
        activeSlide(ind);
    }

    function nextSlide() {
        if(index == slides.length - 1) {
            index = 0;
            prepareCurentSlide(index);
        } else {
            index++;
            prepareCurentSlide(index);
        }
    }

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
            index = indexDot;
            prepareCurentSlide(index);
        });
    });

    setInterval(nextSlide, 20000);
    

    

    // появление
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    let elements = document.querySelectorAll('.element-animation');
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);

   
    for (let elem of elements) {
        observer.observe(elem);
    }
    
    if (document.documentElement.clientWidth < 770) {
        for (let elem of elements) {
            elem.removeAttribute('class');
        }
    }

    //menu
    document.getElementById('openBtn').addEventListener('click', function() {
        document.getElementById("mySidenav").style.height = "100%";
    });
    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById("mySidenav").style.height = "0";
    });
});