import React, { useState } from 'react'
import '../styles/FormLog.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const FormAcceso = ({ users, handleLogin }) => {

	const navigate = useNavigate()
	const { register, formState:{errors}, handleSubmit } = useForm()
	const [error, setError] = useState("")

	const onSubmit = (data) => {
		const userExist = users.find((user) => user.username === data.username && user.password === data.password);

		if (userExist) {
			handleLogin(userExist);
			navigate('/')
		} else {
			setError("Usuario inválido. Revisa tus datos.")
		}
	}

	return (
		<div className='form-log-container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Nombre de usuario:</label>
					<input type='text' {...register('username', { required: 'Debes introducir un nombre de usuario.'})} aria-invalid={errors.username ? "true" : "false"}></input>
				</div>
				<div>
					<label>Contraseña:</label>
					<input type='password' {...register('password', { required: 'Debes introducir una contraseña.'})} aria-invalid={errors.password ? "true" : "false"}></input>
				</div>
				<div>
					<input type='submit' value='Acceder'/>
				</div>
				<div>
					{errors.username && <p id='error'>{errors.username.message}</p>}
					{errors.password && <p id='error'>{errors.password.message}</p>}
					{error && <p>{error}</p>}
				</div>
			</form>
		</div>
	)
}
