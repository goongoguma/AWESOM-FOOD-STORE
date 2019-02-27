import Link from "next/link";
import * as React from "react";

const About = props => {
  return (
    <div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <div>
        <h1>AWESOM FOOD STORE STORY</h1>
        <h4>“Cakes are healthy too, you just eat a small slice.” </h4>
      </div>
      <div>
        <p>Welcome to my project!</p>
        <p>
          This page is for Introduction of the project built with Next.js, Axios
          and SCSS
        </p>
        <p>
          You can look up 8 different places where you can eat with people you
          love.
        </p>
        <p>Thank you :)</p>
      </div>
    </div>
  );
};

export default About;
