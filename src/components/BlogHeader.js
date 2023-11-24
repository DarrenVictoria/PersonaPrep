import BlogTitle from './BlogTitle';
import BlogTags from './BlogTags';
import BlogDate from './BlogDate';
import BlogShareIcons from './BlogShareIcons';

export default function BlogHeader({title, tag1, tag2, date}){
    return(
        <div className='insightBlog-blogHeader'>
            <div className='insightBlog-leftCol'>
                <BlogTitle title={title}/>
                <BlogTags tag1={tag1} tag2={tag2}/>
            </div>

            <div className='insightBlog-rightCol'>
                <BlogDate date={date}/>
                <BlogShareIcons title={title} tag1={tag1} tag2={tag2}/>
            </div>
        </div>
    )
}
