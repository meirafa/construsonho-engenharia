import React from "react";
require("../styles/globals.less");

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
