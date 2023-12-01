import React from 'react'
import './insightBlog.css'
import BlogHeader from '../components/BlogHeader'
import cvmistake from '../assets/images/illustration-cv-mistakes.png'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'


export default function Insightblog(){
    return(
        <div>
            <Navbar />
            <div className='insightBlog-container'>
                <BlogHeader 
                    title="5 Top Mistakes in CV's"
                    tag1="CV"
                    tag2="MISTAKES"
                    date="November 13, 2023"
                />

                <div className='insightBlog-blogDetails'>
                    <img src={cvmistake} alt='blog' className='insightBlog-blogImg'/>
                    <p>Your CV is often the first impression a potential employer has of you, making it crucial to present yourself in the best light possible. However, certain common mistakes can hinder your chances of landing your dream job. In this post, we'll discuss the top five mistakes to avoid when crafting your CV, ensuring that you showcase your skills and experience effectively.</p>

                    <div className='insightBlog-numberedList'>
                        <div className='insightBlog-list'>
                            <div className='insightBlog-number'>1.</div>
                            <div className='insightBlog-listDetail'>
                                <span>Spelling and Grammar Errors: </span>
                                Spelling and Grammar Errors: A CV riddled with spelling and grammar mistakes can create a negative impression. Proofread your CV multiple times and consider using online tools to ensure it is error-free.
                            </div>
                        </div>
                        <div className='insightBlog-list'>
                            <div className='insightBlog-number'>2.</div>
                            <div className='insightBlog-listDetail'>
                                <span>Lack of Tailoring: </span>
                                Sending the same generic CV to multiple job applications can be a significant pitfall. Tailor your CV to each specific role, emphasizing the skills and experiences that are most relevant to the position you're applying for.</div>
                        </div>
                        <div className='insightBlog-list'>
                            <div className='insightBlog-number'>3.</div>
                            <div className='insightBlog-listDetail'>
                                <span>Overwhelming Length: </span>
                                An excessively long CV can be overwhelming for recruiters. Keep it concise, highlighting the most relevant information and avoiding unnecessary details that may dilute your key qualifications.</div>
                        </div>
                        <div className='insightBlog-list'>
                            <div className='insightBlog-number'>4.</div>
                            <div className='insightBlog-listDetail'>
                                <span>Vague or Unquantified Achievements: </span> 
                                Failing to highlight your achievements or quantifying your impact can make your CV less compelling. Use specific metrics and numbers to demonstrate your accomplishments, showcasing the tangible value you brought to previous roles.</div>
                        </div>
                        <div className='insightBlog-list'>
                            <div className='insightBlog-number'>5.</div>
                            <div className='insightBlog-listDetail'>
                                <span>Unprofessional Formatting: </span>
                                Using an inconsistent or overly complex format can make your CV difficult to read and comprehend. Stick to a clean, professional format, and use bullet points and headers to improve readability and ensure that the most critical information stands out.</div>
                        </div>
                    </div>

                    <p>
                        Crafting an effective CV is crucial for securing your desired job. By avoiding these common mistakes, you can significantly improve your chances of standing out to potential employers. Remember to focus on clear, error-free content that highlights your skills, experiences, and achievements, making your CV a powerful tool in your job search arsenal.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

