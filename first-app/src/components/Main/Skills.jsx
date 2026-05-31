import { SkillGroup } from '../SkillGroup/SkillGroup'

export const Skills = () => (
    <section>
        <h2>Habilidades</h2>
        <SkillGroup title="Lenguajes" item1="Java" item2="JavaScript" item3="SQL" item4="HTML" />
        <SkillGroup title="Bases de datos" item1="MySQL" item2="PostgreSQL" />
        <SkillGroup title="Herramientas" item1="Git" item2="GitHub" item3="VS Code" item4="IntelliJ IDEA" />
    </section>
)