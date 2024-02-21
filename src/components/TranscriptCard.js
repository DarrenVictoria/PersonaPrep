import TranscriptLabels from './TranscriptLabels';
import JobPosition from './JobPosition';
import InterviewDetails from './InterviewDetails';
import Thumbnail from './Thumbnail';

export default function TranscriptCard({name, date, position, detail, path, category, id}){
    const handleClick = () => {
        window.location.href = `/interviewDisplay?id=${id}`;
    }

    return(
        // <div className={`interviewBank-transcriptCard ${category !== '' && 'interviewBank-hideCard'}`} data-category={category}>
        <div className='interviewBank-transcriptCard' style={{marginBottom: '30px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'black'}} onClick={handleClick}>
                <div className='interviewBank-transcriptCardDetails'>
                    <TranscriptLabels name={name} date={date} />
                    <JobPosition position={position} />
                    <InterviewDetails detail={detail} />
                </div>                 
            </a>              
            <Thumbnail path={path} />
        </div>
    )
}