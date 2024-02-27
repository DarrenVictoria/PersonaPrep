import React from 'react';
import './insightBlog.css';
import BlogHeader from '../../components/BlogHeader';
import universityImage from '../../assets/images/illustration-cv-mistakes.png';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';

export default function Insightblog() {
    return (
        <div>
            <Navbar />
            <div className='insightBlog-container' style={{backgroundColor:'#f9c5ed'}}>
                <BlogHeader 
                    title="Crafting Your Path from University to Career"
                    tag1="UNIVERSITY"
                    tag2="CAREER"
                    date="February 25, 2024"
                />

                <div className='insightBlog-blogImage'>
                    <img src={universityImage} alt='blog' className='insightBlog-blogImg'/>
                </div>

                <p>
                    The journey from university studies to the professional world is a significant step, especially for undergraduates who are still in the process of completing their degrees. Your CV, even in its early stages, plays a vital role in presenting your potential to future employers. Here's a guide crafted to help you navigate this transition with finesse.
                </p>

                <div className='insightBlog-numberedList'>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>1.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Begin with a Strong Foundation: </span>
                            As an undergraduate, your CV might not boast years of professional experience, and that's perfectly fine. Focus on building a solid foundation by highlighting your academic achievements, ongoing coursework, and any relevant projects or assignments.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>2.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Emphasize Transferable Skills: </span>
                            While you may be early in your academic journey, you've likely developed essential transferable skills. Highlight your communication abilities, teamwork, problem-solving skills, and any leadership experiences gained through group projects or extracurricular activities.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>3.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Showcase Academic Achievements: </span>
                            Elevate your academic accomplishments by framing them strategically. Point out notable projects, research endeavors, or coursework that aligns with your career interests. This provides insight into your academic prowess and dedication.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>4.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Leverage Internship and Part-Time Roles: </span>
                            If you've ventured into internships or part-time roles, make them shine on your CV. Detail your responsibilities, achievements, and the practical skills you've gained. Employers appreciate seeing real-world applications of your academic knowledge.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>5.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Tailor Your Profile Summary: </span>
                            Craft an objective statement that conveys your career aspirations. Tailor it to the specific roles you're eyeing, showcasing your commitment to a particular career path even as you complete your degree.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>6.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Embrace Extracurricular Contributions: </span>
                            Your involvement in extracurricular activities speaks volumes. Whether you've held leadership roles in student organizations or contributed to community service, these experiences highlight your holistic development.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>7.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Focus on Continuous Learning: </span>
                            Even in the early stages of your academic journey, showcase your commitment to continuous learning. Include relevant certifications, workshops, or additional courses to demonstrate your eagerness to stay abreast of industry trends.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
