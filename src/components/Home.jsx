import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/chat">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Home;
