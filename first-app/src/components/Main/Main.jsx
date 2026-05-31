import React from "react"
import './Main.css'
import { Skills } from './Skills'
import { About } from '../About/About'

export const Main = () =>{
    return(
        <main>
            <div>
                <img src="" alt="foto de perfil" />
            </div>

        <section>
            <h1>Hola, soy David Pescador 👋</h1>
            <p>Tecnólogo en Desarrollo de Software apasionado por el desarrollo web, la programación y las bases de datos.</p>
            <p> Actualmente me encuentro aprendiendo y desarrollando proyectos con Java, HTML, CSS, JavaScript y SQL, enfocado en fortalecer mis habilidades como desarrollador Full Stack.</p> 
        </section>

        <About />

        <Skills/>
    </main>
    )
}