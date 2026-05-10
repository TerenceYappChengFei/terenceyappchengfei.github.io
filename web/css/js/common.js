gsap.registerPlugin(ScrollTrigger, SplitText);

const lines = document.querySelectorAll('.line');

lines.forEach((line) => {
    // 1. Target the h2 inside this specific line
    const split = new SplitText(line.querySelectorAll('.h2_animation'), {
        type: 'chars',
        charsClass: 'char'
    });

    gsap.set(split.chars, { scale: 0.8, y: 30, opacity: 0 });

    gsap.to(split.chars, {
        scale: 1,
        y: 0,
        opacity: 1,
        ease: 'power4.out',
        duration: 0.8,
        stagger: 0.02,
        scrollTrigger: {
            trigger: line,      // FIXED: Use the variable 'line', not the string '.line'
            start: 'top 65%',
            end: 'bottom 40%',  // Adjusted to give more scrolling room
            scrub: 2,
            markers: false
        }
    });
});

gsap.fromTo(".fade-in",
    { opacity: 0 }, //FROM
    {
        delay: 0.5,
        opacity: 1,
        duration: 1.2,
    } //TO
);

gsap.fromTo(".start_float_in",
    {
        opacity: 0,
        y: -30,
    },
    {
        delay: 0.5,
        opacity: 1,
        y: 0,
        duration: 1,
    }
);