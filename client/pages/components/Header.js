import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3 className="sub-header">WELCOME TO</h3>
        <h1 className="main-header">AWESOME FOOD STORE</h1>
        <Link href="/About">
          <a className="header-section">ABOUT</a>
        </Link>
        <Link href="/Stores">
          <a className="header-section">STORES</a>
        </Link>
      </div>
    );
  }
}

export default Header;
