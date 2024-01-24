import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
import { auth, firestore } from './firebase';


import Home from './pages/Home'
import InterviewBank from './pages/interviewbank/InterviewBank'
import InterviewDisplay from './pages/interviewbank/interviewDisplay'
import Insightblog from "./pages/insightblog/insightBlog"
import Login from "./pages/authentication/login"
import Dashboard from "./pages/Dashboard"
import NoPage from './pages/NoPage'
import Template from "./pages/interviewforms/Template"


import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/inter/400.css"; // Specify weight





import logo from './logo.svg';
import './App.css';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/startform" element={<Template />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/interviewbank" element={<InterviewBank />}/>
          <Route path="/interviewDisplay" element={<InterviewDisplay />}/>
          <Route path="/insightblog" element={<Insightblog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
