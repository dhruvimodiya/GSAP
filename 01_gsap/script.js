// gsap.from
gsap.to('.box',{
    x: 1200,
    duration: 2,
    rotation: 360,
    scale: 0.5,
    backgroundColor: 'red',
    borderRadius: '50%',
    ease: 'bounce',
    delay: 1,
    stagger: true,
    yoyo: true,
    repeat: -1,
})