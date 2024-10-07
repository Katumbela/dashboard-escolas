import { Html, Head, Main, NextScript } from "next/document";
import "./index"
import { ToastContainer } from "react-toastify";

export default function Document() {
  return (
    <Html lang="pt">
      <Head title="Multischool" />
      <body>
        <Main />
        <ToastContainer />
        <NextScript />
      </body>
    </Html>
  );
}
