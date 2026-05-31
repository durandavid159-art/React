import React from "react"
import './Main.css'
import { Skills } from './Skills'
import { About } from '../About/About'
import { Hero } from "../Hero/Hero"

export const Main = () =>{
    return(
        <main>
            <div>
                <img src="" alt="foto de perfil" />
            </div>

        <Hero/>

        <About />

        <Skills/>
    </main>
    )
}