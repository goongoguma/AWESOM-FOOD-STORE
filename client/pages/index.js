import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../scss/style.scss";
import axios from "axios";

const Index = props => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Body />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;
