import React from 'react'
import './Footer.css'

export const Footer = () => (
    <footer className="footer">
        <h2>Contacto</h2>
        <p>¿Tienes un proyecto en mente? Hablemos.</p>

        <div className="footer-links">

            <a href="mailto:DavidPescador@gmail.com" target="_blank" rel="noreferrer">
                DavidPescador@gmail.com
            </a>
            <a href="https://github.com/durandavid159-art" target="_blank" rel="noreferrer">
                GitHub
            </a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                LinkedIn
            </a>
        </div>

        <p className="footer-copy">© 2026 David Pescador — Todos los derechos reservados</p>
    </footer>
)