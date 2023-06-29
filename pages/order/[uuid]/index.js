import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Footer from "../../../components/Footer";
import IncomingSMS from "../../../components/IncomingSMS";
import Navbar from "../../../components/Navbar";
import OrderDetails from "../../../components/OrderDetails";
import { config } from "../../../src/config";
import { Icon } from "@iconify-icon/react";

const Order = () => {
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
    <div className="flex flex-col min-h-screen">

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <Navbar />

      {isOrderExpired &&

        <div className="flex justify-start alert alert-error shadow-xl rounded-none">
          <Icon icon={"icon-park-solid:error"}></Icon>
          <p className="alig">This order has been cancelled.</p>
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



        <div className="md:flex m-auto p-20">
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
        <div className="flex items-center justify-center ">

          <div className="">
            <svg className="animate-spin h-10 w-10" viewBox="0 0 24 24">
              <path
                className=" fill-gray-400"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
              <path
                className="fill-white"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
            </svg>
          </div>
        </div>
      }

      <Footer props={"test"} />
    </div>
  );
};

export default Order;
