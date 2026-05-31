
export const SkillGroup = ({ title = '', item1 = '', item2 = '', item3 = '', item4 = '', img1 = '' }) => (
    <div>
        <h3>{title}</h3>
        <ul>
            {item1 && <li>{img1 && <img src={img1} alt={item1} />}{item1}</li>}
            {item2 && <li>{item2}</li>}
            {item3 && <li>{item3}</li>}
            {item4 && <li>{item4}</li>}
        </ul>
    </div>
)