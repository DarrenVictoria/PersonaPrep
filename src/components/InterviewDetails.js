export default function InterviewDetails(props){
    return(
        <div className='interview-details'>
            {props.detail}
            <img src={process.env.PUBLIC_URL + './Images/read_more.png'} alt=''></img>
        </div>
    )
}