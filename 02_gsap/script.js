// gsap.from('.page1 .box', {
//   scale: 0,
//   delay:1,
//   duration: 2,
//   rotate: 360,
// });
// gsap.from('.page2 .box', {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
// //   scrollTrigger: '.page2 .box'
//   scrollTrigger: {
//     trigger: '.page2 .box',
//     scroller:'body', 
//     start: 'top 60%',
//     end: 'bottom 20%',
//     scrub: true,
//     markers: true,
//   }
// });
// gsap.from('.page2 h1', {
//     opacity: 0,
//     duration: 2,
//     x:500,
//     scrollTrigger: {
//       trigger: '.page2 h1',
//       scroller: 'body', 
//       start: 'top 50%',
//       scrub: true,
//       markers: true,
//     }
// })
// gsap.from('.page2 h2', {
//     opacity: 0,
//     duration: 2,
//     x:-500,
//     scrollTrigger: {
//       trigger: '.page2 h2',
//       scroller: 'body', 
//       start: 'top 50%',
//       scrub: true,
//       markers: true,
//     }
// })

// gsap.from('.page3 .box', {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: '.page3 .box',
//     scroller: 'body', 
//     start: 'top 60%',
//     end: 'bottom 20%',
//     scrub: true,
//     markers: true,
//   }
// });

gsap.to('.page2 h1', {
    x: -2500,
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        markers: true,
        start: 'top top',
        end: 'bottom top',
        scrub: 2,
        pin: true,
    }
});