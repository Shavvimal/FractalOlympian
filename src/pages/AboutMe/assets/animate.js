import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export const bubble1Anim = (elem1) => {
let tlb1 = gsap.timeline({repeat: -1});
tlb1.to(elem1, {
    duration: 3,
    y:9,
    ease: "power2. inout", 
} );
tlb1.to(elem1, {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )
}


export const bubble1AnimWords = (elem1) => {
    let tlb5 = gsap.timeline({repeat: -1});
    tlb5.to(elem1, {
        duration: 16,
        rotation: '+=360',
        transformOrigin: '50% -193px',
        ease: "none"
    } );
}
    


export const bubble2Anim = (elem1) => {
    let tlb2 = gsap.timeline({repeat: -1});
    tlb2.to(elem1, {
        duration: 3,
        y:-10,
        ease: "power2. inout", 
    } );
    tlb2.to(elem1, {
        duration:3,
        y:0,
        ease: "power2. inout", 
    } )
    }

export const bubble3Anim = (elem1) => {
let tlb3 = gsap.timeline({repeat: -1});
tlb3.to(elem1, {
    duration: 2.5,
    y:7,
    ease: "power2. inout", 
} );
tlb3.to(elem1, {
    duration:2.5,
    y:0,
    ease: "power2. inout", 
} )
}

export const bubble4Anim = (elem1) => {
let tlb4 = gsap.timeline({repeat: -1});
tlb4.to(elem1, {
    duration: 2,
    y:-5,
    ease: "power2. inout", 
} );
tlb4.to(elem1, {
    duration:2,
    y:0,
    ease: "power2. inout", 
} )
}