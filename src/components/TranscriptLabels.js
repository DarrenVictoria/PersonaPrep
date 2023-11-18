export default function TranscriptLabels(props){
    return(
        <div className='transcript-labels'>       
            <div><span>{props.name}</span></div>
            <div><span>{props.date}</span></div>
        </div>
    )
}