import { Link } from "react-router-dom";

const BlogCard = ({ id, title, author }) => {
  console.log('the id is '+ id);
  return (
    <Link to={`/blog/${id}`} className='link-card'>
      <div className="blog-card" key={id}>
        <div className="blog-card__content">
          <h2>{title}</h2>
          <p>Author: {author}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
