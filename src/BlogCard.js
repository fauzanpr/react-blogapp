const BlogCard = ({ id, title, author, deleteHandler }) => {
  return (
    <div className="blog-card" key={id}>
      <div className="blog-card__content">
        <h2>{title}</h2>
        <p>Author: {author}</p>
      </div>
      <button onClick={() => deleteHandler(id)} className="btn--delete">
        Delete
      </button>
    </div>
  );
};

export default BlogCard;
