import axios from "axios";
import Link from "next/link";
import * as React from "react";

const Stores = props => {
  return (
    <div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      Stores Page
    </div>
  );
};

Stores.getInitialProps = async () => {
  const res = await axios.get("http://localhost:9000/stores");
  const data = await res.data;
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data
  };
};

export default Stores;
