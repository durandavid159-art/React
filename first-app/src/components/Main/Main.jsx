import React from "react"
import './Main.css'
import { About } from '../About/About'
import { Hero } from "../Hero/Hero"
import { Skills } from './Skills'
import { ProfileImage } from "../ProfileImage/ProfileImage"

export const Main = () =>{
    return(
        <main>
            
        <ProfileImage/>
        
        <Hero/>

        <About />

        <Skills/>
        </main>
    )
}