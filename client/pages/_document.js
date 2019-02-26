import Document, { Head, Main, NextScript } from "next/document";
import "../scss/style.scss";

export default class extends Document {
  render() {
    return (
      <html>
        <Head />
        <link rel="stylesheet" href="/_next/static/style.scss" />
        <Head />
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
