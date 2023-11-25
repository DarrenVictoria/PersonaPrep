import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import linkedin from '../assets/images/linkedin.png'
import share from '../assets/images/share.png'
import { useEffect } from 'react'

export default function BlogShareIcons(props){
    const link = encodeURI(window.location.href);
    const text = encodeURIComponent(props.title);
    const tag1 = encodeURIComponent(props.tag1);
    const tag2 = encodeURIComponent(props.tag2);
    
    useEffect(() => {
        const fb = document.getElementById('fb');
        const twitter = document.getElementById('twitter');
        const linkedin = document.getElementById('linkedin');
        const share = document.getElementById('share');
        
        fb && (fb.href = `https://www.facebook.com/share.php?u=${link}`);
        twitter && (twitter.href = `https://twitter.com/share?&url=${link}&text=${text}&hashtags=${tag1},${tag2}`);
        linkedin && (linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`);

        if (share) {
            if (navigator.share) {
                share.addEventListener('click', 
                    async (event) => {
                        event.preventDefault();
        
                        try {
                            await navigator.share({
                                title: props.title,
                                text: props.title,
                                url: window.location.href,
                            });
                        } catch (error) {
                            console.error('Error sharing:', error);
                        }
                    }
                );
            }
        }
    });

    return(
        <div className='insightBlog-blogShareIcons'>  
            <a id='fb' href='#' target='_blank'><img src={facebook} alt="Fb"/></a>
            <a id='twitter' href='#' target='_blank'><img src={twitter} alt="Twitter"/></a>
            <a id='linkedin' href='#' target='_blank'><img src={linkedin} alt="LinkedIn"/></a>
            <a id='share' href='#' target='_blank'><img src={share} alt="Share"/></a>
        </div>
    )
}