import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../scss/style.scss";
import axios from "axios";

const Index = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="body-section">
        <Body />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
