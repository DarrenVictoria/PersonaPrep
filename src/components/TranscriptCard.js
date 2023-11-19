import TranscriptLabels from './TranscriptLabels';
import JobPosition from './JobPosition';
import InterviewDetails from './InterviewDetails';
import Thumbnail from './Thumbnail';

export default function TranscriptCard({name, date, position, detail, path, category}){
    return(
        // <div className={`interviewBank-transcriptCard ${category !== '' && 'interviewBank-hideCard'}`} data-category={category}>
        <div className='interviewBank-transcriptCard'>
            <div className='interviewBank-transcriptCardDetails'>
                <TranscriptLabels name={name} date={date} />
                <JobPosition position={position} />
                <InterviewDetails detail={detail} />
            </div>                 
            <Thumbnail path={path} />
        </div>
    )
}