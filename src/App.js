import Header from "./Header";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

function App() {
  const { data:blogs, isLoading } = useFetch('http://localhost:8000/blogs');
  const deleteHandler = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
  };

  return (
    <div className="container">
      <Header />
      {isLoading && <p>Loading...</p>}
      {blogs === false && blogs !== null ? (
        <p>Not found</p>
      ) : (
        blogs && (
          <BlogList title="Blogs" blogs={blogs} deleteHandler={deleteHandler} />
        )
      )}
    </div>
  );
}

export default App;
