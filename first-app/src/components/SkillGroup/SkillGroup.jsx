import './SkillGroup.css'
export const SkillGroup = ({ title = '', item1 = '', item2 = '', item3 = '', item4 = '', img1 = '', img2 = '', img3 = '', img4 = '' }) => (
    <div className="skill-group">
        <h3>{title}</h3>
        <ul>
            {item1 && <li>{img1 && <img src={img1} alt={item1} />}{item1}</li>}
            {item2 && <li>{img2 && <img src={img2} alt={item2} />}{item2}</li>}
            {item3 && <li>{img3 && <img src={img3} alt={item3} />}{item3}</li>}
            {item4 && <li>{img4 && <img src={img4} alt={item4} />}{item4}</li>}
        </ul>
    </div>
)