import './interviewBank.css'
import TranscriptCard from '../../components/TranscriptCard'
import thumbnail from '../assets/images/post-thumbnail.png'
import { useState } from 'react'
import Footer from '../../components/nav-footer/footer'
import NavBar from '../../components/nav-footer/Navbar'
import { Button, styled } from '@mui/material'

const TopicsBtn = styled(Button)(({theme}) => ({
    fontSize: '1.5vw',
    color: '#fff',
    backgroundColor: '#000',
    border: 'none',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '3vw'
    },
    ':hover': {
        backgroundColor: '#000',
        border: 'none',
    }
}))

export default function InterviewBank(){
    // const [selectedCategory, setSelectedCategory] = useState('');
    // const filterCard = (category) => {
    //     setSelectedCategory(category);
    // }

    return(
        <div>
            <NavBar />
            <div className="interviewBank-container">
                <h1 >Interview Bank</h1>
                <div className="interviewBank-topics">
                    <h3>Topics</h3>
                    <div>
                        {/* <button onClick={() => filterCard('computing')}>Computing</button> */}
                        <TopicsBtn variant='outlined'>Computing</TopicsBtn>
                        <TopicsBtn variant='outlined'>Business</TopicsBtn>
                        <TopicsBtn variant='outlined'>Engineering</TopicsBtn>
                        <TopicsBtn variant='outlined'>Science</TopicsBtn>
                    </div>
                </div>

                <div className="interviewBank-transcript">
                    <h3>Interview Transcripts</h3>
                    <TranscriptCard 
                        // category={selectedCategory}
                        name="SOFTWARE ENGINEER"
                        date="AUGUST 13, 2023"
                        position="FULL STACK DEV POSITON [VIRTUSA]"
                        detail="An interview between a software engineer and Virtusa for the role of a full stack developer"
                        path={thumbnail}
                    />
                    <TranscriptCard 
                        // category={selectedCategory}
                        name="SOFTWARE ENGINEER"
                        date="AUGUST 13, 2023"
                        position="FULL STACK DEV POSITON [VIRTUSA]"
                        detail="An interview between a software engineer and Virtusa for the role of a full stack developer"
                        path={thumbnail}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}