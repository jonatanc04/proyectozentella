import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const LinkEquipo = ({ equipo }) => {
  const [escudo, setEscudo] = useState(null);

  useEffect(() => {
    try {
      const loadImage = async () => {
        const image = await import(`../imgs/teamIcons/${equipo.image}.png`);
        setEscudo(image.default);
      };
      loadImage();
    } catch (error) {
      console.error("Error al cargar la imagen:", error);
    }
  }, [equipo.image]);

  return (
    <Link to='/'>
      {equipo.image === 'japon' ? (
        <img className='long' src={escudo} alt="Error" />
      ) : (
        <img src={escudo} alt="Error" />
      )}
      <h4>{equipo.name}</h4>
    </Link>
  )
}
