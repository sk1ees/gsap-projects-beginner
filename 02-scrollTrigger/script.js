gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        markers: true,
       
        trigger: "#page1 #box",
        scrub: true,
      }
   

});

gsap.from("#page2 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotate: 360,
    scrollTrigger: {
        markers: true,
       
        trigger: "#page2 #box",
        scrub: true,
      }
   

});