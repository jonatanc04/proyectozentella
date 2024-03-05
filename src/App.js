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

  const handleLogin = user => {
    setUser(user)
  }

  return (
    <Router>
      <div className="App">
        <NavBar user={user} handleLogin={handleLogin} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/palmares' element={<Palmares />} />
          <Route path='/acceder' element={<Login users={users} handleLogin={handleLogin} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;