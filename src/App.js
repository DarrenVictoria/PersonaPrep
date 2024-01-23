import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './pages/Home'
<<<<<<< Updated upstream
import InsightBank from './pages/InsightBank'
import InterviewBank from './pages/interviewBank'
import Insightblog from "./pages/insightBlog"
import Login from "./pages/login"
=======
import InterviewBank from './pages/interviewbank/InterviewBank'
import InterviewDisplay from './pages/interviewbank/interviewDisplay'
import Insightblog from "./pages/insightblog/insightBlog"
import Login from "./pages/authentication/login"
import Dashboard from "./pages/Dashboard"
>>>>>>> Stashed changes
import NoPage from './pages/NoPage'



import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight





import logo from './logo.svg';
import './App.css';
import Template from "./components/Template"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/startform" element={<Template />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/insightbank" element={<InsightBank />}/>
          <Route path="/interviewbank" element={<InterviewBank />}/>
          <Route path="/interviewDisplay" element={<InterviewDisplay />}/>
          <Route path="/insightblog" element={<Insightblog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
