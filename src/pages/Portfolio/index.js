import React, { useEffect, useRef, useState } from 'react';
import './style.css'
import { NavLink } from 'react-router-dom';
import { } from "./assets/animate.js"
import { Card } from '../../components';
import { Switch, Route } from 'react-router-dom';


const Portfolio = () => {

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











  return (<><a class="mb-10" id="portfoliosect" ></a>



    <div id="portfolio" class="flex flex-col justify-center md:justify-start pt-8 md:pt-12 px-8 md:px-24  lg:px-44 h-auto ">
      <h1 class="bodyheadercol text-left text-4xl font-extrabold">Olympus</h1>
      <h2 class="text-left text-2xl py-3 " > The ancient Greeks had a particular set of beliefs that helped them to understand themselves and the world around them, and they believed in a variety of gods and goddesses. Each Greek god and goddess stood for something, and the ancient Greeks would worship specific gods for different reasons, and each piece was created to represent the ehos of a particular god. </h2>

    </div>


  </>
  )


}

export default Portfolio;
