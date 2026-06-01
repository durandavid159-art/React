import { SkillGroup } from '../SkillGroup/SkillGroup'

import javaImg from '../../assets/iconos/java.png'
import jsImg from '../../assets/iconos/js.png'
import baseImg from '../../assets/iconos/sql-server.png'
import htmlImg from '../../assets/iconos/html-5.png'

import sqlImg from '../../assets/iconos/sql-server.png'
import postgreImg from '../../assets/iconos/postgre.png'

import gitImg from '../../assets/iconos/git.png'
import githubImg from '../../assets/iconos/github.png'



export const Skills = () => (
    <section style={{ gridArea: 'skills', width: '100%'}} id="habilidades">

        <h2>Habilidades</h2>

        <SkillGroup title="Lenguajes" 
                    item1="Java" img1={javaImg} 
                    item2="JavaScript" img2={jsImg}
                    item3="SQL" img3={baseImg}
                    item4="HTML" img4={htmlImg}
        />

        <SkillGroup title="Bases de datos" 
            item1="MySQL" img1={sqlImg} 
            item2="PostgreSQL" img2={postgreImg} 
        />

        <SkillGroup title="Herramientas" 
            item1="Git" img1={gitImg} 
            item2="GitHub" img2={githubImg}
            item3="VS Code" 
            item4="IntelliJ IDEA" 
        />
    </section>
)