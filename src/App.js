import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route, useNavigate, Navigate } from 'react-router-dom'
import { collection, doc, getDoc, getFirestore, getDocs } from 'firebase/firestore';
import { AuthProvider,useAuth } from './hooks/useAuth';
import LoadingScreen from 'react-loading-screen';
import Logo from "./assets/logo/Persona Prep Dark.png"

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
import './App.css';


function App() {

  const { currentUser } = useAuth();
  const [adminEmails, setAdminEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

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
          setIsAdmin(currentUser && allowedEmails.includes(currentUser.email));
        } else {
          console.log('Emails not allowed');
        }
      } catch (err) {
        console.log('Error fetching admin emails', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminEmails();
  }, [currentUser]);

  if (loading) {
    return <div>
    <LoadingScreen
          loading={true}
          bgColor='#f1f1f1'
          spinnerColor='#000000'
          textColor='#000000'
          logoSrc={Logo}
          text='Loading ...'
        > 
         
     </LoadingScreen>
  </div>;
  }

  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          {/* Index Pages */}

          <Route index element={<Home/>} />
          <Route path="/home" element={<Home />}/>

          {/* Insight Blog Pages */}

          <Route path="/five-top-mistakes" element={<Insightblog />}/>
          <Route path="/reasons-reject-cvs" element={<Insightblog2 />}/>
          <Route path="/cv-design" element={<Insightblog3 />}/>
          <Route path="/interview-mistakes" element={<Insightblog4 />}/>
          <Route path="/university-to-career" element={<Insightblog5 />}/>
          <Route path="/interiew-nerves" element={<Insightblog6 />}/>

          {/* Interview Bank Pages */}

          <Route path="/interviewbank" element={<InterviewBank />}/>
          <Route path="/interviewDisplay" element={<InterviewDisplay />}/>

          {/* Authentication Pages */}

          <Route path="/login" element={<Login />}/>

          {/* User Dashboard */}

          <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/login" />}/>

          {/* Admin Pages */}

          <Route path="/admindash" element={ isAdmin? <AdminDash /> : <Navigate to='/login' />}/>
          <Route path="/userDash" element={isAdmin ? <AUserManageDash /> : <Navigate to="/login" />} />
          <Route path="/AdduserDash" element={isAdmin ? <AAddUserManageDash /> : <Navigate to="/login" />} />
          <Route path="/EdituserDash" element={isAdmin ? <AEditUserManageDash /> : <Navigate to="/login" />} />
          <Route path="/reviews" element={isAdmin ? <UserReviews /> : <Navigate to="/login" />} />
          <Route path="/viewReviews" element={isAdmin ? <ViewReviews /> : <Navigate to="/login" />} />
          <Route path="/interviewEdit" element={isAdmin ? <InterviewBankEdit /> : <Navigate to="/login" />} />
          <Route path="/resumeManage" element={isAdmin ? <ResumeManagement /> : <Navigate to="/login" />} />
          <Route path="/interviewDash" element={isAdmin ? <InterviewBankDash /> : <Navigate to="/login" />} />
          <Route path="/interviewCard" element={isAdmin ? <InterviewCard /> : <Navigate to="/login" />} />

          {/* Form Pages */}

          <Route path="/faculty" element={currentUser ? <FacultyDetails /> : <Navigate to="/login" />}/>
          <Route path="/personalInfo" element={currentUser ? <PersonalInfo /> : <Navigate to="/login" />} />
          <Route path="/contactDetMain" element={currentUser ? <ContactDetails_1 /> : <Navigate to="/login" />} />
          <Route path="/contactDetSocial" element={currentUser ? <ContactDetails_2 /> : <Navigate to="/login" />} />
          <Route path="/school" element={currentUser ? <School1 /> : <Navigate to="/login" />} />
          <Route path="/secondSchool" element={currentUser ? <School2 /> : <Navigate to="/login" />} />
          <Route path="/exams" element={currentUser ? <Education_2 /> : <Navigate to="/login" />} />
          <Route path="/university" element={currentUser ? <UniversityEducation1 /> : <Navigate to="/login" />} />
          <Route path="/secondUniversity" element={currentUser ? <UniversityEducation2 /> : <Navigate to="/login" />} />
          <Route path="/work" element={currentUser ? <WorkExperience1 /> : <Navigate to="/login" />} />
          <Route path="/secondWork" element={currentUser ? <WorkExperience2 /> : <Navigate to="/login" />} />
          <Route path="/project" element={currentUser ? <Projects1 /> : <Navigate to="/login" />} />
          <Route path="/secondProject" element={currentUser ? <Projects2 /> : <Navigate to="/login" />} />
          <Route path="/thirdProject" element={currentUser ? <Projects3 /> : <Navigate to="/login" />} />
          <Route path="/certification" element={currentUser ? <Certification1 /> : <Navigate to="/login" />} />
          <Route path="/secondCertification" element={currentUser ? <Certification2 /> : <Navigate to="/login" />} />
          <Route path="/clubsAndSocs" element={currentUser ? <Club1 /> : <Navigate to="/login" />} />
          <Route path="/Secondclub" element={currentUser ? <Club2 /> : <Navigate to="/login" />} />
          <Route path="/publications" element={currentUser ? <Publications /> : <Navigate to="/login" />} />
          <Route path="/skilltrack" element={currentUser ? <SkillTrack_1 /> : <Navigate to="/login" />} />
          <Route path="/summary" element={currentUser ? <Summary_1 /> : <Navigate to="/login" />} />
          <Route path="/extraInfo" element={currentUser ? <ExtraInformation /> : <Navigate to="/login" />} />
          <Route path="/finalisesummary" element={currentUser ? <FinalseSummary/> : <Navigate to="/login" />} />
          <Route path="/templates" element={currentUser ? <TemplateSelection /> : <Navigate to="/login" />} />
          <Route path="/feedback" element={currentUser ? <CvFeedback /> : <Navigate to="/login" />} />
          <Route path="/interviewgen" element={currentUser ? <InterviewGen /> : <Navigate to="/login" />} />
          <Route path="/viewfeedback" element={currentUser ? <ViewFeedback /> : <Navigate to="/login" />} />


          {/* CV Templates */}

          <Route path="/template1" element={<Template1 />}/>
          
          {/* No Page Found */}

          <Route path="*" element={<NoPage />}/>

          <Route path="/startform" element={<Template />}/>
        </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
