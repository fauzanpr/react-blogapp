import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <form action="">
      <label htmlFor="blog-title">Blog Title</label>
      <input
        type="text"
        id="blog-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="blog-body">Blog Body</label>
      <textarea
        id="blog-body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <select
        name=""
        id=""
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="mario">Mario</option>
        <option value="luigi">Luigi</option>
      </select>
    </form>
  );
};

export default Form;
