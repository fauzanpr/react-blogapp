import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  return (
    <form action="">
      <label className="form__title">Blog Title</label>
      <input
        type="text"
        id="blog-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='form__input'
      />
      <label className="form__title">Blog Body</label>
      <textarea
        id="blog-body"
        rows={15}
        cols={30}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className='form__input tr'
      ></textarea>
      <select
        name=""
        id=""
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={'form__input slct'}
      >
        <option value="mario">Mario</option>
        <option value="luigi">Luigi</option>
      </select>
      <input type="button" value={'submit'} className="btn-form" />
    </form>
  );
};

export default Form;
