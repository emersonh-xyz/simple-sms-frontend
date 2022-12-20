import {
  faCancel,
  faInfo,
  faInfoCircle,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Footer from "../../../components/Footer";
import IncomingSMS from "../../../components/IncomingSMS";
import Navbar from "../../../components/Navbar";
import OrderDetails from "../../../components/OrderDetails";

const Order = ({ props }) => {
  const router = useRouter();
  const { uuid } = router.query;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState();
  const [service, setService] = useState();
  const [messages, setMessages] = useState([]);
  const [orderData, setOrderData] = useState();

  // TODO: Initialize new socket connection
  let socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(
      "https://wars-crops-than-tonight.trycloudflare.com/"
    );
    let socket = socketRef.current;

    // on: order
    socket.on("order", (data) => {
      console.log("Order processed");
      console.log(data);
      setPhoneNumber(data.number);
      setExpirationDate(data.expiresAt);
      setService(data.service);
      setMessages(data.messages);
    });

    //on: new-messages
    socket.on("new-message", (data) => {
      setMessages([data, ...messages]);
    });
  }, []);

  useEffect(() => {
    // emit: get-order
    socketRef.current.emit("get-order", uuid);
  }, [uuid]);

  return (
    <div className="flex flex-col h-screen justify-between ">
      <Head></Head>

      <main>
        <Navbar />

        <div className="p-48 bg-base-200 flex justify-center">
          <IncomingSMS
            phoneNumber={phoneNumber}
            expirationDate={expirationDate}
            service={service}
            messages={messages}
          />
          <div className="ml-20">
            <OrderDetails
              phoneNumber={phoneNumber}
              expirationDate={expirationDate}
              service={service}
              messages={messages}
              orderId={uuid}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
