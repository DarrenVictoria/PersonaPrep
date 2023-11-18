import TranscriptLabels from './TranscriptLabels';
import JobPosition from './JobPosition';
import InterviewDetails from './InterviewDetails';
import Thumbnail from './Thumbnail';

export default function TranscriptCard({name, date, position, detail, path, category}){
    return(
        // <div className={`transcript-card ${category !== '' && 'hide-card'}`} data-category={category}>
        <div className='transcript-card'>
            <div className='transcript-card-details'>
                <TranscriptLabels name={name} date={date} />
                <JobPosition position={position} />
                <InterviewDetails detail={detail} />
            </div>                 
            <Thumbnail path={path} />
        </div>
    )
}