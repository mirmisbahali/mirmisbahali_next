import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/style.css'
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {

  useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js")

}, [])


  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
