import React from 'react'
import '../styles/NavBar.css'
import logo from '../imgs/logo.png'

export const NavBar = () => {
  return (
    <nav>
        <div>
            <img src={logo} alt="Error al cargar la imagen"/>
        </div>
        <div></div>
    </nav>
  )
}