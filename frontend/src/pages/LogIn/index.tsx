import { useState } from 'react';
import React from 'react';
import './css/login.css';

import Logo from '../../asserts/logo.png';

export default function LogIn() {

	return (
		<div className="main-login">
			<div className="left-login">
				<img 
					src={Logo}
					alt="Logo-Tcchest"
					className='left-login-image'
				/>
			</div>

			<div className="right-login">
				<form action="" className="card-login">
					<h1>Login</h1>
					<div className="text-field">
						<label htmlFor="">Email</label>
						<input
							type="email"
							name=""
							id=""
							placeholder='Digite seu e-mail'
						/>
					</div>
					<div className="text-field">
						<label htmlFor="">Senha</label>
						<input
							type="password"
							name=""
							id=""
							placeholder='Digite sua senha'
						/>
					</div>

					<button className="btn-login" type="submit">Login in</button>
				</form>
			</div>

		</div>
	);
}

