import { SkillGroup } from '../SkillGroup/SkillGroup'
import javaImg from '../../assets/iconos/java.png'
import sqlImg from '../../assets/iconos/sql-server.png'
import git from '../../assets/iconos/git.png'

export const Skills = () => (
    <section>
        <h2>Habilidades</h2>
        <SkillGroup title="Lenguajes" item1="Java" img1={javaImg} item2="JavaScript" item3="SQL" item4="HTML" />
        <SkillGroup title="Bases de datos" item1="MySQL" img1={sqlImg} item2="PostgreSQL" />
        <SkillGroup title="Herramientas" item1="Git" img1={git} item2="GitHub" item3="VS Code" item4="IntelliJ IDEA" />
    </section>
)