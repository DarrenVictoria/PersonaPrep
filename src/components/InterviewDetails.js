import readMore from '../assets/images/read_more.png'

export default function InterviewDetails(props){
    return(
        <div className='interviewBank-interviewDetails'>
            {props.detail}
            <img src={readMore} alt=''></img>
        </div>
    )
}