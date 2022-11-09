import React, {useState} from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import {Route, Routes} from "react-router-dom";
import {PopUpMe} from "./main/popUp/PopUpMe";

function App() {

    const [showPop, setShowPop] = useState(true)

    return (
        <div className="App">

            <Header/>
            {/*<PopUpMe/>*/}
            <Routes>
                <Route path={'/'} element={showPop ? <PopUpMe setShowPop={setShowPop} /> : <Main setShowPop={setShowPop}/>}/>
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
