document.addEventListener('DOMContentLoaded', function(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);


    gsap.from('.header',{
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power1.out",
    });
    gsap.from('.hero',{
        opacity: 0,
        duration: 1,
    });
    gsap.to(".hero__context",{
        opacity: 1,
        ease: "power1.out",
        delay: 0.5,
    });
    document.querySelectorAll('.faq__item').forEach(item => {
        item.addEventListener('click', function() {
            let box = this.querySelector('.faq__box');
            let shelf = this.querySelector('.faq__shelf');
            let plus = this.querySelector('.faq__plus');
            
            if (!box.classList.contains('active')) {
                // Анімація відкриття
                gsap.fromTo(box, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.4 });
                gsap.to(shelf,{
                    'padding-bottom': '3.2rem',
                    duration: 0.4
                });
                box.classList.add('active');
                plus.classList.add('turn');
            } else {
                // Анімація закриття
                gsap.to(box, { height: 0, opacity: 0, duration: 0.4 });
                gsap.to(shelf,{
                    'padding-bottom': '0',
                    duration: 0.4
                });
                box.classList.remove('active');
                plus.classList.remove('turn');
            }
        });
    });
    gsap.from('.benefits__item-subtext',{
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.benefits__item-subtext',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
        },
    });
    gsap.from('.benefits__ani',{
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.benefits__ani',
            start: 'top 80%',
        },
    });
    gsap.from('.benefits__item-img', {
        x: -200,
        opacity: 0,
        stagger: 0.3,
        rotation: -180,
        scrollTrigger: {
            trigger: '.benefits__item-img',
            start: 'top 50%',
            end: 'top 0%',
            scrub: 2,
            pin: '.benefits',
        }
    });
    gsap.from('.cases__item',{
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        scrollTrigger: {
            trigger: '.cases__item',
            start: 'top 60%',
        }
    });
    gsap.from('.nums__col',{
        height:0,
        stagger: 0.2,
        duration: 2,
        scrollTrigger: {
            trigger: '.nums__col',
            start: 'top 100%',
        }
    });
    gsap.from('.contact__item',{
        opacity:0,
        x:-150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.contact__item',
            start: 'top 60%',
        }
    });
    gsap.from('.green-gradi-item',{
        y: 100,
        stagger: 0.06,
        delay: 0.3,
        duration: 0.6,
        ease: "power1.inOut",
        
    });
    gsap.from('.cta__ani',{
        opacity:0,
        y:150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.cta__ani',
            start: 'top 80%',
        }
    });
    gsap.from('.last-cta__ani',{
        opacity:0,
        y:150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.last-cta__ani',
            start: 'top 80%',
        }
    });
    gsap.from('.cases__ani',{
        opacity:0,
        y:150,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.cases__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.testi__ani',{
        opacity:0,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.testi__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.pac__ani',{
        opacity:0,
        stagger: 0.3,
        duration: 0.7,
        scrollTrigger: {
            trigger: '.pac__ani',
            start: 'top 70%',
        }
    });
    gsap.from('.pac__ite',{
        opacity:0,
        stagger: 0.3,
        duration: 1.5,
        scrollTrigger: {
            trigger: '.pac__ite',
            start: 'top 80%',
        }
    });

    // Select all the elements
    let elements = document.querySelectorAll('.green-gradi-until');

    elements.forEach(el => {
        // Split the text into an array of letters
        let letters = Array.from(el.textContent);

        // Create a document fragment to hold the new structure
        let fragment = document.createDocumentFragment();

        // Create a span for each letter and append it to the fragment
        letters.forEach(letter => {
            let span = document.createElement('span');
            span.className = 'green-gradi-span';
            span.textContent = letter;
            fragment.appendChild(span);
        });

        // Clear the element's text content and append the new structure
        el.textContent = '';
        el.appendChild(fragment);

        gsap.from(el.querySelectorAll('.green-gradi-span'), {
            y: 100,
            opacity: 0,
            stagger: 0.06,
            duration: 0.6,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
            }
        });
    });

    let elementsAside = document.querySelectorAll('.features__item');
    elementsAside.forEach(el => {
        gsap.from(el.querySelectorAll('.aside-ani'), {
            y: 150,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
            }
        });
    });
    let generalEls = document.querySelectorAll('.general__item-cover');
    generalEls.forEach(el => {
        gsap.from(el.querySelectorAll('.general__item'), {
            y: 150,
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: el,
                start: 'top 60%',
            }
        });
    });
    let singleEl = document.querySelectorAll('.single__item');
    singleEl.forEach(el => {
        gsap.from(el, {
            y: 150,
            opacity: 0,
            scrollTrigger: {
                trigger: el,
                start: 'top 90%',
            }
        });
    });
    if (window.innerWidth > 1100) {
        let setupItems = gsap.utils.toArray('.setup__item');
        // Закріплення ('pin') секції '.setup'
        ScrollTrigger.create({
            trigger: '.setup',
            start: '20% top',
            end: '100%',
            // scrub: 3, // Збільшено час "scrub"
            pin: true,
            ease: "power1.out", // Add easing
            // markers: true,
        });

        setupItems.forEach((item, index) => {
            ScrollTrigger.create({
                trigger: item,
                start: 'top 0%',
                scrub: 20,
                end: '100%', // Збільшено відстань між start і end
                onEnter: () => updateClasses(index),
                onEnterBack: () => updateClasses(index),
                // markers: true,
                ease: "power1.out", // Add easing
            });
        });

        function updateClasses(activeIndex) {
            setupItems.forEach((item, index) => {
                item.classList.toggle('setup__item-active', index === activeIndex);
            });
        }
        
        let cursor = document.querySelector('#custom-cursor');
        let cursorClose = document.querySelector('#custom-cursor-close');
        let gifs = document.querySelectorAll('.features__gif');
        let isGifOpen = false;
        gifs.forEach((gif, index) => {
            gif.addEventListener('mouseenter', () => {
                gsap.to(cursor, { autoAlpha: 1 }); // Show the custom cursor
            });

            gif.addEventListener('mouseleave', () => {
                gsap.to(cursor, { autoAlpha: 0 }); // Hide the custom cursor
            });

            gif.addEventListener('mousemove', e => {
                gsap.to(cursor, { x: e.clientX, y: e.clientY }); // Move the custom cursor
                gsap.to(cursorClose, { x: e.clientX, y: e.clientY });
            });
            
            gif.addEventListener('click', () => {
                let parentBside = gif.closest('.features__bside');
                let blacked = document.querySelector('.blacked');
                let body = document.querySelector('body');
                if (!isGifOpen) {
                    gsap.to(cursor, { autoAlpha: 0 }); // Hide the custom cursor
                    gsap.to(cursorClose, { autoAlpha: 1 });
                    if(index % 2 === 0){
                        gsap.to(parentBside, {
                            scale: 1.6, // Zoom in by 60%
                            ease: 'power2.out', // Smooth easing
                            duration: 0.7, // Duration in seconds
                            x: '50%',
                            y: '0%',
                            left: '-50%',
                            top: '-50%',
                            zIndex: 9999,
                        });
                    } else {
                        gsap.to(parentBside, {
                            scale: 1.6, // Zoom in by 60%
                            ease: 'power2.out', // Smooth easing
                            duration: 0.7, // Duration in seconds
                            x: '-50%',
                            y: '0%',
                            left: '50%',
                            top: '-50%',
                            zIndex: 9999,
                        });
                    }
                    gsap.to(blacked, {
                        opacity: 0.7,
                        duration: 0.5,
                        zIndex: 999,
                    });
                    body.classList.add('stopper');
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: gif, offsetY: 290 },
                        ease: 'power2.out'
                    });
                    isGifOpen = true;
                } else {
                    gsap.to(cursor, { autoAlpha: 1 }); // Show the custom cursor
                    gsap.to(cursorClose, { autoAlpha: 0 });
                    gsap.to(parentBside, {
                        scale: 1, // Zoom in by 60%
                        ease: 'power2.out', // Smooth easing
                        duration: 0.7, // Duration in seconds
                        x: '0',
                        y: '0',
                        left: '0%',
                        top: '50%',
                        zIndex: 9999,
                    });
                    gsap.to(blacked, {
                        opacity: 0,
                        duration: 0.5,
                        zIndex: -999,
                    });
                    body.classList.remove('stopper');
                    isGifOpen = false;
                };
            });
        });
    };
});
