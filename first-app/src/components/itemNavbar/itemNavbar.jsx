
export const ItemNavbar = ({ ItemContent = 'otro Item', styles = 'other' }) => (

    <li>
        <a className={styles} href={`#${ItemContent.toLowerCase()}`}>
        {ItemContent}
        </a>
    </li>
)