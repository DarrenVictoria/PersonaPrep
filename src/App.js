import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Routes,Route} from 'react-router-dom'


import Home from './pages/Home'
import InsightBank from './pages/InsightBank'
import InterviewBank from './pages/InterviewBank'
import Insightblog from "./pages/insightBlog"
import Login from "./pages/login"
import Dashboard from "./pages/Dashboard"
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
          <Route path="/insightblog" element={<Insightblog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
