
import { Analytics } from '@vercel/analytics/react';
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />;
    </>
  )

}

export default App;
