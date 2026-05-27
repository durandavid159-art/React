import React from 'react'
import './Header.css'

export const Header = () => {
    return(
        <header className="header">
            <div className="logo">David Pescador <span>/ dev</span></div>
            <nav>
                <ul>
                <li><a href="">Inicio</a></li>
                <li><a href="">Sobre mí</a></li>
                <li><a href="">Habilidades</a></li>
                <li><a href="">Contacto</a></li>
                </ul>
            </nav>
            </header>
    )
}