import Header from "./Header";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function App() {
  const [blogs, setBlog] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (res.status === 404) {
            return false;
          }
          return res.json();
        })
        .then((data) => {
          setLoading(false);
          setBlog(data);
        });
    }, 1000);
  }, []);

  const deleteHandler = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlog(newBlogs);
  };

  return (
    <div className="container">
      <Header />
      { isLoading && <p>Loading...</p> }
      { (blogs === false && blogs !== null) ? <p>Not found</p> : (blogs && (
        <BlogList title="Blogs" blogs={blogs} deleteHandler={deleteHandler} />
      )) }
    </div>
  );
}

export default App;
