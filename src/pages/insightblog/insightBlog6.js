import React from 'react';
import './insightBlog.css';
import BlogHeader from '../../components/BlogHeader';
import nervousnessImage from '../../assets/images/illustration-cv-mistakes.png';
import Footer from '../../components/footer';
import Navbar from '../../components/Navbar';

export default function Insightblog() {
    return (
        <div>
            <Navbar />
            <div className='insightBlog-container' style={{backgroundColor:'#fdc883'}}>
                <BlogHeader 
                    title="Key to Conquer Interview Nervousness"
                    tag1="INTERVIEW"
                    tag2="NERVOUSNESS"
                    date="February 25, 2024"
                />

                <div className='insightBlog-blogImage'>
                    <img src={nervousnessImage} alt='blog' className='insightBlog-blogImg'/>
                </div>

                <div className='insightBlog-numberedList'>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>1.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Preparation is Key: </span>
                            The more prepared you are, the less anxious you'll feel. Research the company, practice common interview questions, and rehearse your responses. Familiarity breeds confidence.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>2.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Mock Interviews: </span>
                            Practice with mock interviews to simulate the real experience. This not only enhances your preparedness but also desensitizes you to the stress associated with interviews.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>3.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Positive Visualization: </span>
                            Picture yourself walking into the interview room with confidence. Visualization can help reframe nervous energy into positive anticipation, boosting your self-assurance.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>4.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Arrive Early: </span>
                            Arriving early allows you to acclimate to the environment, reducing the anxiety associated with rushing. Use the extra time to review your notes and mentally prepare.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>5.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Reframe Anxiety as Excitement: </span>
                            Instead of labeling your feelings as anxiety, reframe them as excitement. The physiological responses to excitement are similar to nervousness, and this shift in mindset can be empowering.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>6.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Rationalize Negative Thoughts: </span>
                            Identify and challenge negative thoughts. Remind yourself of your achievements and capabilities. Replace self-doubt with positive affirmations to build confidence.
                        </div>
                    </div>
                </div>

                <p>
                    Remember, it's normal to feel nervous before an interview. By implementing these strategies, you can transform that nervous energy into a source of strength, presenting yourself as a confident and capable candidate.
                </p>
            </div>
            <Footer />
        </div>
    )
}
