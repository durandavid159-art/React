import React from "react"
import './Main.css'

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

        <section>
            <h2>Sobre mí</h2>
            <p>Soy estudiante de Tecnología en Desarrollo de Software con interés en el desarrollo de aplicaciones web y gestión de bases de datos.</p>
            <p>Me gusta construir proyectos prácticos para mejorar mi lógica de programación, comprensión de estructuras de datos y manejo de tecnologías frontend y backend.</p>
            <p>Actualmente estoy fortaleciendo conocimientos en:</p>
            <ul>
                <li>java</li>
                <li>SQL</li>
                <li>Git y GitHub</li>
                <li>HTML, CSS y JavaScript</li>
                <li>Desarrollo web</li>
            </ul>
            <p>Mi objetivo es seguir creciendo como desarrollador y participar en proyectos reales que me permitan adquirir experiencia profesional.</p>
        </section>

        <section>
            <h2>Habilidades</h2>

            <h3>Lenguajes</h3>
            <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>

            <h3>Bases de datos</h3>
            <ul>
                <li>MySQL</li>
                <li>PostgreSQL</li>
            </ul>

            <h3>Herramientas</h3>
            <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>VS Code</li>
                <li>IntelliJ IDEA</li>
            </ul>
        </section>     
    </main>
    )
}