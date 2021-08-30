import React, { useEffect, useRef } from 'react';
import { finalAnim } from "./assets/animate.js"
import './style.css'
import mainBubble from './assets/Bubble_main.svg'
import gsap from "gsap"

const TechBubble = ({TechName, Path}) => {

let randSign = () => {
    if (Math.round(Math.random()) === 0) {return -1}
    else {return 1}
}
    let duration = Math.floor((Math.random() * 4) + 2)
    let displace = randSign() * Math.floor((Math.random() * 7) + 2)

    const bubble1Anim = (elem1) => {
        let tlb1 = gsap.timeline({repeat: -1});
        tlb1.to(elem1, {
            duration: duration,
            y:displace,
            ease: "power2. inout", 
        } );
        tlb1.to(elem1, {
            duration:duration,
            y:0,
            ease: "power2. inout", 
        } )
        }

        let bubble1Anim1 = useRef(null)

    
        useEffect(() => {
            bubble1Anim(bubble1Anim1)
        }, [])



        
    return (
        <div className={TechName.replace(/\s/g, '')} >
        <div class="flex flex-col" 
        className="bubble1Anim1" ref={(el) => (bubble1Anim1 = el)}
        >

            <div class="m-auto w-full h-full  flex flex-row parentBubbleTech">

                <img class="w-1/2 h-1/2 TechBubble" src={mainBubble} alt="mainBubble1" />

                <svg class="w-1/2 h-1/2 iconTech" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d={Path} /></svg>

            </div>
            <div class="techWord flex justify-center">
            <h3 class=" border-2 px-3 py-1 border-white rounded-full text-sm text-center  font-medium  ">{TechName}</h3></div>
        </div>
        </div>
    );
}

export default TechBubble;
