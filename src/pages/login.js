import './login.css';
import { useState } from 'react';

export default function Login(){
    // const [selectedOption, setSelectedOption] = useState('student');
    
    // const handleClick = (option) => {
    //     setSelectedOption(option);
    // };
    
    // const sliderStyle = {
    //     transform: selectedOption === 'corporate' ? 'translateX(100%)' : 'translateX(0)',
    // };

    return(
        <div className='umm'>
            <div className='container'>
                <div className='header'>
                    <span>Login to</span>
                    <img src='../assets/logo/Persona Prep Dark.png' alt='dark logo'/>
                    with your Microsoft <br /> Account as
                </div>
                <div className='slider'>
                    <div className='student'>Student</div>
                    <div className='corporate'>Corporate</div>
                </div>
                {/* <div className='slider'>
                    <div className='slider-inner' style={sliderStyle}>
                        <div 
                            className={`student option ${selectedOption === 'student' && 'selected'}`}
                            onClick={() => handleClick('student')}
                        >
                            Student
                        </div>
                        <div
                            className={`corp option ${selectedOption === 'corporate' && 'selected'}`}
                            onClick={() => handleClick('corporate')}
                        >
                            Corporate
                        </div>
                    </div>
                </div> */}
                <div className='ms-login'>
                    <img src='./images/microsoft-logo.png' alt='' />
                    <span>Log in with Microsoft</span>
                </div>
            </div>
        </div>
    )
}