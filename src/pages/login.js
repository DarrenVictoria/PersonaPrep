import './login.css'
import logoColored from '../assets/logo/Persona Prep Coloured.png'
import msLogo from '../assets/images/microsoft-logo.png'
import { useState } from 'react';
import { Button } from '@mui/material';

export default function Login(){
    const [toggle, setToggle] = useState(0);
    const [studentTxt, setStudentTxt] = useState('white');
    const [corpTxt, setCorpTxt] = useState('black');

    const rightClick = () =>{
        setToggle(110);
        setCorpTxt('white');
        setStudentTxt('black');
    }

    const leftClick = () => {
        setToggle(0);
        setCorpTxt('black');
        setStudentTxt('white');
    }

    const msLoginBtn = {
        color: '#000',
        border: '1px solid #000',
        borderRadius: '15px',
        textTransform: 'none'
    }

    return(
        <div className='login-main'>
            <div className='login-container'>
                <div className='login-header'>
                    <span>Login to</span>
                    <img src={logoColored} alt='Logo'/>
                    with your Microsoft <br /> Account as
                </div>
                <div className="login-slider">
                    <div style={{left: `${toggle}px`}}></div>
                    <button onClick={leftClick}>
                        <span style={{color: `${studentTxt}`}}>Student</span>
                    </button>
                    <button onClick={rightClick} id='btn'>
                        <span style={{color: `${corpTxt}`}}>Corporate</span>
                    </button>
                </div>
                <div className='login-msLogin'>
                    <Button variant='outlined' style={msLoginBtn} ><img src={msLogo} alt='Microsoft' />Log in with Microsoft</Button>
                </div>
            </div>
        </div>
    )
}