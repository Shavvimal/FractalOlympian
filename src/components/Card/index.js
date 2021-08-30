import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import mainBubble from './assets/Bubble_main.svg'
import { TechWord } from '../';

const Card = ({ siteName, description, gifurl, repoLink, siteLink, arrayOfWords, graphic }) => {


    const shuffle = (arr) => {
        let c = arr.length, rand;
        while (0 !== c) {
            rand = Math.floor(Math.random() * c);
            c--;
            [arr[c], arr[rand]] = [
                arr[rand], arr[c]];
        }
        return arr;
    }

    const [ModalClose, setModalClose] = useState(true);

    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }

    const renderTechWords = () => shuffle(arrayOfWords).map((t) => <TechWord key={t} word={t} />)

    return (
        <div  >


            <div class="container border shadow-lg w-full rounded-3xl overflow-hidden bg-white relative ParentCard" onMouseEnter={() => handleModalClose()} onMouseLeave={() => handleModalClose()} >

                <div className={ModalClose ? 'hidden anim' : 'anim absolute flex flex-col w-full h-full justify-center PortCard '}>


                    <div class="grid grid-cols-2 place-items-center mt-20 ">

                        <a href={repoLink}>
                            <div class="flex flex-col bothBubbles ">
                                <div class="m-auto w-full h-full  flex flex-row parentBubblePort">

                                    <img class="w-1/2 h-1/2 PortBubble" src={mainBubble} alt="mainBubble1" />

                                    <svg class="w-1/2 h-1/2 iconPort" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d={graphic ? "M19.207 4.794l.23-.43V0H15.07l-.436.44-2.058 3.925-.646.436H4.58v5.993h4.04l.36.436-4.175 7.98-.24.43V24H8.93l.436-.44 2.07-3.925.644-.436h7.35v-5.993h-4.05l-.36-.438 4.186-7.977z": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"} /></svg>

                                </div>
                                <div class="PortWord flex justify-center">
                                    <h3 class=" border-2 px-3 py-1  rounded-full text-sm text-center text-white font-medium ">{graphic ? "DeviantArt" : "View Repo"}</h3></div>
                            </div> </a>

                        <a href={siteLink}>
                            <div class="flex flex-col">
                                <div class="m-auto w-full h-full  flex flex-row parentBubblePort">

                                    <img class="w-1/2 h-1/2 PortBubble" src={mainBubble} />

                                    <svg class="w-1/2 h-1/2 iconPort" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24"><path d={graphic ? "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" : "M22.55,7.35,18,2.83a.74.74,0,0,0-.54-.23.79.79,0,0,0-.29.06.71.71,0,0,0-.46.7V5.62H14.86a18.63,18.63,0,0,0-2.32.13,11.23,11.23,0,0,0-1.88.36,7.16,7.16,0,0,0-1.46.57,6.27,6.27,0,0,0-1.11.72,4.76,4.76,0,0,0-.81.87,5.17,5.17,0,0,0-.88,2,7.48,7.48,0,0,0-.17,1.06c0,.33,0,.69,0,1.07a5.57,5.57,0,0,0,.21,1.44,8.06,8.06,0,0,0,.45,1.34,12.67,12.67,0,0,0,.58,1.17c.23.41.38.68.47.81l.24.36a.37.37,0,0,0,.31.16l.14,0a.37.37,0,0,0,.24-.4c-.36-2.63-.06-4.49.87-5.57s2.62-1.54,5.16-1.54h1.88V12.4a.71.71,0,0,0,.46.7.77.77,0,0,0,.29.05.68.68,0,0,0,.53-.22l4.53-4.52a.75.75,0,0,0,0-1.06Z M19.51,13.91a.36.36,0,0,0-.41.09,2.53,2.53,0,0,1-.64.44.37.37,0,0,0-.21.34V17.3a1.88,1.88,0,0,1-1.89,1.88H6.57a1.79,1.79,0,0,1-1.33-.55,1.81,1.81,0,0,1-.56-1.33V7.5a1.81,1.81,0,0,1,.56-1.33,1.79,1.79,0,0,1,1.33-.55H7.89a.55.55,0,0,0,.18,0,8.21,8.21,0,0,1,1.57-.71A.34.34,0,0,0,10,4.49a.37.37,0,0,0-.12-.27.36.36,0,0,0-.26-.11h-3a3.24,3.24,0,0,0-2.4,1,3.26,3.26,0,0,0-1,2.39v9.8a3.38,3.38,0,0,0,3.39,3.39h9.79a3.27,3.27,0,0,0,2.4-1,3.31,3.31,0,0,0,1-2.4V14.25A.36.36,0,0,0,19.51,13.91Z"} /></svg>

                                </div>
                                <div class="PortWord flex justify-center">
                                    <h3 class=" border-2 px-3 py-1  rounded-full text-sm text-center text-white font-medium ">{graphic ? "Speedpaint" : "Visit Demo"}</h3></div>
                            </div> </a></div>

                    <h3 class="my-3 text-white ml-4"> Technologies Used: </h3>


                    <div class="flex flex-wrap justify-evenly mx-4 ">

                        {renderTechWords()}



                    </div>

                </div>

                <div class="w-full">
                    <img src={gifurl} alt="gif" class="w-full object-cover" loading="lazy" /></div>





                <div class="container-content p-4">
                    <div class="flex justify-between items-center pb-1">
                        <p class="font-semibold">{siteName}</p>
                    </div>
                </div>
                <p class="px-4 mb-6 leading-5">{description}</p>
                <br />


            </div>

        </div>


    );
}

export default Card;
