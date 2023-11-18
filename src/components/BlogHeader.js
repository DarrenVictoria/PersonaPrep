import BlogTitle from './BlogTitle';
import BlogTags from './BlogTags';
import BlogDate from './BlogDate';
import BlogShareIcons from './BlogShareIcons';

export default function BlogHeader({title, tags, date}){
    return(
        <div className='blog-header'>
            <div className='left-col'>
                <BlogTitle title={title}/>
                <BlogTags tags={tags}/>
            </div>

            <div className='right-col'>
                <BlogDate date={date}/>
                <BlogShareIcons />
            </div>
        </div>
    )
}
