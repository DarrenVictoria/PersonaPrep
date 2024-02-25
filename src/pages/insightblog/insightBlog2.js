import React from 'react';
import './insightBlog.css';
import BlogHeader from '../../components/BlogHeader';
import cvmistake from '../../assets/images/illustration-cv-mistakes.png';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';

export default function Insightblog() {
    return (
        <div>
            <Navbar />
            <div className='insightBlog-container'style={{backgroundColor:'#c5f9e7'}}>
                <BlogHeader 
                    title="Reasons for CV Rejection"
                    tag1="CV"
                    tag2="REJECTION"
                    date="February 25, 2024"
                />

                <div className='insightBlog-blogImage'>
                    <img src={cvmistake} alt='blog' className='insightBlog-blogImg'/>
                </div>

                <div className='insightBlog-numberedList'>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>1.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Length of CV: </span>
                            A major reason for CV rejection is excessive length. Fresh graduates, keep it short - ideally one page, max two. Recruiters value concise snapshots. Make every word count, focusing on key skills and achievements. A brief, impactful CV boosts your chances of landing that interview.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>2.</div>
                        <div className='insightBlog-listDetail'>
                            <span>First impression: </span>
                            Your CV profile serves as your introduction to recruiters, often being the first element they encounter. A compelling profile creates a positive and memorable first impression. If it falls short, recruiters may not be motivated to explore your CV further, potentially leading to rejection.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>3.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Lack of Quantifiable Achievements: </span>
                            Mere job descriptions without quantifiable achievements can weaken your CV. Highlight accomplishments, using numbers or percentages to showcase the impact of your work. This not only adds credibility but also provides a clearer picture of your contributions to potential employers.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>4.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Failure to Showcase Skills: </span>
                            If your profile does not effectively showcase the skills relevant to the job, recruiters may assume you lack the necessary qualifications. Align your skills with the job requirements.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>5.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Poor Formatting and Presentation: </span>
                            A cluttered or poorly formatted CV can be hard to read and may give the impression of a lack of attention to detail. Ensure your CV is well-organized, with consistent formatting.
                        </div>
                    </div>
                </div>

                <p>
                    Crafting an effective CV is crucial for securing your desired job. By addressing these common reasons for CV rejection, you can significantly improve your chances of standing out to potential employers. Remember to focus on clarity, conciseness, and relevance when crafting each section of your CV.
                </p>
            </div>
            <Footer />
        </div>
    )
}
