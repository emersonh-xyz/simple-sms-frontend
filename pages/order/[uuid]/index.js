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
      // console.log(data);
      setPhoneNumber(data.number);
      setExpirationDate(data.expiresAt);
      setService(data.service);
      setMessages(data.messages);
      setLoading(false)

      if (data.isCancelled) {
        setOrderExpired(true);
      }

    });

    socket.on("order-cancelled", (data) => {
      setOrderExpired(true);
    })

    socket.on("order-not-found", () => {
      window.location.href = ("/404")
      console.log("hello world")
    })

    //on: new-messages

  }, []);

  useEffect(() => {
    // emit: get-order
    if (uuid) {
      socketRef.current.emit("get-order", uuid);

      socketRef.current.on('connect', () => {
        socketRef.current.emit("get-order", uuid);
      });
    }
  }, [uuid]);

  useEffect(() => {
    if (messages.length > 0) {
      setOrderRefundable(false);
    }

    socketRef.current.on("new-message", (data) => {
      setMessages([data, ...messages]);
    });

    return () => {
      socketRef.current.off("new-message")
    }

  }, [messages]);

  return (
    <div className="flex flex-col bg-base-100 min-h-screen">

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <Navbar />

      {isOrderExpired &&

        <div className="alert alert-error shadow-xl rounded-none">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="">This order has been cancelled.</span>
          </div>
        </div>
      }


      {/* {!isLoading && TODO:
        <div className="alert alert-warning shadow-lg rounded-none ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <div>
              <h3 className="font-bold">New message!</h3>
              <div className="text-xs">You have 1 unread message</div>
            </div>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm">See</button>
          </div>
        </div>
      } */}

      {!isLoading ?



        <div className="md:flex m-auto p-6">
          <div className="">
            <IncomingSMS
              phoneNumber={phoneNumber}
              expirationDate={expirationDate}
              service={service}
              messages={messages}
              isOrderExpired={isOrderExpired}
            />
          </div>

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
            socketRef={socketRef}
          />

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
