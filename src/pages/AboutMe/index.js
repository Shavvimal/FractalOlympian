import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"

import myFace2 from './assets/35.gif'

import {
    bubble1Anim,
    bubble2Anim,
    bubble3Anim,
    bubble4Anim,
    bubble1AnimWords
} from "./assets/animate.js"


const AboutMe = () => {





    return (

        <div id="AboutSect" class="raleway mt-12">

            <div class="w-full flex flex-col lg:flex-row flex-wrap">
                {/*  <!-- Section Left --> */}
                <div class="w-full pt-10 bg-red lg:w-2/3 flex flex-col">

                    <div id="left" class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-44">
                        <h1 class="bodyheadercol2 text-left text-4xl font-extrabold">About</h1>
                        <p class="text-left text-xl">The fractal Olympians collection is a selection of 40 unique 3D renders of infinitely complex patterns and parameters, exhibiting a psychedelic and mysteriously alluring self-similarity across a range of scales. Driven by recursion, each piece is itself a universe of surreal dynamics with a mythological undertone. Each piece bears the eponymous name of an Olympian god from ancient Greek mythology.

                        </p>


                    </div>
                </div>
                {/* <!-- Section Right--> */}
                <div class="lg:w-1/3 w-full py-20 mt-14 lg:my-auto overflow-hidden">


                    <div class="relative mx-auto w-96 h-full">





                        <img id="myFace" class="rounded-xl border myFace" src={myFace2} alt="MyFace" />


                    </div>
                </div>




            </div></div>

    )


}

export default AboutMe;
