import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import { fetchFunction } from "./api";

import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import Post from "./components/Posts/Post/Post.js";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  let path = "/posts";

  useEffect(() => {
    fetchFunction(path)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log("yes error", error));
  }, [path]);

  return (
    <>
      <div className="app-container">
        <div className="app-nav-container">Navbar</div>
        <div className="app-bottom-container">
          <div className="app-posts-container">
            <Posts />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="app-form-contain">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
