import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './comps/NavBar'
import { Inicio } from './pages/Inicio'
import { Equipos } from './pages/Equipos'
import { Login } from './pages/Login'
import { Palmares } from './pages/Palmares'
import { useState } from 'react'
import { Footer } from './comps/Footer'

function App() {

  const [user, setUser] = useState(null)

  const users = [
    {
      username: 'jonatan',
      password: '1234',
      teamname: 'Royal Academy',
      image: 'royal'
    },
    {
      username: 'balmy',
      password: '1234',
      teamname: 'Instituto Zeus',
      image: 'zeus'
    }
  ]

  const equipos = [
    {
      id: 1,
      name: 'Instituto Alpino',
      group: 1,
      image: 'alpino'
    },
    {
      id: 2,
      name: 'Big Bang',
      group: 1,
      image: 'bigbang'
    },
    {
      id: 3,
      name: 'Emperadores Academy',
      group: 1,
      image: 'emper'
    },
    {
      id: 4,
      name: 'Inazuma Japón',
      group: 1,
      image: 'japon'
    },
    {
      id: 5,
      name: 'Inazuma Kids',
      group: 1,
      image: 'kidsgo'
    },
    {
      id: 6,
      name: 'Instituto Kirkwood',
      group: 1,
      image: 'kirkwood'
    },
    {
      id: 7,
      name: 'Orfeo',
      group: 1,
      image: 'orfeo'
    },
    {
      id: 8,
      name: 'Protocolo Omega 2.0',
      group: 1,
      image: 'protocolo'
    },
    {
      id: 9,
      name: 'Resis Time',
      group: 1,
      image: 'marytencia'
    },
    {
      id: 10,
      name: 'Royal Academy',
      group: 1,
      image: 'royal'
    },
    {
      id: 11,
      name: 'Royal Academy Redux',
      group: 1,
      image: 'redux'
    },
    {
      id: 12,
      name: 'Tormenta de Géminis',
      group: 1,
      image: 'geminis'
    },
    {
      id: 13,
      name: 'Academia Polaris',
      group: 2,
      image: 'polaris'
    },
    {
      id: 14,
      name: 'Ángel Oscuro',
      group: 2,
      image: 'angeles'
    },
    {
      id: 15,
      name: 'Caos',
      group: 2,
      image: 'caos'
    },
    {
      id: 16,
      name: 'Dragones de Fuego',
      group: 2,
      image: 'dragones'
    },
    {
      id: 17,
      name: 'Instituto Farm',
      group: 2,
      image: 'farm'
    },
    {
      id: 18,
      name: 'Instituto Universal',
      group: 2,
      image: 'universal'
    },
    {
      id: 19,
      name: 'Little Giants',
      group: 2,
      image: 'little'
    },
    {
      id: 20,
      name: 'Neo Japón',
      group: 2,
      image: 'neo'
    },
    {
      id: 21,
      name: 'Ogre Academy',
      group: 2,
      image: 'ogre'
    },
    {
      id: 22,
      name: 'Instituto Zeus',
      group: 2,
      image: 'zeus'
    }
  ]

  const handleLogin = user => {
    setUser(user)
  }

  return (
    <Router>
      <div className="App">
        <NavBar user={user} handleLogin={handleLogin} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/equipos' element={<Equipos equipos={equipos} />} />
          <Route path='/palmares' element={<Palmares />} />
          <Route path='/acceder' element={<Login users={users} handleLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;