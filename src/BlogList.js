import BlogCard from "./BlogCard";

const BlogList = ({ title, blogs, deleteHandler }) => {
    return ( 
        <div className="blog-list">
            <h1 className="blog-list__title">{ title }</h1>
            { blogs.map(blog => (
                <BlogCard title={ blog.title } author={ blog.author } id={ blog.id } deleteHandler={ deleteHandler } /> 
            )) }
        </div>
    );
}
 
export default BlogList;