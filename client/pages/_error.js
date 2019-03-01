import React from "react";
import "../scss/style.scss";
import Router from "next/router";

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  pageRedirect() {
    return setTimeout(function() {
      return Router.push(`/`);
    }, 5000);
  }

  componentDidMount() {
    this.pageRedirect();
  }

  errorOccured() {
    return this.props.statusCode ? (
      <p className="error-message">
        OOPS! an error {this.props.statusCode} occurred on server :( <br />
        You will be redirected to main page after 5 seconds
      </p>
    ) : (
      <p className="error-message">
        An error occurred on client <br />
        You will be redirected to main page after 5 seconds
      </p>
    );
  }

  render() {
    return <div className="error-occured">{this.errorOccured()}</div>;
  }
}

export default Error;
