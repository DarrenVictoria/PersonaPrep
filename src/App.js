import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom'

import { AuthProvider,useAuth } from './hooks/useAuth';



import Home from './pages/Home'
import InterviewBank from './pages/interviewbank/InterviewBank'
import InterviewDisplay from './pages/interviewbank/interviewDisplay'
import Insightblog from "./pages/insightblog/insightBlog"
import Login from "./pages/authentication/login"
import Dashboard from "./pages/Dashboard"
import NoPage from './pages/NoPage'
import Template from "./pages/interviewforms/Template"

import TestFacultyDetails from "./components/StepperPages/TestFacultDetails";
import FacultyDetails from "./components/StepperPages/FacultyDetails";
import PersonalInfo from "./components/StepperPages/PersonalInfo";
import ContactDetails_1 from "./components/StepperPages/ContactDetails1";
import ContactDetails_2 from "./components/StepperPages/ContactDetails2";
import Education_1 from "./components/StepperPages/Education1";
import Education_2 from "./components/StepperPages/Education2";
import UniversityEducation from "./components/StepperPages/UniversityEducation";
import WorkExperience from "./components/StepperPages/WorkExperience1";
import Projects_1 from "./components/StepperPages/Projects1";
import Certification from "./components/StepperPages/Certification1";
import Clubs from "./components/StepperPages/Clubs";
import Publications from "./components/StepperPages/Publications";
import SkillTrack_1 from "./components/StepperPages/SkillTrack1";
import Summary_1 from "./components/StepperPages/Summary1";
import ExtraInformation from "./components/StepperPages/ExtraInformation";
import TemplateSelection from "./components/StepperPages/TemplateSelection";
import CvFeedback from "./components/StepperPages/CvFeedback";



import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight





import logo from './logo.svg';
import './App.css';


function App() {

  const { currentUser } = useAuth();
  


  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/startform" element={<Template />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/interviewbank" element={<InterviewBank />}/>
          <Route path="/interviewDisplay" element={<InterviewDisplay />}/>
          <Route path="/insightblog" element={<Insightblog />}/>
          <Route path="/login" element={<Login />}/>

          {/* <Route path="/testFaculty" element={<TestFacultyDetails />}/> */}
          
          <Route path="/personalInfo" element={<PersonalInfo />}/>
          <Route path="/contactDetMain" element={<ContactDetails_1 />}/>
          <Route path="/contactDetSocial" element={<ContactDetails_2 />}/>
          <Route path="/school" element={<Education_1 />}/>
          <Route path="/exams" element={<Education_2 />}/>
          <Route path="/university" element={<UniversityEducation />}/>
          <Route path="/work" element={<WorkExperience />}/>
          <Route path="/project" element={<Projects_1 />}/>
          <Route path="/certification" element={<Certification />}/>
          <Route path="/clubsAndSocs" element={<Clubs />}/>
          <Route path="/publications" element={<Publications />}/>
          <Route path="/skilltrack" element={<SkillTrack_1 />}/>
          <Route path="/summary" element={<Summary_1 />}/>
          <Route path="/extraInfo" element={<ExtraInformation />}/>
          <Route path="/templates" element={<TemplateSelection />}/>
          <Route path="/feedback" element={<CvFeedback />}/>


          <Route
            path="/dashboard"
            element={
              currentUser ? <Dashboard /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/faculty"
            element={
              currentUser ? <FacultyDetails /> : <Navigate to="/login" />
            }
          />


          <Route path="*" element={<NoPage />}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
