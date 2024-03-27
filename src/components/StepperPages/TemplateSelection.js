import React, { useEffect, useState } from 'react';
import './css/TemplateSelection.css';
import Temp1 from '../../assets/images/template1.png'
import Temp2 from '../../assets/images/template2.png'
import Temp3 from '../../assets/images/template3.png'
import Temp4 from '../../assets/images/template4.png'
import Temp5 from '../../assets/images/template5.png'
import Temp6 from '../../assets/images/template6.png'



import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InterviewFormFooter from '../InterviewFormFooter';
import InterviewFormHeader from '../InterviewFormHeader';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { collection, addDoc, getFirestore, query, where, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.js';
import TextField from "@mui/material/TextField";


const TemplateSelection = () => {
    const {currentUser} = useAuth();
    const [template, setTemplate] = useState('');
    const [secondarycolor, setsecondaryColor] = useState('');
    const [primarycolor, setprimaryColor] = useState('');
    const [typography, setTypography] = useState('');

    const navigate = useNavigate();
    const prevPage = () => navigate('/finalisesummary');

    useEffect(() => {
        const fetchData = async () => {
            try{
                const db = getFirestore();
                const studentDetailsCollection = collection(db, 'studentdetails');
                const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
                const existingDoc = querySnapshot.docs[0];

                if(existingDoc){
                    const templateData = existingDoc.data().templateSelection || {};
                    setTemplate(templateData.template || '');
                    setprimaryColor(templateData.cvColor || '');
                    setsecondaryColor(templateData.fontColor || '');
                    setTypography(templateData.typography || '');
                }
            }catch (err) {
                console.log('error fetching data', err.message);
            }
        };
        fetchData();
    }, [currentUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const querySnapshot = await getDocs(query(studentDetailsCollection, where('email', '==', currentUser.email)));
            const existingDoc = querySnapshot.docs[0];

            const formData = {
                template: template,
                cvColor: primarycolor,
                fontColor:secondarycolor,
                typography: typography,
                cvstatus: 'created'
            };

            if(existingDoc){
                const docRef = doc(studentDetailsCollection, existingDoc.id);
                await setDoc(docRef, {templateSelection: formData}, {merge: true});
                console.log('document updated with id', existingDoc.id);
            }
           

            navigate(`/${template}`);
        }catch (err) {
            console.log('error updating details', err.message);
        }
    };

    useEffect(() => {}, [template, primarycolor, secondarycolor, typography])

  return (
    <div className="formtemp-page">
            <InterviewFormHeader title='Template Selection' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <Grid container px={4} pt={4} justifyContent='center' alignItems='center'>
                            <Grid container xs={12} md={2} pr={5}>
                                <Grid item xs={6} md={12}><Typography>CV Template:</Typography></Grid>
                                <Grid item xs={6} md={12} mb={2}>
                                    <TextField type="text" variant="outlined" fullWidth
                                        value={template} 
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder=""
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} md={2} pr={5}>
                                <Grid item xs={6} md={12}><Typography>CV Color:</Typography></Grid>
                                <Grid item xs={6} md={12} mb={2}>
                                    <TextField type="text" variant="outlined" fullWidth
                                        value={primarycolor} 
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder=""
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} md={2} pr={5}>
                                <Grid item xs={6} md={12}><Typography>Font Color:</Typography></Grid>
                                <Grid item xs={6} md={12} mb={2}>
                                    <TextField type="text" variant="outlined" fullWidth
                                        value={secondarycolor} 
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder=""
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                            <Grid container xs={12} md={2} pr={5}>
                                <Grid item xs={6} md={12}><Typography>Font:</Typography></Grid>
                                <Grid item xs={6} md={12} mb={2}>
                                    <TextField type="text" variant="outlined" fullWidth
                                        value={typography} 
                                        InputProps={{ style: {borderRadius: '25px',backgroundColor: 'white'}}} 
                                        placeholder=""
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                    <div className='TemplateSelection-maindiv'>
                                        <div className='TemplateSelection-Container'>
                                            <div className='TemplateSelection-LeftColumn'>
                                                <h2 className="TemplateSelection-TemplateTableHeading">Templates</h2>
                                                <table className="TemplateSelection-TemplateTable">
                                                            <tbody>
                                                                <tr className="TemplateSelection-TemplateRow">
                                                                    <td className="TemplateSelection-TemplateCell-Left">
                                                                        <div className="TemplateSelection-Templatediv FirstRowTemplatediv1">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template1')}}><img src={Temp1} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="TemplateSelection-TemplateCell-Right" style={{opacity:'0.5',pointerEvents:'none'}}>
                                                                        <div className="TemplateSelection-Templatediv FirstRowTemplatediv2">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template2')}}><img src={Temp2} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr className="TemplateSelection-TemplateRow">
                                                                    <td className="TemplateSelection-TemplateCell-Left" style={{opacity:'0.5',pointerEvents:'none'}}>
                                                                        <div className="TemplateSelection-Templatediv SecondRowTemplatediv1">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template3')}}><img src={Temp3} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="TemplateSelection-TemplateCell-Right" style={{opacity:'0.5',pointerEvents:'none'}}>
                                                                        <div className="TemplateSelection-Templatediv SecondRowTemplatediv2">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template4')}}><img src={Temp4} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr className="TemplateSelection-TemplateRow">
                                                                    <td className="TemplateSelection-TemplateCell-Left" style={{opacity:'0.5',pointerEvents:'none'}}>
                                                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv1">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template5')}}><img src={Temp5} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="TemplateSelection-TemplateCell-Right" style={{opacity:'0.5',pointerEvents:'none'}}>
                                                                        <div className="TemplateSelection-Templatediv ThirdRowTemplatediv2">
                                                                            <button onClick={(e) => {e.preventDefault(); setTemplate('template6')}}><img src={Temp6} alt='image'className='TemplateSelection-image'/></button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            
                                                                
                                                            </tbody>
                                                        </table>
                                                        <p>More templates coming soon...</p>
                                            </div>
                                            <div className='TemplateSelection-RightColumn'>
                                                {/*the below is the first div tag with the class name 'TemplateSelection-RightRow' is the Color theme table*/}
                                                <div className='TemplateSelection-RightRow'>
                                                    <div className="TemplateSelection-ResponsiveColorTableContainer">
                                                        <h2 className="TemplateSelection-ColorTableHeading">Color Themes</h2>
                                                        <table className="TemplateSelection-ColorTable">
                                                            <thead>
                                                                <tr>
                                                                    <th className='TemplateSelection-ColorTablecolumnheading'>CV Colour</th>
                                                                    <th className='TemplateSelection-ColorTablecolumnheading'>Font Colour</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setprimaryColor('#deccbb')}} className="TemplateSelection-ColorButton FirstRowColorButton1">Cream</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setsecondaryColor('#ffffff')}} className="TemplateSelection-ColorButton FirstRowColorButton2">Black</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setprimaryColor('#b8d4bd')}} className="TemplateSelection-ColorButton SecondRowColorButton1">Green</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setsecondaryColor('#323232')}} className="TemplateSelection-ColorButton SecondRowColorButton2">Charcoal</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setprimaryColor('#dadada')}} className="TemplateSelection-ColorButton ThirdRowColorButton1">Gray</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setsecondaryColor('#2d4956')}} className="TemplateSelection-ColorButton ThirdRowColorButton2">Blue</button>
                                                                    </td>
                                                                </tr>
                                                                {/* Below i added more sample buttons in the color theme table just to check the scroll bar */}
                                                                <tr>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setprimaryColor('#bf99ba')}} className="TemplateSelection-ColorButton FourthRowColorButton1">Purple</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setsecondaryColor('#553734')}} className="TemplateSelection-ColorButton FourthRowColorButton2">Brown</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setprimaryColor('#a4dcf1')}} className="TemplateSelection-ColorButton FifthRowColorButton1">Blue</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-ColorCell">
                                                                        <button onClick={(e) =>{e.preventDefault(); setsecondaryColor('#19474b')}} className="TemplateSelection-ColorButton FifthRowColorButton2">Green</button>
                                                                    </td>
                                                                </tr>
                                                        
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                    {/*the below is the Second div tag with the class name 'TemplateSelection-RightRow' is the Typography table*/}
                                                <div className='TemplateSelection-RightRow'>
                                                    <div className="TemplateSelection-ResponsiveTypographyTableContainer">
                                                        <h2 className="TemplateSelection-TypographyTableHeading">Typography</h2>
                                                        <table className="TemplateSelection-TypographyTable">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Calibri')}} className="TemplateSelection-TypographyButton FirstRowTypographyButton1">Calibri</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Cambria')}} className="TemplateSelection-TypographyButton FirstRowTypographyButton2">Cambria</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Helvetica')}} className="TemplateSelection-TypographyButton SecondRowTypographyButton1">Helvetica</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Georgia')}} className="TemplateSelection-TypographyButton SecondRowTypographyButton2">Georgia</button>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                         <button onClick={(e) => {e.preventDefault(); setTypography('Lato')}} className="TemplateSelection-TypographyButton FourthRowTypographyButton2">Lato</button>
                                                                    </td>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Garamond')}} className="TemplateSelection-TypographyButton ThirdRowTypographyButton2">Garamond</button>
                                                                    </td>
                                                                </tr>
                                                                {/* Below i added more sample buttons in the typography table  just to check the scroll bar */}
                                                                <tr>
                                                                    <td className="TemplateSelection-TypographyCell">
                                                                        <button onClick={(e) => {e.preventDefault(); setTypography('Trebuchet')}} className="TemplateSelection-TypographyButton FourthRowTypographyButton1">Trebuchet MS</button>
                                                                    </td>
                                                                    
                                                                </tr>
                                                                
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            
                            </div>
                        <Grid container spacing={2} style={{ bottom: 80}}>            
                            <Grid xs={6} paddingLeft={'10px'}>
                                <Button startIcon={<ArrowBackIcon />} style={back} onClick={prevPage}>Go Back</Button>
                            </Grid>
                                
                            <Grid xs={6}>
                                <Button type='submit' style={next}>Next Step</Button>                                    
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </div>
    </div>
  );
};

export default TemplateSelection;