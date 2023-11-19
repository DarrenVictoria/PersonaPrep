import BlogTitle from './BlogTitle';
import BlogTags from './BlogTags';
import BlogDate from './BlogDate';
import BlogShareIcons from './BlogShareIcons';

export default function BlogHeader({title, tags, date}){
    return(
        <div className='insightBlog-blogHeader'>
            <div className='insightBlog-leftCol'>
                <BlogTitle title={title}/>
                <BlogTags tags={tags}/>
            </div>

            <div className='insightBlog-rightCol'>
                <BlogDate date={date}/>
                <BlogShareIcons />
            </div>
        </div>
    )
}
