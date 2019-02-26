import * as React from "react";
import { Portal } from "./Portal";
import { Stream } from "stream";

// const Body = props => (
//   <div>
//     <h1>Shows</h1>
//     {props.stores.map(store => {
//       return <img key={store.id} src={store.thumb} />;
//     })}
//     <Modal />
//   </div>
// );

class Body extends React.Component {
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
    this.props.stores.map(store => {
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
    const { stores } = this.props;
    return (
      <React.Fragment>
        {stores.map(store => (
          <div onClick={this.open} key={store.id}>
            <img src={store.thumb} onClick={() => this.storeDetail(store.id)} />
          </div>
        ))}
        {this.state.opened && (
          <Portal selector="#modal">
            <div className="overlay">
              <div className="modal">
                <img src={image} alt="store image" />
                <h3>{name}</h3>
                <p>{description}</p>
                <button type="button" onClick={this.close}>
                  Close Modal
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

                .modal {
                  background-color: white;
                  position: absolute;
                  top: 10%;
                  right: 10%;
                  bottom: 10%;
                  left: 10%;
                  padding: 1em;
                }
              `}</style>
            </div>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

export default Body;
