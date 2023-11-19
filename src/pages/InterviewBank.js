import './interviewBank.css'
import TranscriptCard from '../components/TranscriptCard'
import thumbnail from '../assets/images/post-thumbnail.png'
import { useState } from 'react'

export default function InterviewBank(){
    // const [selectedCategory, setSelectedCategory] = useState('');

    // const filterCard = (category) => {
    //     setSelectedCategory(category);
    // }

    return(
        <div className="interviewBank-container">
            <h1 >Interview Bank</h1>
            <div className="interviewBank-topics">
                <h3>Topics</h3>
                <div>
                    {/* <button onClick={() => filterCard('computing')}>Computing</button> */}
                    <button>Computing</button>
                    <button>Business</button>
                    <button>Engineering</button>
                    <button>Science</button>
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
    )
}