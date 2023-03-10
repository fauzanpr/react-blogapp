import Header from "./Header";
import { useState } from "react";
import BlogList from "./BlogList";

function App() {
  const [blogs, setBlog] = useState([
    { title: "Title 1", body: "lorem ipsum ...", author: "Mario", id: 1 },
    { title: "Title 2", body: "lorem ipsum ...", author: "Evan", id:2 },
    { title: "Title 3", body: "lorem ipsum ...", author: "Mario", id:3 },
  ]);

  const deleteHandler = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlog(newBlogs);
  };

  return (
    <div className="container">
      <Header />
      <BlogList title="Blogs" blogs={ blogs } deleteHandler={ deleteHandler } />
    </div>
  );
}

export default App;
