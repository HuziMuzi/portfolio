import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Route, Routes} from "react-router-dom";
import {PopUpMe} from "./main/popUp/PopUpMe";


import Dots from './assets/vanta.dots.min'
import {ParticlesBack} from "./common/components/particles/Particles";

function App() {

    const [showPop, setShowPop] = useState(false)

    // const [vantaEffect, setVantaEffect] = useState(null)
    //
    // const myRef = useRef(null)
    //
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         // @ts-ignore
    //         setVantaEffect(Dots({
    //             el: myRef.current,
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0x333333,
    //             color2: 0x333333,
    //             backgroundColor: 0xf6fbff,
    //             size: 5.40,
    //             spacing: 100.00,
    //             showLines: false
    //         }))
    //     }
    //     return () => {
    //         if (vantaEffect) {
    //             vantaEffect.destroy()
    //         }
    //     }
    // }, [vantaEffect])


    return (
        <div  className="App">
            <ParticlesBack/>

            { !showPop &&  <Header/>}
            {/*<Header/>*/}
            {/*<PopUpMe/>*/}
            <Routes>
                <Route path={'/'} element={showPop ? <PopUpMe setShowPop={setShowPop}/> : <Main setShowPop={setShowPop}/>}/>
                <Route path={'/skill'} element={<Skills/>}/>
                <Route path={'/portfolio'} element={<MyProjects/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>

            </Routes>


            {/*<Header/>*/}
            {/*<Main/>*/}
            {/*<Skills/>*/}
            {/*<MyProjects/>*/}
            {/*<Contacts/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
