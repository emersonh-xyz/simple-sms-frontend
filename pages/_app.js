import { useRef } from "react";
import { io } from "socket.io-client";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  // Intialize socket connection
  const socket = useRef(
    io("https://recorders-bags-hills-operating.trycloudflare.com/")
  );

  return <Component {...pageProps} socket={socket} />;
}

export default App;
