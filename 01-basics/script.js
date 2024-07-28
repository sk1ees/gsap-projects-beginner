// (1) animating-the-box
// ------------------------------------->
// gsap.to --> animate the element from initial to final postion 
// gsap.from --> animate the element from final to initial position

gsap.to("#box1", {
    x: 1200,
    duration: 2,
    delay: 1,
    rotate: 360, //rotation property
    backgroundColor: "blue", //camelcase is necessary to implement the css-property

    borderRadius: "50%", //replacing the first-letter with the capital-letter after every '-' css property

    scale: 0.5, // scale is used to manipulate the size
});

gsap.to("#box2", {
    x: 500,

    borderRadius: "100%",
    duration: 2,
    delay: 1,

});


//(2) TEXT-ANIMATION with STAGGER

gsap.from(".text-animation h1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1,
    stagger: 0.3 //stagger: time -- it basically used to animate one-by-one
});

//(3) BOX-ANIMATION WITH REPEAT & YOYO

gsap.to(".box", {
    x: 1200,
    duration: 1,
    delay: 1,
    rotate: 360,
    repeat: -1, // for repeating {nth} time [-1 for infinity]
    yoyo: true, //helps the element to come back to its previous state

});

// (4) gsap-timeline 

let timeline = gsap.timeline();

//type of async 

// the next animation will be started when the previous animation is completed

timeline.to(".box-1", {
    x: 500,
    duration: 0.5,
    delay: 1,
})
timeline.to(".box-2", {
    x: 500,
    duration: 0.5,

})
timeline.to(".box-3", {
    x: 500,
    duration: 0.5,

})

// (5) NAVBAR-ANIMATION 

var navbarAnimate = gsap.timeline();

navbarAnimate.from(".logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 1,
})
navbarAnimate.from(".nav-items li", {
    y: -30,
    opacity: 0,
    duration: 0.4,

    stagger: 0.2,
})
navbarAnimate.from(".headers h1", {
    x: -50,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
})
navbarAnimate.to(".headers h1", {
    x: 50,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    color: "red",
})