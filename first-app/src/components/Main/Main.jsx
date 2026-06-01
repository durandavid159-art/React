import React from "react"
import './Main.css'
import { About } from '../About/About'
import { ProfileImage } from "../ProfileImage/ProfileImage"
import { Hero } from "../Hero/Hero"
import { Skills } from './Skills'

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