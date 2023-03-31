import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  console.log("id in details : " + id);
  const { data } = useFetch(`http://localhost:8000/blogs/${id}`);
  console.log(data);
  return (
    <div className="">
      {data && (
        <div className="">
          <h1>{data.title}</h1>
          <p>Author {data.author}</p>
          <br />
          <br />
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
