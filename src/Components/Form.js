import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("data is sent to the server");
      setIsPending(false);
    });
  };
  return (
    <form action="">
      <label className="form__title">Blog Title</label>
      <input
        type="text"
        id="blog-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form__input"
      />
      <label className="form__title">Blog Body</label>
      <textarea
        id="blog-body"
        rows={15}
        cols={30}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="form__input tr"
      ></textarea>
      <select
        name=""
        id=""
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={"form__input slct"}
      >
        <option value="mario">Mario</option>
        <option value="luigi">Luigi</option>
      </select>
      {!isPending && (
        <input
          type="submit"
          value={"submit"}
          className="btn-form"
          onClick={submitHandler}
        />
      )}
      {isPending && (
        <input
          type="submit"
          value={"Submitting..."}
          className="btn-form"
          onClick={submitHandler}
          disabled
        />
      )}
    </form>
  );
};

export default Form;
