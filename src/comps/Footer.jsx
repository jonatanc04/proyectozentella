import "../styles/Footer.css";
import React, { useState, useEffect } from "react";

export const Footer = ({ equipos }) => {
  const [escudos, setEscudos] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const images = await Promise.all(
        equipos.map(async (equipo) => {
          const image = await import(`../imgs/teamIcons/${equipo.image}.png`);
          return image.default;
        })
      );
      setEscudos(images);
    };

    loadImages();
  }, [equipos]);

  return (
    <footer>
      {escudos.map((escudo, index) => (
        <img key={index} className={equipos[index].image === 'japon' ? "long" : ""} src={escudo} alt="Error" />
      ))}
    </footer>
  );
};
