import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import MyProjects from "./myProjects/MyProjects";
import Contacts from "./contacts/Contacts";
import {Route, Routes} from "react-router-dom";


import {ParticlesBack} from "./common/components/particles/Particles";

function App() {



    return (
        <div  className="App">
            <ParticlesBack/>
             <Header/>
            <Routes>
                <Route path={'/'} element={  <Main/>}/>
                <Route path={'/skill'} element={<Skills/>}/>
                <Route path={'/portfolio'} element={<MyProjects/>}/>
                <Route path={'/contact'} element={<Contacts/>}/>

            </Routes>

        </div>
    );
}

export default App;
