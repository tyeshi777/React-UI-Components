import React from "react";
import "./Card.css";

const CardContent = () => {
  return (
    <div className="cardContent">
      <a href="https://reactjs.org/">
        <section class="contentSection">
          <h2>Get started with React</h2>
          <p>
            React makes it painless to create interactive UIs. Design simple
            views for each state in your application.
          </p>
        </section>
        <a className="cardAnchor" href="https://reactjs.org/">
          reactjs.org
        </a>
      </a>
    </div>
  );
};

export default CardContent;
