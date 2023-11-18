export default function Thumbnail(props){
    return(
        <div className='thumbnail'>
            {/* <img src={process.env.PUBLIC_URL + props.path} alt=''></img> */}
            <img src={props.path} alt=''></img>
        </div>
    )
}