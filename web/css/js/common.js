gsap.registerPlugin(ScrollTrigger, SplitText);

// Split the single section's h2s into characters
const split = new SplitText('.line h2', { type: 'chars', charsClass: 'char' });

// Start hidden
gsap.set(split.chars, { scale: 0.8, y: 30, opacity: 0 });

// Reveal on scroll
gsap.to(split.chars, {
    scale: 1,
    y: 0,
    opacity: 1,
    ease: 'power4.out',
    duration: 0.8,
    stagger: 0.02,
    scrollTrigger: {
        trigger: '.line',
        start: 'top 70%',                 // when the section top reaches 70% of viewport
        end: 'center 80%',
        scrub: 1,

    }
});
