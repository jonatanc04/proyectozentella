import { useEffect, useState } from "react";

export const EquipoPalmares = ({ equipo }) => {
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
    <div className="equipo-palmares-cont">
      <div>
        <img src={escudo} alt="Error" />
      </div>
      <div>
        <h1>{equipo.equipo}</h1>
        <h3>Presidente: {equipo.presidente}</h3>
        {equipo.titulos.map((logro, index) => (
            <h5 key={index}>{logro}</h5>
          ))}
      </div>
    </div>
  );
};
