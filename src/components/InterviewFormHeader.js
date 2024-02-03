import '../pages/interviewforms/Template.css';
import logo from '../assets/logo/Persona Prep Light.png';

const InterviewFormHeader = ({title}) => {
    return ( 
        <div className="formtemp-header-container">
            <div className="logo"><img src={logo} alt="logo" style={{width:'120px'}}/></div>
            <div className="formtemp-variable">
                <p className="formtemp-variablename">{title}</p>
            </div>
        </div>
    );
}
 
export default InterviewFormHeader;