import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import share from '../assets/images/share.png'
export default function BlogShareIcons(){
    return(
        <div className='insightBlog-blogShareIcons'>
            <img src={facebook} alt=""/>
            <img src={twitter} alt=""/>
            <img src={linkedin} alt=""/>
            <img src={share} alt=""/>
        </div>
    )
}