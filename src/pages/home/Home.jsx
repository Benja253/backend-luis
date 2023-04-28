import PostCard from "../../components/home/PostCard";
import "./home.css";
import { useSelector } from "react-redux";
/* TODO: Comentar esta linea cuando se esté ocupando la API */
import posts from "../../devData/posts.json";
import usePostCrud from "../../hooks/usePostCrud";
import FormPost from "../../components/home/FormPost";
import { useState } from "react";
/* ----  */

const Home = () => {
  // TODO: Descomentar linea de abajo
  //const { posts } = useSelector(state => state)

  const [isCloseForm, setIsCloseForm] = useState(true);

  const { createNewPost } = usePostCrud();

  const handleCreatePost = () => {
    setIsCloseForm(false);
  };

  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
      <div className="home__post-container">
        {posts?.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <button onClick={handleCreatePost} className="home__btn">
        +
      </button>
      <FormPost 
        isCloseForm={isCloseForm}
        setIsCloseForm={setIsCloseForm} 
      />
    </div>
  );
};

export default Home;
