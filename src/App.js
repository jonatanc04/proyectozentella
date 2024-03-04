import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './comps/NavBar'
import { Inicio } from './pages/Inicio'
import { Equipos } from './pages/Equipos'
import { Login } from './pages/Login'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState(null)

  const users = [
    {
      username: 'RoyalAcademyLZ',
      password: 'adminLZweb'
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
          <Route path='/acceder' element={<Login users={users} handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;