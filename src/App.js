import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom'
import { collection, doc, getDoc, getFirestore, getDocs } from 'firebase/firestore';

import { AuthProvider,useAuth } from './hooks/useAuth';

import Home from './pages/Home'
import InterviewBank from './pages/interviewbank/InterviewBank'
import InterviewDisplay from './pages/interviewbank/interviewDisplay'
import Insightblog from "./pages/insightblog/insightBlog"
import Insightblog2 from "./pages/insightblog/insightBlog2"
import Insightblog3 from "./pages/insightblog/insightBlog3"
import Insightblog4 from "./pages/insightblog/insightBlog4"
import Insightblog5 from "./pages/insightblog/insightBlog5"
import Insightblog6 from "./pages/insightblog/insightBlog6"





import Login from "./pages/authentication/login"
import Dashboard from "./pages/Dashboard"
import NoPage from './pages/NoPage'
import Template from "./pages/interviewforms/Template"
import AdminDash from "./pages/dashboard/adminDashboard";
import AUserManageDash from "./pages/dashboard/UserManagement";
import AAddUserManageDash from "./pages/dashboard/UserMAddAccount";
import AEditUserManageDash from "./pages/dashboard/UserMEditAccount";
import UserReviews from "./pages/dashboard/UserReviews";
import InterviewBankEdit from "./pages/dashboard/InterviewBankEdit";
import FacultyDetails from "./components/StepperPages/FacultyDetails";
import PersonalInfo from "./components/StepperPages/PersonalInfo";
import ContactDetails_1 from "./components/StepperPages/ContactDetails1";
import ContactDetails_2 from "./components/StepperPages/ContactDetails2";
import School1 from "./components/StepperPages/Education1";
import School2 from "./components/StepperPages/Education1.1";
import Education_2 from "./components/StepperPages/Education2";
import UniversityEducation1 from "./components/StepperPages/UniversityEducation";
import UniversityEducation2 from "./components/StepperPages/UniversityEducation1.1";
import WorkExperience1 from "./components/StepperPages/WorkExperience1";
import WorkExperience2 from "./components/StepperPages/WorkExperience1.1";
import Projects1 from "./components/StepperPages/Projects1";
import Projects2 from "./components/StepperPages/Projects1.1";
import Projects3 from "./components/StepperPages/Projects1.2";
import Certification1 from "./components/StepperPages/Certification1";
import Certification2 from "./components/StepperPages/Certification1.1";
import Club1 from "./components/StepperPages/Clubs";
import Club2 from "./components/StepperPages/Clubs1.1";
import Publications from "./components/StepperPages/Publications";
import SkillTrack_1 from "./components/StepperPages/SkillTrack1";
import Summary_1 from "./components/StepperPages/Summary1";
import ExtraInformation from "./components/StepperPages/ExtraInformation";
import TemplateSelection from "./components/StepperPages/TemplateSelection";
import CvFeedback from "./components/StepperPages/CvFeedback";
import FinalseSummary from "./components/StepperPages/FinaliseSummary"
import ResumeManagement from "./pages/dashboard/ResumeManagement";
import InterviewBankDash from "./pages/dashboard/InterviewBankDash";
import InterviewCard from "./pages/dashboard/InterviewCard";
import InterviewGen from "./pages/interviewgenerator/InterviewGen";
import ViewReviews from "./pages/dashboard/ViewReviews";

import Template1 from "./cvtemplates/template1"

import ViewFeedback from "./pages/dashboard/ViewFeedback"
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight

import logo from './logo.svg';
import './App.css';


function App() {

  const { currentUser } = useAuth();

  const [adminEmails, setAdminEmails] = useState([]);

  useEffect(() => {
    const fetchAdminEmails = async () => {
      try {
        const db = getFirestore();
        const adminCol = collection(db, 'adminaccounts');
        const adminDoc = doc(adminCol, 'admins');
        const querySnapshot = await getDoc(adminDoc);

        if (querySnapshot.exists()) {
          const allowedEmails = querySnapshot.data().allowedEmails;
          setAdminEmails(allowedEmails);
        } else {
          console.log('email not allowed');
        }
      } catch (err) {
        console.log('error fetching admin emails', err.message);
      }
    };

    fetchAdminEmails();
  }, []); 

  const isAdmin = currentUser && adminEmails.includes(currentUser.email);

  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />

          <Route path="/five-top-mistakes" element={<Insightblog />}/>
          <Route path="/reasons-reject-cvs" element={<Insightblog2 />}/>
          <Route path="/cv-design" element={<Insightblog3 />}/>
          <Route path="/interview-mistakes" element={<Insightblog4 />}/>
          <Route path="/university-to-career" element={<Insightblog5 />}/>
          <Route path="/interiew-nerves" element={<Insightblog6 />}/>





          <Route path="/startform" element={<Template />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/interviewbank" element={<InterviewBank />}/>
          <Route path="/interviewDisplay" element={<InterviewDisplay />}/>
         
          <Route path="/login" element={<Login />}/>
          <Route path="/admindash" element={ isAdmin? <AdminDash /> : <Navigate to='/login' />}/>
          <Route path="/userDash" element={<AUserManageDash />}/>
          <Route path="/AdduserDash" element={<AAddUserManageDash />}/>
          <Route path="/EdituserDash" element={<AEditUserManageDash />}/>
          <Route path="/reviews" element={<UserReviews />}/>
          <Route path="/viewReviews" element={<ViewReviews />}/>
          <Route path="/interviewEdit" element={<InterviewBankEdit />}/>
          <Route path="/resumeManage" element={<ResumeManagement />}/>
          <Route path="/interviewDash" element={<InterviewBankDash />}/>
          <Route path="/interviewCard" element={<InterviewCard />}/>
          <Route path="/personalInfo" element={<PersonalInfo />}/>
          <Route path="/contactDetMain" element={<ContactDetails_1 />}/>
          <Route path="/contactDetSocial" element={<ContactDetails_2 />}/>
          <Route path="/school" element={<School1 />}/>
          <Route path="/secondSchool" element={<School2 />}/>
          <Route path="/exams" element={<Education_2 />}/>
          <Route path="/university" element={<UniversityEducation1 />}/>
          <Route path="/secondUniversity" element={<UniversityEducation2 />}/>
          <Route path="/work" element={<WorkExperience1 />}/>
          <Route path="/secondWork" element={<WorkExperience2 />}/>
          <Route path="/project" element={<Projects1 />}/>
          <Route path="/secondProject" element={<Projects2 />}/>
          <Route path="/thirdProject" element={<Projects3 />}/>
          <Route path="/certification" element={<Certification1 />}/>
          <Route path="/secondCertification" element={<Certification2 />}/>
          <Route path="/clubsAndSocs" element={<Club1 />}/>
          <Route path="/Secondclub" element={<Club2 />}/>
          <Route path="/publications" element={<Publications />}/>
          <Route path="/skilltrack" element={<SkillTrack_1 />}/>
          <Route path="/summary" element={<Summary_1 />}/>
          <Route path="/extraInfo" element={<ExtraInformation />}/>
          <Route path="/finalisesummary" element={<FinalseSummary/>}/>
          <Route path="/templates" element={<TemplateSelection />}/>
          <Route path="/feedback" element={<CvFeedback />}/>
          <Route path="/interviewgen" element={<InterviewGen />}/>
          <Route path="/viewfeedback" element={<ViewFeedback />}/>
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



          <Route path="/template1" element={<Template1 />}/>


        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
