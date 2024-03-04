import React from 'react'
import '../styles/login.css'
import { FormAcceso } from '../comps/FormAcceso'

export const Login = ({ users, handleLogin }) => {
  return (
    <div className='login-container'>
        <h1>Iniciar Sesión</h1>
        <FormAcceso users={users} handleLogin={handleLogin} />
    </div>
  )
}
