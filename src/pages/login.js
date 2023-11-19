import './login.css'
import logoDark from '../assets/logo/Persona Prep Coloured.png'
import msLogo from '../assets/images/microsoft-logo.png'
import { useState } from 'react';

export default function Login(){

    return(
        <div className='login-umm'>
            <div className='login-container'>
                <div className='login-header'>
                    <span>Login to</span>
                    <img src={logoDark} alt='dark logo'/>
                    with your Microsoft <br /> Account as
                </div>
                <div className='login-slider'>
                    <div className='login-student'>Student</div>
                    <div className='login-corporate'>Corporate</div>
                </div>
                <div className='login-msLogin'>
                    <img src={msLogo} alt='' />
                    <span>Log in with Microsoft</span>
                </div>
            </div>
        </div>
    )
}