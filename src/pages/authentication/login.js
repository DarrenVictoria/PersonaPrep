import './login.css'
import logoColored from '../../assets/logo/Persona Prep Coloured.png'
import msLogo from '../../assets/images/microsoft-logo.png'
import loginBg from '../../assets/images/Login Background.svg'
import { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import { signInWithPopup} from 'firebase/auth';
import { auth, firestore, microsoftProvider } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { collection, addDoc,doc, getDoc, setDoc, getFirestore, getDocs } from 'firebase/firestore';


export default function Login(){

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(0);
    const [studentTxt, setStudentTxt] = useState('white');
    const [corpTxt, setCorpTxt] = useState('black');
    const [loader, setLoader] = useState({ microsoftLoading: false });
    const [userType, setUserType] = useState('student');
    // const [isAdmin, setIsAdmin] = useState(false);

    const msLoginBtn = {
        color: '#000',
        border: '1px solid #000',
        borderRadius: '15px',
        textTransform: 'none'
    }

    const handleSignInWithMicrosoft = async () => {
        try {
            setLoader(prevState => ({ ...prevState, microsoftLoading: true }));
            const result = await signInWithPopup(auth, microsoftProvider);
                
            // User is signed in.
            const user = result.user;

            // Check if the document already exists
            const studentDetailsCollection = collection(firestore, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, user.email);

            const existingDoc = await getDoc(userDocument);

            if (!existingDoc.exists()) {
                // Document doesn't exist, create it
                await setDoc(userDocument, {
                    uid: user.uid,
                    username: user.displayName,
                    email: user.email,
                });

                console.log('Document written with ID: ', user.displayName);
            } else {
                console.log('Document with the same name already exists. Skipping creation/update.');
            }                             
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
        setUserType('corp');
    }
    const leftClick = () => {
        setToggle(0);
        setCorpTxt('black');
        setStudentTxt('white');
        setUserType('student');
    }

    useEffect(() => {
        console.log(userType);
    }, [userType]);
    

    // const handleClick = (e) => {e.preventDefault(); console.log('hey')}
    const corpSignInWithMicrosoft = async () => {
        try {
            setLoader(prevState => ({ ...prevState, microsoftLoading: true }));
            const result = await signInWithPopup(auth, microsoftProvider);
                
            // User is signed in.
            const user = result.user;                   
            
            const db = getFirestore();
            const adminCol = collection(db, 'adminaccounts');
            const adminDoc = doc(adminCol, 'admins');
            const querySnapshot = await getDoc(adminDoc);

            if(querySnapshot.exists()){
                const allowedEmails = querySnapshot.data().allowedEmails;
                if(allowedEmails.includes(user.email)) navigate('/admindash');
                else console.log('not allowed');
            }
        } catch (error) {
          console.error(error);
        }
        finally{
            setLoader(prevState => ({ ...prevState, microsoftLoading: false })); 
        }
    };

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
                        <Button variant='outlined' style={msLoginBtn} onClick={(userType === 'student')? handleSignInWithMicrosoft : corpSignInWithMicrosoft} ><img src={msLogo} alt='Microsoft' /><b>Log in with Microsoft</b></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}