import React from 'react'
import '../styles/equipos.css'
import { LinkEquipo } from '../comps/LinkEquipo'

export const Equipos = ({equipos}) => {
  return (
    <div className='equipos-container'>
        <h1>Equipos</h1>
        <main>
          <div>
            <h2>Grupo 1</h2>
            <div>
            {equipos
            .filter(equipo => equipo.group === 1)
            .map((equipo, index) => (
              <LinkEquipo key={index} equipo={equipo} />
            ))}
            </div>
          </div>
          <div>
            <h2>Grupo 2</h2>
            <div>
            {equipos
            .filter(equipo => equipo.group === 2)
            .map((equipo, index) => (
              <LinkEquipo key={index} equipo={equipo} />
            ))}
            </div>
          </div>
        </main>
    </div>
  )
}
