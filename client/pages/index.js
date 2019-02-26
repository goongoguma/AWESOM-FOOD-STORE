import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "../scss/style.scss";
import axios from "axios";

const Index = props => {
  return (
    <div>
      <div className="example">hello</div>
      <header>
        <Header />
      </header>
      <section>
        <Body stores={props.data} />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get("http://localhost:9000/stores");
  const data = await res.data;
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data
  };
};

export default Index;
