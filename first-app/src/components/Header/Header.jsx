import React from 'react'
import './Header.css'
import { Navbar } from '../Navbar/Navbar'

export const Header = () => {
    return(
        <header className="header">
            <div className="logo">David Pescador <span>/ dev</span></div>

            <Navbar />
            
        </header>
    )
}