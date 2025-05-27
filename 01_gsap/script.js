// gsap.from
// gsap.to('.box',{
//     x: 1200,
//     duration: 2,
//     rotation: 360,
//     scale: 0.5,
//     backgroundColor: 'red',
//     borderRadius: '50%',
//     ease: 'bounce',
//     delay: 1,
//     stagger: true,
//     yoyo: true,
//     repeat: -1,
// })

// set timeline
const tl = gsap.timeline();

tl.from('.navbar', {
    y: -30,
    duration: 1,
    opacity: 0,
    delay: 0.5,
})
tl.from('.menu', {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: 0.3,
})