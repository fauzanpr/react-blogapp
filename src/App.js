import Header from "./Header";
import useFetch from "./useFetch";
import BlogList from "./BlogList";

function App() {
  const { data:blogs, isLoading } = useFetch('http://localhost:8000/blogs');
  return (
    <div className="container">
      <Header />
      {isLoading && <p>Loading...</p>}
      {blogs === false && blogs !== null ? (
        <p>Not found</p>
      ) : (
        blogs && (
          <BlogList title="Blogs" blogs={blogs} />
        )
      )}
    </div>
  );
}

export default App;
