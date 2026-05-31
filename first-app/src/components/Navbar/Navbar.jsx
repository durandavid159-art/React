import { ItemNavbar } from '../itemNavbar/itemNavbar'

export const Navbar = () => (
    <nav>
        <ul>
        <ItemNavbar ItemContent="Inicio" />
        <ItemNavbar ItemContent="Sobre mi" />
        <ItemNavbar ItemContent="Habilidades" />
        <ItemNavbar ItemContent="Contacto" />
        </ul>
    </nav>
)