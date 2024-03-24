export default function Thumbnail(props){
    return(
        <div className='interviewBank-thumbnail'>
            <img src={props.path} alt='Thumbnail'></img>
        </div>
    )
}