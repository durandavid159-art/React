import { ItemNavbar } from '../itemNavbar/itemNavbar'

export const Navbar = () => (
  <nav>
    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
      <ItemNavbar ItemContent="Inicio" styles="active" />
      <ItemNavbar ItemContent="Sobre mi" styles="other" />
      <ItemNavbar ItemContent="Habilidades" styles="other" />
      <ItemNavbar ItemContent="Contacto" styles="other" />
    </ul>
  </nav>
)