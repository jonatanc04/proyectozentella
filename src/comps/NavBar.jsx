import React from 'react'
import '../styles/NavBar.css'
import logo from '../imgs/logo.png'
import inicio from '../imgs/navIcons/destello.png'
import equipos from '../imgs/navIcons/equipos.png'
import login from '../imgs/navIcons/usuario.png'
import { Link } from 'react-router-dom'

export const NavBar = ({ user, handleLogin }) => {

  const logout = () => {
    handleLogin(null)
  }

  return (
    <nav>
      <div>
        <img src={logo} alt="Error al cargar la imagen" />
      </div>
      <div>
        <Link to='/'>
          <h4>Inicio</h4>
          <img src={inicio} alt='Error al cargar la imagen' />
        </Link>
        <Link to='/equipos'>
          <h4>Equipos</h4>
          <img src={equipos} alt='Error al cargar la imagen' />
        </Link>
        {user === null ? (
          <Link to='/acceder'>
            <h4>Acceder</h4>
            <img src={login} alt='Error al cargar la imagen' />
          </Link>
        ) : (
          <Link to='/' onClick={logout}>
            <h4>{user.username}</h4>
            <img src={login} alt='Error al cargar la imagen' />
          </Link>
        )}
      </div>
    </nav>
  )
}