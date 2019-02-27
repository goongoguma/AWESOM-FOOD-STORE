import Document, { Head, Main, NextScript } from "next/document";
import "../scss/style.scss";

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="http://fonts.googleapis.com/css?family=Lato:100,300,400,300italic"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
