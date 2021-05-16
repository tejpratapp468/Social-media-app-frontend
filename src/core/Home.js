import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2>Home</h2>
      <p className="lead">Welcome to React Frontend</p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;

//The lead class in Bootstrap is used to add emphasis to a paragraph.
