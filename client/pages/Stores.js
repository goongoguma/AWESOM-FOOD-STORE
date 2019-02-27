import axios from "axios";
import { Portal } from "./components/Portal";
import * as React from "react";
import Link from "next/link";

class Stores extends React.Component {
  constructor() {
    super(...arguments);
    this.state = { opened: false, image: "", name: "", description: "" };
  }

  open = () => {
    this.setState({ opened: true });
  };

  close = () => {
    this.setState({ opened: false });
  };

  storeDetail = id => {
    this.props.data.map(store => {
      if (store.id === id) {
        this.setState({
          name: store.name,
          image: store.image,
          description: store.description
        });
      }
    });
  };

  render() {
    const { image, name, description } = this.state;
    const { data } = this.props;
    return (
      <React.Fragment>
        <div className="store-wrapper">
          <h2 className="store-list-title">Store List</h2>
          <h4>Bon Appétit</h4>
          <ul className="container">
            {data.map(store => (
              <li onClick={this.open} key={store.id} className="item">
                <img
                  src={store.thumb}
                  onClick={() => this.storeDetail(store.id)}
                  alt={`${store.name} image`}
                />
              </li>
            ))}
          </ul>
          <Link href="/">
            <a className="back-to-menu">Back to Home</a>
          </Link>
          {this.state.opened && (
            <div>
              <Portal selector="#modal">
                <div className="extra" />
                <div className="overlay">
                  <div className="modal">
                    <img
                      src={image}
                      alt="store image"
                      className="modal-image"
                    />
                    <h3 className="modal-store-name">{name}</h3>
                    <p className="modal-store-description">{description}</p>
                    <button
                      type="button"
                      className="close-btn"
                      onClick={this.close}
                    >
                      X
                    </button>
                  </div>
                  <style jsx global>{`
                    body {
                      overflow: hidden;
                    }
                  `}</style>
                  <style jsx>{`
                    .overlay {
                      position: fixed;
                      background-color: rgba(0, 0, 0, 0.7);
                      top: 0;
                      right: 0;
                      bottom: 0;
                      left: 0;
                    }

                    .overlay:after {
                      background: blue;
                    }

                    .modal {
                      background-color: linear-gradient(
                        rgba(0, 0, 0, 0.7),
                        rgba(0, 0, 0, 0.7)
                      );
                      position: absolute;
                      top: 5%;
                      right: 10%;
                      bottom: 10%;
                      left: 10%;
                      padding: 1em;
                      color: #fff;
                    }

                    .modal-store-name {
                      margin-top: 1.5rem;
                      font-size: 2rem;
                      color: #e67e22;
                    }

                    .modal-store-description {
                      margin-top: 10px;
                      line-height: 1.5rem;
                    }
                    .close-btn {
                      color: #fff;
                      cursor: pointer;
                      position: absolute;
                      top: 0;
                      right: 0;
                      width: 30px;
                      height: 30px;
                      outline: none;
                    }
                  `}</style>
                </div>
              </Portal>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Stores.getInitialProps = async () => {
  const res = await axios.get("http://localhost:9000/stores");
  const data = await res.data;
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    data: data
  };
};

export default Stores;
