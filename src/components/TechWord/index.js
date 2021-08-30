import React, {useState } from 'react';
import './style.css'


const TechWord = ({word}) => {


    return (
        <div class="inline-flex items-center border-2 m-auto px-3  my-2 rounded-full text-sm text-center text-white font-medium hover:bg-purple-500 hover:bg-opacity-40">{word}</div>
    );
}

export default TechWord;
