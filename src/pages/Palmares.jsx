import React from 'react'
import '../styles/palmares.css'
import { EquipoPalmares } from '../comps/EquipoPalmares'

export const Palmares = () => {

  const equipos = [
    {
      equipo: 'Inazuma Japón',
      presidente: 'Javigonro',
      image: 'japon',
      titulos: ['Copa Thunderbreak - 1ª Edición', 'Liga Zentella - 2ª Edición']
    },
    {
      equipo: 'Instituto Mary Times',
      presidente: 'Kalise',
      image: 'mary',
      titulos: ['Liga Zentella - 1ª Edición']
    },
    {
      equipo: 'Neo Japón',
      presidente: 'Rafalol',
      image: 'neo',
      titulos: ['Copa Thunderbreak - 2ª Edición']
    },
    {
      equipo: 'Academia Polaris',
      presidente: 'Nukesito',
      image: 'polaris',
      titulos: ['Liga Chispas - 1ª Edición']
    },
    {
      equipo: 'Big Bang',
      presidente: 'Nilmuñoz',
      image: 'bigbang',
      titulos: ['Liga Chispas - 2ª Edición']
    },
    {
      equipo: 'La Resistencia',
      presidente: 'Gandares Fan Account',
      image: 'resis',
      titulos: ['Eternal Blizzard Cup - 1ª Edición']
    },
    {
      equipo: 'Instituto Shuriken',
      presidente: 'GiceAMV',
      image: 'shuriken',
      titulos: ['Copa Invitacional Duende - 1ª Edición']
    }
  ]

  return (
    <>
      <div className='palmares-container'>
          <h1>Palmarés</h1>
          {equipos.map((equipo, index) => (
            <EquipoPalmares key={index} equipo={equipo} />
          ))}
      </div>
      <div className='separator'></div>
    </>
  )
}
