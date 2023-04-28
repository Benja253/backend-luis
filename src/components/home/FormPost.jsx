import React from "react";
import './styles/formPost.css'

const FormPost = ({ isCloseForm, setIsCloseForm }) => {

  const handleClick = e => {
    setIsCloseForm(true)
  }
  const handleFormClick = e => {
    e.stopPropagation()
  }

  return (
    <div onClick={handleClick} className={`formpost ${isCloseForm && 'exit-formpost'}`}>
      <form onClick={handleFormClick} className="formpost__form">
        <h2 className="formpost__title">Create a new Post</h2>
        <div className="formpost__section">
          <label className="formpost__label" htmlFor="post-title">
            Post Title
          </label>
          <input className="formpost__input" type="text" id="post-title" />
        </div>
        <div  className="formpost__section">
          <label className="formpost__label" htmlFor="post-description">
            Description
          </label>
          <input
            className="formpost__input"
            type="text"
            id="post-description"
          />
        </div>
        <button className="formpost__btn">Create</button>
      </form>
    </div>
  );
};

export default FormPost;
