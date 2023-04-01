import { useHistory, useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  console.log("id in details : " + id);
  const { data } = useFetch(`http://localhost:8000/blogs/${id}`);
  const deleteHandler = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    });
    history.push('/');
  };
  return (
    <div className="">
      {data && (
        <div className="">
          <h1>{data.title}</h1>
          <p>Author {data.author}</p>
          <br />
          <br />
          <p>{data.body}</p>
          <button className="btn-form mg" onClick={deleteHandler}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
