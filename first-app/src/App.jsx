import { Header } from './components/Header/Header' 
import {Main} from './components/Main/Main'

export const App = () => {

  return (
    <>
      <Header></Header>
      <Main></Main>

      <footer>
      <h2>Contacto</h2>
        <p>Correo: DavidPescador@gmail.com</p>
        <p>GitHub: <a href="https://github.com/durandavid159-art"  target="_blank" rel="noreferrer">github.com/david</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/feed/"  target="_blank" rel="noreferrer">linkedin.com/in/david</a></p>
      </footer>
    </>
  )
}


