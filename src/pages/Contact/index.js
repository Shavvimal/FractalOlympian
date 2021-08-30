import React, { useEffect, useRef } from 'react';
import './style.css'
import { } from "./assets/animate.js"
import mainBubble from './assets/Bubble_main.svg'
import { NavLink } from 'react-router-dom';


const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();


        const options = {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { "Content-Type": "application/json" }
        };

        fetch('/api/*', options)
            .then(r => r.json())
            .then(() => e.target.reset())
            .catch(console.warn)
    };

    let toloc = (id) => {
        window.location.hash = id
    }

    return (
        <>    <a id="contactsect" ></a>
            <div class="w-full flex-col bg-svg  py-10 mt-20 ">

                <div id="contact-card" class=" absolute container border shadow-xl m-1 w-5/6 lg:w-2/3 rounded-xl overflow-hidden mt-10 m-auto bg-white  relative">
                    <div class="container-content p-10 lg:p-20">

                        <h1 class="bodyheadercol text-left text-4xl font-extrabold">Contact</h1>
                        <h2 class="text-left text-2xl py-3" > You can find the pieces on <a>OpenSea</a> </h2>

                    </div> </div>


                <div class="text-white w-auto  border-white mx-10 flex flex-row justify-around mb-10 mt-10">
                    <NavLink to="/AboutMe" activeClassName="current" onClick={() => toloc("AboutSect")}>About</NavLink>
                    <NavLink to="/Portfolio" activeClassName="current" onClick={() => toloc("Techsect")}>Fractals</NavLink>
                    <NavLink to="/Portfolio" activeClassName="current" onClick={() => toloc("portfoliosect")}>Olympus</NavLink>
                    <NavLink to="/Contact" activeClassName="current" onClick={() => toloc("contactsect")}>Contact</NavLink>
                </div>
                <div class="text-white w-auto border-t-2 border-white mx-20 flex flex-row justify-between px-6 lg:px-16 pt-6">
                    <p class="mt-5"> © 2021 Fractals Olympians </p>
                    <svg class="w-12 h-12" fill="white" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="-35 1 511 511.999"><path d="m402.113281 381.308594c-5.847656-12.984375-7.261719-27.773438-3.984375-41.632813l3.441406-14.554687c3.226563-13.652344 4.304688-27.667969 3.203126-41.65625l-4.003907-50.855469c.246094-5.746094 8.207031-14.503906 15.261719-22.246094 11.476562-12.601562 25.757812-28.28125 25.757812-49.046875 0-16.25-8.425781-32.039062-24.363281-45.664062-6.914062-5.910156-13.722656-10.144532-18-12.558594-1.949219-3.953125-3.328125-8.679688-4.878906-13.972656-4.476563-15.296875-10.042969-34.339844-33.394531-49.722656-22.320313-14.699219-40.65625-11.988282-54.046875-10.007813-7.296875 1.078125-13.058594 1.933594-18.824219.371094-4.730469-1.28125-8.941406-4.726563-14.265625-9.089844-10.65625-8.722656-25.25-20.671875-52.871094-20.671875-27.621093 0-42.214843 11.949219-52.867187 20.671875-5.328125 4.363281-9.535156 7.808594-14.265625 9.089844-5.765625 1.5625-11.527344.710937-18.824219-.371094-13.390625-1.980469-31.726562-4.691406-54.050781 10.011719-23.351563 15.378906-28.917969 34.421875-33.394531 49.722656-1.546876 5.292969-2.929688 10.015625-4.875 13.96875-4.28125 2.414062-11.085938 6.648438-18.003907 12.558594-15.9375 13.625-24.363281 29.414062-24.363281 45.664062 0 20.765625 14.28125 36.445313 25.757812 49.046875 7.050782 7.738281 15.007813 16.488281 15.261719 22.234375l-4.003906 50.867188c-1.101563 13.984375-.023437 28 3.203125 41.652344l3.441406 14.558593c3.273438 13.859375 1.859375 28.648438-3.984375 41.632813l-12.042969 26.757812c-8.945312 19.882813-8.605468 42.53125.921876 62.121094l.121093.246094c12.285157 25.257812 37.363281 41.058594 65.449219 41.234375l52.886719.328125c.15625.003906.308593.003906.464843.003906 12.304688 0 24.53125-3.0625 35.382813-8.867188l18.085937-9.671874c13.722657-7.335938 29.984376-7.121094 43.503907.578124l13.265625 7.554688c11.289062 6.429688 24.125 9.832031 37.113281 9.832031l51.980469.007813h.011718c27.851563 0 53.726563-16.1875 65.90625-41.234375 9.539063-19.605469 9.875-42.25.929688-62.132813zm-341.90625-253.46875c2.472657-1.1875 4.574219-3.027344 6.074219-5.320313 5.355469-8.195312 7.847656-16.722656 10.261719-24.972656 3.882812-13.277344 6.949219-23.765625 21.097656-33.085937 12.757813-8.402344 21.316406-7.136719 33.15625-5.386719 9.023437 1.335937 19.25 2.847656 31.054687-.347657 10.929688-2.960937 18.636719-9.269531 25.433594-14.835937 9.472656-7.757813 16.957032-13.886719 33.859375-13.886719 16.902344 0 24.386719 6.128906 33.859375 13.886719 6.800782 5.566406 14.503906 11.875 25.433594 14.835937 11.808594 3.195313 22.035156 1.683594 31.058594.347657 11.839844-1.75 20.394531-3.015625 33.152344 5.386719 14.148437 9.320312 17.214843 19.804687 21.101562 33.085937 2.410156 8.25 4.90625 16.777344 10.261719 24.96875 1.480469 2.273437 3.59375 4.117187 6.03125 5.304687 7.71875 3.753907 29.742187 17.96875 29.742187 33.496094 0 9.148438-9.117187 19.160156-17.9375 28.839844-5.808594 6.378906-12.03125 13.21875-16.558594 20.863281l-20.308593-11.289062c-4.210938-8.125-4.988281-17.59375-5.863281-28.375-1.347657-16.695313-2.878907-35.621094-18.933594-50.917969-18.015625-17.167969-34.988282-15.140625-47.382813-13.660156-9.238281 1.101562-15.921875 1.902344-24.835937-3.53125-10.234375-6.238282-13.0625-12.457032-16.976563-21.066406-2.375-5.226563-5.070312-11.128907-9.515625-17.132813-.089844-.132813-.1875-.261719-.285156-.394531-.027344-.039063-.050781-.074219-.082031-.113282-.050781-.066406-.109375-.125-.160157-.191406-.230468-.300781-.472656-.589844-.730468-.871094-.125-.136718-.253906-.261718-.382813-.394531-.210937-.210937-.421875-.425781-.644531-.628906-.195312-.171875-.394531-.332031-.59375-.496094-.132812-.109375-.257812-.226562-.398438-.332031-.046874-.039062-.101562-.070312-.152343-.105469-.230469-.171875-.46875-.324219-.707031-.480469-.183594-.121093-.363282-.246093-.550782-.355468-.21875-.128906-.441406-.242188-.664062-.359375-.222656-.121094-.445313-.238281-.671875-.34375-.179688-.085938-.363281-.15625-.546875-.230469-.277344-.113281-.550782-.230469-.832032-.328125-.144531-.050781-.289062-.089844-.433593-.132813-.320313-.101562-.640625-.203124-.964844-.28125-.132813-.03125-.269531-.050781-.402344-.078124-.335937-.074219-.671875-.144532-1.007812-.191407-.167969-.023437-.335938-.03125-.503907-.050781-.300781-.03125-.605468-.066406-.90625-.082031-.242187-.011719-.480468-.003907-.722656-.003907-.230468 0-.460937-.007812-.6875.003907-.316406.015625-.628906.050781-.941406.085937-.15625.015625-.316406.023438-.472656.046875-.34375.050781-.6875.121094-1.03125.195313-.125.027344-.25.046875-.375.074218-.332032.082032-.660156.183594-.988282.285157-.136718.042969-.277343.078125-.410156.125-.289062.101562-.570312.222656-.851562.339843-.175782.074219-.355469.140626-.527344.21875-.234375.109376-.460938.234376-.6875.355469-.21875.113281-.4375.222657-.648438.351563-.191406.113281-.378906.238281-.566406.363281-.234375.152344-.46875.304687-.695312.472656-.050782.035157-.105469.066407-.152344.105469-.140625.105469-.265625.226562-.402344.335938-.199218.160156-.394531.320312-.585937.492187-.226563.203125-.4375.417969-.648438.632813-.128906.128906-.257812.253906-.382812.390624-.257813.277344-.496094.570313-.726563.867188-.054687.066406-.113281.125-.164062.195312-.03125.039063-.058594.078126-.085938.117188-.09375.128906-.1875.257812-.277344.386719-4.445312 6.003906-7.144531 11.910156-9.519531 17.136719-3.914062 8.605468-6.738281 14.828124-16.976562 21.066406-8.914063 5.433594-15.59375 4.632812-24.835938 3.53125-12.394531-1.480469-29.367187-3.507813-47.378906 13.65625-16.054687 15.300781-17.585937 34.222656-18.9375 50.917968-.875 10.785157-1.648437 20.253907-5.863281 28.378907l-20.308594 11.289062c-4.523438-7.644531-10.746094-14.484375-16.558594-20.863281-8.816406-9.679688-17.9375-19.691406-17.9375-28.84375 0-15.523438 22.027344-29.738281 29.703125-33.472656zm160.9375-22.265625c4.472657 7.71875 11.101563 15.917969 23.207031 23.296875 17.78125 10.832031 32.941407 9.023437 44.007813 7.699218 10.535156-1.257812 15.339844-1.828124 23.121094 5.585938 7.394531 7.050781 8.515625 16.609375 9.730469 31.621094 1.011718 12.527344 2.160156 26.53125 9.304687 40.09375l-12.058594 82.824218-17.339843 63.804688c-.558594 2.066406-2.066407 2.960938-2.914063 3.3125-.851563.351562-2.546875.777344-4.402344-.289062l-40.675781-23.390626c-2.53125-1.839843-5.667969-2.894531-8.988281-2.863281l-22.992188.261719-22.992187-.261719c-3.328125-.03125-6.457032 1.023438-8.988282 2.863281l-40.675781 23.390626c-1.855469 1.066406-3.554687.640624-4.402343.289062-.847657-.351562-2.355469-1.246094-2.917969-3.3125l-17.335938-63.804688-12.058593-82.820312c7.144531-13.5625 8.292968-27.570312 9.304687-40.097656 1.214844-15.015625 2.335937-24.570313 9.730469-31.621094 7.785156-7.417969 12.589844-6.84375 23.121094-5.585938 11.070312 1.324219 26.230468 3.132813 44.007812-7.699218 12.109375-7.378906 18.738281-15.578125 23.207031-23.296875zm165.097657 351.503906c-7.195313 14.792969-22.472657 24.351563-38.921876 24.351563-.003906 0-.007812 0-.007812 0l-51.980469-.007813c-7.792969 0-15.496093-2.039063-22.269531-5.898437l-13.265625-7.554688c-22.53125-12.832031-49.636719-13.195312-72.503906-.96875l-18.085938 9.675781c-6.59375 3.523438-14.015625 5.355469-21.507812 5.316407l-52.890625-.332032c-16.585938-.101562-31.398438-9.433594-38.648438-24.339844l-.117187-.246093c-5.632813-11.578125-5.832031-24.953125-.546875-36.695313l12.042968-26.753906c8.539063-18.984375 10.609376-40.59375 5.820313-60.851562l-3.441406-14.558594c-2.507813-10.617188-3.347657-21.515625-2.488281-32.394532l3.441406-43.734374 13.585937-7.554688 9.8125 67.378906c.085938.597656.210938 1.191406.367188 1.773438l17.578125 64.683594c2.867187 10.550781 10.304687 19 20.414062 23.175781 10.105469 4.171875 21.335938 3.441406 30.816406-2.007813l38.628907-22.214844 18.898437.214844h.34375l18.898438-.214844 38.625 22.214844c9.484375 5.449219 20.714844 6.183594 30.820312 2.007813 10.109375-4.175781 17.546875-12.625 20.414063-23.175781l17.578125-64.683594c.15625-.582032.28125-1.175782.367187-1.773438l9.8125-67.378906 13.585938 7.554688 3.441406 43.730468c.855469 10.882813.019531 21.78125-2.492187 32.398438l-3.4375 14.558594c-4.789063 20.257812-2.722657 41.867187 5.820312 60.847656l12.042969 26.757812c5.28125 11.742188 5.082031 25.117188-.550781 36.699219zm0 0 m176.359375 211.359375h-19.957031c-8.285156 0-15 6.71875-15 15.003906 0 8.285157 6.714844 15.003907 15 15.003907h19.957031c8.285156 0 15-6.71875 15-15.003907 0-8.285156-6.714844-15.003906-15-15.003906zm0 0" /></svg>
                </div>

            </div>



        </>
    )


}

export default Contact;
