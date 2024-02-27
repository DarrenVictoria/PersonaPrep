import React from 'react';
import './insightBlog.css';
import BlogHeader from '../../components/BlogHeader';
import mistakeImage from '../../assets/images/illustration-cv-mistakes.png';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';

export default function Insightblog() {
    return (
        <div>
            <Navbar />
            <div className='insightBlog-container' style={{backgroundColor:'#708090'}}>
                <BlogHeader 
                    title="Interview Mistake Bank"
                    tag1="INTERVIEW"
                    tag2="MISTAKES"
                    date="February 25, 2024"
                />

                <div className='insightBlog-blogImage'>
                    <img src={mistakeImage} alt='blog' className='insightBlog-blogImg'/>
                </div>

                <div className='insightBlog-numberedList'>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>1.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Dressing Inappropriately: </span>
                            Failing to dress professionally can convey a lack of respect for the interview process and the company's culture.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>2.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Getting to the Interview Late: </span>
                            Punctuality is key. Arriving late suggests disorganization and can create a negative first impression.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>3.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Displaying Negative Body Language: </span>
                            Maintain positive body language, such as good posture and eye contact, to project confidence and professionalism.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>4.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Checking Your Phone: </span>
                            Glancing at your phone is unprofessional and signals disinterest. Turn it off or set it to silent before the interview.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>5.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Knowing Nothing About the Job or Company: </span>
                            Lack of research shows a lack of preparation and interest. Employers expect candidates to understand the company and the role they're applying for.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>6.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Lying on Your Resume: </span>
                            Dishonesty damages credibility. Be truthful about your skills and experiences.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>7.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Interrupting the interviewer: </span>
                            Interrupting the interviewer is seen as disrespectful. Wait for them to finish speaking to show active listening and respect.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>8.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Losing Focus During the Interview: </span>
                            Stay engaged and avoid appearing disinterested or distracted during the interview.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>9.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Lacking Enthusiasm: </span>
                            Express genuine enthusiasm for the role and the company to showcase your interest in the opportunity.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>10.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Following Up Inappropriately: </span>
                            Respect the company's timeline and avoid excessive follow-ups. Send a thoughtful thank-you email after the interview.
                        </div>
                    </div>
                </div>

                <p>
                    Interview mistakes can significantly impact your chances of securing a job offer. By avoiding these common blunders, you can present yourself in the best possible light and increase your likelihood of success.
                </p>
            </div>
            <Footer />
        </div>
    )
}
