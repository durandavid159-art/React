import './About.css'
import { SkillGroup } from '../SkillGroup/SkillGroup'

export const About = () =>(
    <section className="about" id="sobre-mi">
            <h2>Sobre mí</h2>
            <p>Soy estudiante de Tecnología en Desarrollo de Software con interés en el desarrollo de aplicaciones web y gestión de bases de datos.</p>
            <p>Me gusta construir proyectos prácticos para mejorar mi lógica de programación, comprensión de estructuras de datos y manejo de tecnologías frontend y backend.</p>
            <p>Actualmente estoy fortaleciendo conocimientos en:</p>

            <SkillGroup item1="Java" item2="SQL" item3="Git y GitHub" item4="HTML, CSS y JavaScript" />

            <p>Mi objetivo es seguir creciendo como desarrollador y participar en proyectos reales que me permitan adquirir experiencia profesional.</p>
        </section>
)