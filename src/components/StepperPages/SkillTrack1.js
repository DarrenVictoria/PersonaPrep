
import React, { useState, useEffect } from 'react';
import '../../pages/interviewforms/Template.css';
import InterviewFormHeader from '../InterviewFormHeader';
import CustomMultilineTextFieldslimited from '../MultilineMaxWordLimit';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { back } from '../BackButton.js';
import { next } from '../NextButton.js';
import { useNavigate } from 'react-router-dom';
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { collection, doc, getFirestore, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from '../../hooks/useAuth.js';


const SkillTrack_1 = () => {

    const { currentUser } = useAuth();
    
    const [leadership, setLeadership] = useState('');
    const [leadershipEx, setLeadershipEx] = useState('');
    const [skillContrib, setSkillContrib] = useState('');
    
    
    
    const handleLeadership = (e) => {
        console.log(`LS => ${e.target.value}`)
        setLeadership(e.target.value)
    };

    const handleLeadershipEx = (e) => {
        console.log(`LE => ${e.target.value}`)
        setLeadershipEx(e.target.value)
    };

    const handleSkillContrib = (e) => {
        console.log(`SC => ${e.target.value}`)
        setSkillContrib(e.target.value)
    };


    //Use state for auto complete component for keySkills
    const CoreSkilldataset = [
        "Programming",
        "Cybersecurity",
        "Cloud Computing",
        "Networking",
        "Data Analysis",
        "Database Management",
        "Web Development",
        "Software Development",
        "System Administration",
        "IT Project Management",
        "Artificial Intelligence",
        "Machine Learning",
        "DevOps",
        "Automation",
        "Virtualization",
        "Information Security",
        "Penetration Testing",
        "Incident Response",
        "Cryptography",
        "Risk Assessment",
        "Threat Detection",
        "IT Governance",
        "Disaster Recovery",
        "Agile Methodologies",
        "Scrum",
        "Continuous Integration/Continuous Deployment (CI/CD)",
        "Version Control (e.g., Git)",
        "Containerization (e.g., Docker)",
        "Microservices",
        "API Development",
        "Scripting",
        "Linux/Unix Administration",
        "Windows Administration",
        "Mobile Development",
        "UI/UX Design",
        "Quality Assurance (QA)",
        "Test Automation",
        "Big Data",
        "Data Warehousing",
        "Business Intelligence (BI)",
        "ITIL Framework",
        "ServiceNow",
        "Enterprise Resource Planning (ERP) Systems",
        "Customer Relationship Management (CRM) Systems",
        "IT Asset Management",
        "Compliance Management",
        "Network Security",
        "Endpoint Security",
        "Security Operations Center (SOC) Operations",
        "Cloud Security"
    ];
    
    const [keySkills, setkeySkills] = useState([]);//usestate for autocomplete keySkills
    const maxSelectionskeySkills = 3;//max value for the autocomplete
    const handlekeySkills = (event, newSkill) => {
        if (newSkill.length <= maxSelectionskeySkills) {
            setkeySkills(newSkill);
        }
    };
    const isOptionDisabledRolesPlayed = (option) => {
        return keySkills.length >= maxSelectionskeySkills && !keySkills.includes(option);
    };
    
    console.log(keySkills);
    

//Use state for auto complete component for SoftSkill
    const SoftSkilldataset = [
        "Communication",
        "Collaboration",
        "Problem-solving",
        "Critical thinking",
        "Adaptability",
        "Creativity",
        "Leadership",
        "Teamwork",
        "Time management",
        "Emotional intelligence",
        "Interpersonal skills",
        "Conflict resolution",
        "Decision making",
        "Flexibility",
        "Resilience",
        "Empathy",
        "Active listening",
        "Open-mindedness",
        "Positivity",
        "Networking",
        "Stress management",
        "Patience",
        "Negotiation",
        "Organization",
        "Presentation skills",
        "Public speaking",
        "Empowerment",
        "Delegation",
        "Motivation",
        "Innovation",
        "Persuasion",
        "Self-awareness",
        "Self-motivation",
        "Self-discipline",
        "Attention to detail",
        "Customer service",
        "Conflict management",
        "Cultural sensitivity",
        "Trustworthiness",
        "Professionalism",
        "Diplomacy",
        "Mentoring",
        "Feedback",
        "Tolerance",
        "Analytical skills",
        "Problem analysis",
        "Advising",
        "Coaching",
        "Inspiration"
    ];
    
    const [SoftSkills, setSoftSkills] = useState([]);//usestate for autocomplete SoftSkills 
    const maxSelectionsSoftSkills = 3;//max value for the autocomplete
    const handleSoftSkills = (event, newSkill) => {
        if (newSkill.length <= maxSelectionsSoftSkills) {
            setSoftSkills(newSkill);
        }
    };
    const isOptionDisabled = (option) => {
        return SoftSkills.length >= maxSelectionsSoftSkills && !SoftSkills.includes(option);
    };
    
    console.log(SoftSkills);


    const navigate = useNavigate();
    const prevPage = () => navigate('/publications');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                leadership,
                leadershipEx,
                skillContrib,
                keySkills,
                SoftSkills
            };
            await sendSkillTrackDataToFirestore(formData);
            navigate('/summary');
        } catch (error) {
            console.error('Error submitting skill track data: ', error);
        }
    };

    const sendSkillTrackDataToFirestore = async (data) => {
        try {
            const db = getFirestore();
            const studentDetailsCollection = collection(db, 'studentdetails');
            const userDocument = doc(studentDetailsCollection, currentUser.email);

            const docSnapshot = await getDoc(userDocument);
            if (docSnapshot.exists()) {
                await setDoc(userDocument, { skillTrack: data }, { merge: true });
            } else {
                console.error('Document does not exist for the current user.');
            }
        } catch (error) {
            console.error('Error adding skill track info to Firestore: ', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const userDocument = doc(collection(db, 'studentdetails'), currentUser.email);
                const docSnapshot = await getDoc(userDocument);

                if (docSnapshot.exists()) {
                    const skillTrackData = docSnapshot.data().skillTrack || {};

                    setLeadership(skillTrackData.leadership || '');
                    setLeadershipEx(skillTrackData.leadershipEx || '');
                    setSkillContrib(skillTrackData.skillContrib || '');
                    setkeySkills(skillTrackData.keySkills || []);
                    setSoftSkills(skillTrackData.SoftSkills || []);
                } else {
                    console.error('Document does not exist for the current user.');
                }
            } catch (error) {
                console.error('Error fetching skill track data from Firestore: ', error);
            }
        };

        fetchData();
    }, [currentUser]);

    
    return(
        <div className="formtemp-page">
            <InterviewFormHeader title='Skill Track' />
            <div className="formtemp-bodyform">
                <Grid container spacing={2} style={{ height: '100%' }}>
                    <Grid xs={12} style={{ backgroundColor: "#D9D9D9", borderRadius: "0px 0px 50px 0px", }}>
                        <form onSubmit={handleSubmit} style={{ height: '100%', position: 'relative' }}>
                            <div style={{ margin: '80px 25px 125px' }}>
                                <div>
                                    <Typography mb={1} mt={3}>What would you say are your core competencies or key skills?,<b>Min 3</b>/ Max 5</Typography>
                                        <Stack spacing={3} maxWidth={1300}>
                                                <Autocomplete
                                                    multiple
                                                    id="tags-outlined"
                                                    options={CoreSkilldataset}
                                                    value={keySkills} 
                                                    onChange={handlekeySkills}
                                                    filterSelectedOptions
                                                    disableCloseOnSelect
                                                    getOptionDisabled={isOptionDisabledRolesPlayed}
                                                    renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        
                                                        placeholder="Pick your job roles"
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "25px", 
                                                                backgroundColor:'white',
                                                                minHeight:"100px"
                                                            },
                                                            "& .MuiChip-label": {
                                                                color: "white",
                                                            },
                                                            "& .MuiChip-deleteIcon": {
                                                                color:"white !important",
                                                            },
                                                            "& .MuiChip-root": {
                                                                backgroundColor:"black",
                                                            },
                                                        }}
                                                    />
                                                    )}
                                                />
                                        </Stack> 
                                    
                                    <Typography mb={1} mt={3}>If applicable, how would you describe your leadership style?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={leadership} onChange={handleLeadership} maxWords={50} isRequired={true}/>
                                    <Typography mb={1} mt={3}>If applicable can you share examples of how you've led teams or projects?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={leadershipEx} onChange={handleLeadershipEx} maxWords={50} isRequired={true}/>
                                    <Typography mb={1} mt={3}> What soft skills do you believe are your strengths?<b>Min 3</b>/ Max 5</Typography>
                                        <Stack spacing={3} maxWidth={1300}>
                                                <Autocomplete
                                                    multiple
                                                    id="tags-outlined"
                                                    options={SoftSkilldataset}
                                                    value={SoftSkills} 
                                                    onChange={handleSoftSkills}
                                                    filterSelectedOptions
                                                    disableCloseOnSelect
                                                    getOptionDisabled={isOptionDisabled}
                                                    renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        
                                                        placeholder="Pick your job roles"
                                                        sx={{
                                                            "& .MuiOutlinedInput-root": {
                                                                borderRadius: "25px", 
                                                                backgroundColor:'white',
                                                                minHeight:"100px"
                                                            },
                                                            "& .MuiChip-label": {
                                                                color: "white",
                                                            },
                                                            "& .MuiChip-deleteIcon": {
                                                                color:"white !important",
                                                            },
                                                            "& .MuiChip-root": {
                                                                backgroundColor:"black",
                                                            },
                                                        }}
                                                    />
                                                    )}
                                                />
                                          </Stack>                 
                                    <Typography mb={1} mt={3}>How do these skills contribute to your overall effectiveness in the workplace?</Typography>
                                    <CustomMultilineTextFieldslimited inputHeight={100} maxWidth={1300} value={skillContrib} onChange={handleSkillContrib} maxWords={50} isRequired={true} mb={10}/>
                                </div>
                            </div>
                            <Grid container spacing={2} style={{position: 'absolute', bottom: 80}}>            
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
    )

}
export default SkillTrack_1