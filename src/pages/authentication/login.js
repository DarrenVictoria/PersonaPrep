import './login.css'
import logoColored from '../../assets/logo/Persona Prep Coloured.png'
import msLogo from '../../assets/images/microsoft-logo.png'
import loginBg from '../../assets/images/Login Background.svg'
import { useState } from 'react';
import { Button } from '@mui/material'
import { signInWithPopup} from 'firebase/auth';
import { auth, microsoftProvider } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';






console.log(loginBg)

export default function Login(){

    const navigate = useNavigate();


    const [toggle, setToggle] = useState(0);
    const [studentTxt, setStudentTxt] = useState('white');
    const [corpTxt, setCorpTxt] = useState('black');
    const [loader, setLoader] = useState({ microsoftLoading: false });

    const handleSignInWithMicrosoft = async () => {
        try {
          setLoader(prevState => ({ ...prevState, microsoftLoading: true }));
          await signInWithPopup(auth, microsoftProvider);
          // User is signed in.
          navigate('/home');
        } catch (error) {
          console.error(error);
        }
        finally{
            setLoader(prevState => ({ ...prevState, microsoftLoading: false })); 
        }
      };

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
        <div style={{backgroundImage: `url('${loginBg}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh'}}>
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
                        <Button variant='outlined' style={msLoginBtn} onClick={handleSignInWithMicrosoft} ><img src={msLogo} alt='Microsoft' /><b>Log in with Microsoft</b></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}