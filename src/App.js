import React, { useState } from 'react';
import { Home, AboutMe, TechStack, Portfolio, Contact } from './pages';
import { Header, Modal, Aside } from './layout';
import './styles/app.css';


function App() {

    const [ModalClose, setModalClose] = useState(false);

    const handleModalClose = () => {
        setModalClose(!ModalClose)
    }

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }


    return (
        <>
            <Header />
            <Aside />
            <Home />
            <AboutMe />
            <TechStack />
            <Portfolio />
            <Contact />
            {/* <Modal isItOpen={ModalClose} updateOpen={handleModalClose} /> */}

        </>
    )
}

export default App;
