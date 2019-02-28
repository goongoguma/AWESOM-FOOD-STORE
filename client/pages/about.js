import Link from "next/link";
import * as React from "react";
import "../scss/style.scss";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-title">
        <h1>ABOUT AWESOM FOOD STORE</h1>
      </div>
      <div className="about-body">
        <img src="http://i63.tinypic.com/13ynx9z.jpg" className="my-pic" />
        <p>
          Welcome to my project! <br />
          This project is built with <br />- Next.js <br />
          - SCSS
          <br />
          - Axios.
          <br /> You can look up 8 different places <br />
          where you can have a great time with people you love. <br />
          Thank you for visiting :)
          <br />
          <br />
          <Link href="/">
            <a className="back-to-menu">☞ Back to Home</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
