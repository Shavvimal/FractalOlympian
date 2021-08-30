import React, { useEffect, useRef } from 'react';
import './styleHome.css'
import Asset2 from './assets/Asset2.svg'
import Asset3 from './assets/asAsset 3.svg'
import mainBubble from './assets/Bubble_main.svg'
import { NavLink } from 'react-router-dom';
import {
    bubble1Anim,
    bubble2Anim,
    bubble3Anim,
    bubble4Anim,
    bubble5Anim,
    bubble6Anim,
    bubble7Anim,
    bubble8Anim,
    bubble9Anim,
    bubble11Anim,
    bubble12Anim,
    bubble14Anim,
    bubble15Anim,
    initAnim
} from "./assets/animateHome.js";
import portfolio from "./assets/Icons/image.svg";
import stack from "./assets/Icons/network.svg";
import contact from "./assets/Icons/telegram.svg";
import aboutme from "./assets/Icons/user.svg";



let toloc = (id) => {
    window.location.hash = id
}


const Home = () => {


    let toloc = (id) => {
        window.location.hash = id
    }


    return (


        <section id="homesect" class="slide1 text-white">
            <div class="w-full h-full absolute flex flex-row justify-center">
                <h1 class="mt-28 pl-28 text-8xl">Fractal Olympians</h1>
                <h3 class="pl-28"></h3>
            </div>
            <div class="effect-wrapper m-auto my-auto">

                <div class="layer1">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="layer2">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div>
                                                                <div></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )


}

export default Home;
