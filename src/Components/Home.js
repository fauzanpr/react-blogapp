import useFetch from "../Hooks/useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {console.log(error)}
      {blogs === false && blogs !== null ? (
        <p>Not found</p>
      ) : (
        blogs && <BlogList title="Blogs" blogs={blogs} />
      )}
    </div>
  );
};

export default Home;
