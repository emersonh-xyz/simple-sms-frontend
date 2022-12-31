import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Footer from "../../../components/Footer";
import IncomingSMS from "../../../components/IncomingSMS";
import Navbar from "../../../components/Navbar";
import OrderDetails from "../../../components/OrderDetails";
import { config } from "../../../src/config";

const Order = ({ props }) => {
  const router = useRouter();
  const { uuid } = router.query;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState();
  const [service, setService] = useState();
  const [messages, setMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isOrderRefundable, setOrderRefundable] = useState(true);
  const [isOrderExpired, setOrderExpired] = useState(false);

  // TODO: Initialize new socket connection
  let socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(
      config.webSocketURL
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
      setLoading(false)
    });

    //on: new-messages

  }, []);

  useEffect(() => {
    // emit: get-order
    socketRef.current.emit("get-order", uuid);
  }, [uuid]);

  useEffect(() => {

    socketRef.current.on("new-message", (data) => {
      setMessages([data, ...messages]);
      setOrderRefundable(false);
    });

    return () => {
      socketRef.current.removeAllListeners("new-message")
    }

  }, [messages])

  return (
    <div className="flex flex-col h-screen justify-between">


      <Navbar />


      {!isLoading ?

        <div className="p-48 bg-base-200 flex justify-center">
          <IncomingSMS
            phoneNumber={phoneNumber}
            expirationDate={expirationDate}
            service={service}
            messages={messages}
            isOrderExpired={isOrderExpired}
          />
          <div className="ml-20">
            <OrderDetails
              phoneNumber={phoneNumber}
              expirationDate={expirationDate}
              service={service}
              messages={messages}
              orderId={uuid}
              isOrderRefundable={isOrderRefundable}
              setOrderRefundable={setOrderRefundable}
              isOrderExpired={isOrderExpired}
              setOrderExpired={setOrderExpired}
            />
          </div>
        </div>

        :
        <div className="grid place-items-center h-screen">

          <div className="">

            <FontAwesomeIcon className="text-3xl font-bold animate-spin " icon={faSpinner} />
          </div>
        </div>
      }


      <Footer />
    </div>
  );
};

export default Order;
