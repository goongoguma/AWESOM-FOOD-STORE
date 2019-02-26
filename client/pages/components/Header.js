import Link from "next/link";

const Header = () => {
  return (
    <div>
      <h1>AWESOME FOOD STORE</h1>
      <Link href="/about">
        <a>ABOUT</a>
      </Link>
      <Link href="/store">
        <a>STORE</a>
      </Link>
    </div>
  );
};

export default Header;
