import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h3 className="sub-header">WELCOME TO</h3>
        <h1 className="main-header">AWESOME FOOD STORE</h1>
        <div className="flex">
          <Link href="/About">
            <a className="header-section flex-item">ABOUT</a>
          </Link>
          <Link href="/Stores">
            <a className="header-section flex-item">STORES</a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
