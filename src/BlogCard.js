const BlogCard = ({ id, title, author }) => {
  return (
    <div className="blog-card" key={id}>
      <div className="blog-card__content">
        <h2>{title}</h2>
        <p>Author: {author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
