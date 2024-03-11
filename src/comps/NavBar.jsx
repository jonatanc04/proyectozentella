import React, { useState, useEffect } from 'react';
import '../styles/NavBar.css';
import logo from '../imgs/logo.png';
import inicio from '../imgs/navIcons/destello.png';
import equipos from '../imgs/navIcons/equipos.png';
import login from '../imgs/navIcons/usuario.png';
import trofeo from '../imgs/navIcons/trophy.png';
import clasi from '../imgs/navIcons/clasificacion.png';
import { Link } from 'react-router-dom';

export const NavBar = ({ user, handleLogin }) => {
  const logout = () => {
    handleLogin(null);
  };

  const [userImage, setUserImage] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      if (user !== null) {
        try {
          const image = await import(`../imgs/teamIcons/${user.image}.png`);
          setUserImage(image.default);
        } catch (error) {
          console.error('Error al cargar la imagen:', error);
        }
      }
    };

    fetchUserImage();
  }, [user]);

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
        <Link to='/clasificacion'>
          <h4>Clasificación</h4>
          <img src={clasi} alt='Error al cargar la imagen' />
        </Link>
        <Link to='/palmares'>
          <h4>Palmarés</h4>
          <img src={trofeo} alt='Error al cargar la imagen' />
        </Link>
        {user === null ? (
          <Link to='/acceder'>
            <h4>Acceder</h4>
            <img src={login} alt='Error al cargar la imagen' />
          </Link>
        ) : (
          <Link to='/' onClick={logout}>
            <h4>{user.teamname}</h4>
            {userImage && <img src={userImage} alt='Error al cargar la imagen' />}
          </Link>
        )}
      </div>
    </nav>
  );
};
