import InterviewTitle from './InterviewTitle'
import InterviewDate from './InterviewDate'
import BlogShareIcons from './BlogShareIcons';
import InterviewTag from './InterviewTag';

const InterviewHeader = ({position, date, tag, tag1, tag2}) => {
    return ( 
        <div className="interviewDisplay-header">
            <div className='interviewDisplay-leftCol'>
                <InterviewTitle position={position}/>
                <InterviewTag tag={tag} />
            </div>

            <div className='interviewDisplay-rightCol'>
                <InterviewDate date={date} />
                <BlogShareIcons title={position} tag1={tag1} tag2={tag2}/>
            </div>
        </div>
     );
}
 
export default InterviewHeader;