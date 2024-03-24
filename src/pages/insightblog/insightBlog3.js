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
            <div className='insightBlog-container' style={{backgroundColor:'#c5caf9'}}>
                <BlogHeader 
                    title="CV Design Inconsistencies"
                    tag1="CV"
                    tag2="DESIGN"
                    date="February 25, 2024"
                />

                <div className='insightBlog-blogImage'>
                    <img src={cvmistake} alt='blog' className='insightBlog-blogImg'/>
                </div>

                <div className='insightBlog-numberedList'>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>1.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Inadequate Formatting and Presentation: </span>
                            Rejection risks are heightened when your CV suffers from spelling and grammatical errors, inconsistent formatting, and a cluttered layout. Ensure that your document is polished, error-free, and visually organized for a professional presentation.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>2.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Font and Background Colors: </span>
                            The choice of font and background colors, along with overall design aesthetics, significantly influences the visual appeal of your CV. Use a professional and readable font, maintaining a cohesive color scheme that enhances rather than distracts from the content.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>3.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Chronological Order Oversight: </span>
                            Presenting your details in chronological order is crucial for clarity and coherence. Failure to do so can result in a CV that appears disorganized and makes it challenging for recruiters to follow your career progression. Ensure a logical and chronological arrangement of your experiences, education, and achievements.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>4.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Inappropriate Font Sizes: </span>
                            Inconsistencies in font sizes can disrupt the flow of information. Ensure that headers, subheadings, and body text are appropriately sized for hierarchy and readability.
                        </div>
                    </div>
                    <div className='insightBlog-list'>
                        <div className='insightBlog-number'>5.</div>
                        <div className='insightBlog-listDetail'>
                            <span>Overly Elaborate Formatting: </span>
                            While creativity is valued, excessively elaborate formatting, such as complex tables or intricate designs, can hinder readability and may not be compatible with applicant tracking systems (ATS). Go for a clean and professional format that aligns with industry standards.
                        </div>
                    </div>
                </div>

                <p>
                    Consistency and professionalism in CV design are crucial for making a positive impression on recruiters. By addressing these common CV design inconsistencies, you can improve the visual appeal and effectiveness of your CV, increasing your chances of securing job opportunities.
                </p>
            </div>
            <Footer />
        </div>
    )
}
