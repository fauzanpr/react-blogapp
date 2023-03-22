import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isLoading } = useFetch("http://localhost:8000/blogs");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {blogs === false && blogs !== null ? (
        <p>Not found</p>
      ) : (
        blogs && <BlogList title="Blogs" blogs={blogs} />
      )}
    </div>
  );
};

export default Home;
