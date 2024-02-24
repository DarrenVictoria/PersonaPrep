import './interviewBank.css'
import TranscriptCard from '../../components/TranscriptCard'
import thumbnail from '../../assets/images/post-thumbnail.png'
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import NavBar from '../../components/Navbar'
import { Button, styled } from '@mui/material'
import { collection, getFirestore, query, getDocs, orderBy } from 'firebase/firestore';

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
    const [interviewData, setInterviewData] = useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const db = getFirestore();
                const interviewCollection = collection(db, 'interviewcards');
                const querySnapshot = await getDocs(query(interviewCollection, orderBy('createdAt', 'desc')));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setInterviewData(data);
            }catch (err) {
                console.log('error fetching data', err.message);
            }
        }

        fetchUserData();
    }, []);

    

    

    return(
        <div>
            <NavBar />
            <div className="interviewBank-container">
                <h1 >Interview Bank</h1>
                {/* <div className="interviewBank-topics">
                    <h3>Topics</h3>
                    <div>
                        <TopicsBtn variant='outlined'>Computing</TopicsBtn>
                        <TopicsBtn variant='outlined'>Business</TopicsBtn>
                        <TopicsBtn variant='outlined'>Engineering</TopicsBtn>
                        <TopicsBtn variant='outlined'>Science</TopicsBtn>
                    </div>
                </div> */}

                <div className="interviewBank-transcript">
                    <h3>Interview Transcripts</h3>
                    {interviewData.map((data, index) => (
                        <TranscriptCard 
                        // category={selectedCategory}
                        key={index}
                        id = {data.id}
                        name = {data.field}
                        // date = "AUGUST 13, 2023"
                        position = {data.topic}
                        detail = {data.description}
                        path = {data.coverImage}
                    />
                    ))}
                </div>
                {/* <button onClick={(event) => {event.preventDefault(); console.log(interviewData)}}>btn</button> */}
            </div>
            <Footer />
        </div>
    )
}