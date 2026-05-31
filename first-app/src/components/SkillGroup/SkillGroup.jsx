
export const SkillGroup = ({ title = '', item1 = '', item2 = '', item3 = '', item4 = '' }) => (
    <div>
        <h3>{title}</h3>
        <ul>
            {item1 && <li>{item1}</li>}
            {item2 && <li>{item2}</li>}
            {item3 && <li>{item3}</li>}
            {item4 && <li>{item4}</li>}
        </ul>
    </div>
)