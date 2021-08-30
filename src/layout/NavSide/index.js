import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { finalAnim } from "./assets/animate.js"
import './style.css'
import logo from './assets/favicon.png'

const Aside = () => {
  let animHeader = useRef(null)



  useEffect(() => {
    finalAnim(animHeader)
  }, [])


  let toloc = (id) => {
    window.location.hash = id
  }

  return (
    <nav className="animHeader" ref={(el) => (animHeader = el)} id="navtrans"
      class=" lg:flex items-center justify-between w-12 bg-white h-64 my-auto rounded-r-3xl p-1 bg-white shadow-md border md:visible hidden py-10">



      <div class="flex items-center justify-center mt-2 flex-col">
        <NavLink exact to="/" activeClassName="current" onClick={() => toloc("homesect")}>
          <button
            class="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring bg-1 focus:ring-blue-800 focus:ring-offset-white focus:ring-offset-2">
          </button> </NavLink>
      </div>

      <div class="flex items-center justify-center mt-2 flex-col">
        <NavLink to="/AboutMe" href="#" activeClassName="current" onClick={() => toloc("AboutSect")}>
          <button
            class="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring bg-2 focus:ring-blue-800 focus:ring-offset-white focus:ring-offset-2">
          </button> </NavLink>
      </div>

      <div class="flex items-center justify-center mt-2 flex-col">
        <NavLink to="/TechStack" activeClassName="current" onClick={() => toloc("Techsect")}>
          <button
            class="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring bg-3 focus:ring-blue-800 focus:ring-offset-white focus:ring-offset-2">
          </button> </NavLink>
      </div>


      <div class="flex items-center justify-center mt-2 flex-col"> <NavLink to="/Portfolio/Web" activeClassName="current" onClick={() => toloc("portfoliosect")}>
        <button
          class="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring bg-4 focus:ring-blue-800 focus:ring-offset-white focus:ring-offset-2">
        </button> </NavLink>
      </div>


      <div class="flex items-center justify-center mt-2 flex-col"> <NavLink to="/Contact" activeClassName="current" onClick={() => toloc("contactsect")}>
        <button
          class="p-2 mx-auto rounded-full shadow-md  border-indigo-400 hover:bg-blue-800 hover:text-white  focus:outline-none focus:ring bg-5 focus:ring-blue-800 focus:ring-offset-white focus:ring-offset-2">
        </button> </NavLink>
      </div>

    </nav>
  );
}

export default Aside;
