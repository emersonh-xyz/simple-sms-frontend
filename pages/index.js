import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import ServiceSelector from "../components/ServiceSelector";
import WaveBanner from "../components/WaveBanner";
import rawJSON from "../data/services.json";
import { config } from "../src/config";
import VenmoClientAPI from "../src/VenmoClientAPI";


export default function Home() {
  const [data, setData] = useState([]);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);
  const [isPhoneNumberReady, setPhoneNumberReady] = useState(false);
  const [isOrderRefunded, setOrderRefunded] = useState(false);
  const [orderId, setOrderId] = useState();
  const [service, setService] = useState("");
  const [isMaintenanceMode, setMaintenanceMode] = useState(false);

  // !! THESE REFS ARE OP
  let socketRef = useRef();
  let venmoRef = useRef();
  let orderIdRef = useRef();
  let serviceSelectorRef = useRef(null)
  let featureRef = useRef(null)


  // TODO: Invalid Payment event: invalid-payment

  // TODO: Refund Error event: refund-error

  // TODO: Error getting number event: error-getting-number

  // Start a new venmo order
  let startVenmoOrder = (price, service) => {
    if (!socketRef.current.connected) return false; // Do not let an order get created if we're not connected to the backend

    let _orderId = uuidv4();

    // Use a ref here because its fucking dumb
    orderIdRef.current = _orderId;

    setOrderId(_orderId);
    venmoRef.current = new VenmoClientAPI();

    let venmo = venmoRef.current;
    venmo.generatePaymentLink(
      "simple-sms",
      price,
      `Order:${service}:${_orderId}`
    );

    // Start a new order
    socketRef.current.emit("new-order", _orderId);
    venmo.openPaymentWindow();

    return true;
  };

  useEffect(() => {
    socketRef.current = io(
      config.webSocketURL
    );
    let socket = socketRef.current;

    const updateOrders = () => {
      // Check for existing orders
      let existingOrders = JSON.parse(localStorage.getItem("orders"));

      // If no orders exist, create an empty array
      if (existingOrders == null) existingOrders = [];

      // New order entry
      let order = {
        "orderID": orderIdRef.current,
      }

      // Push new order to existing orders
      existingOrders.push(order);

      // Update orders
      localStorage.setItem("orders", JSON.stringify(existingOrders));

    }

    // ** Invalid Payment event: invalid-payment
    socket.on("invalid-payment", () => {
      console.log("Invalid payment error has occcured");
    });

    // ** Order Confirmed event: order-confirmed
    socket.on("order-confirmed", (data) => {
      setOrderConfirmed(true);
      venmoRef.current.closePaymentWindow();
      // router.push(`order/${}`)
    });

    // ** Number Ready Event event: order-phone-number
    socket.on("order-phone-number", (data) => {
      updateOrders();
      window.location.href = `/order/${orderIdRef.current}`;
    });

    // Used for get-order event in-case of socket disconnect
    socket.on("order", (data) => {
      alert("Your order has been confirmed")
      window.location.href = `/order/${orderIdRef.current}`;
    })

    // ** Refunded event: refunded
    socket.on("refunded", () => {
      setOrderRefunded(true);
      // TODO: Display how much is being refunded
      console.log("Order has been refunded.");
    });

    // Attempt to reconnect to socket in most cases for mobile
    socket.io.on("reconnect", () => {
      socketRef.current.emit("reconnect-order", orderIdRef.current)
    });



    return () => {
      // Clean up listeners 
      socket.removeAllListeners("invalid-payment");
      socket.removeAllListeners("order-confirmed");
      socket.removeAllListeners("order-phone-number");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Sort the data alphabetically on first load;
    function sortServicesAlphabetically() {
      rawJSON.sort(function (a, b) {
        if (a.is_other) return 1;
        if (b.is_other) return -1;
        a = a.service_name.toLowerCase();
        b = b.service_name.toLowerCase();
        return a < b ? -1 : a > b ? 1 : 0;
      });
    }

    // Call sort data and update our data state
    sortServicesAlphabetically();
    setData(rawJSON);



  }, []);

  return (
    <div>
      <Head>
        <title>Simple SMS | Real USA Phone Numbers for SMS Text Verifying</title>
        <meta name="description" content="Buy temporary USA phone numbers for sms account verification. Over 100+ services offered. Tired of topups and wallets? No account or balance required. Instant payments and refunds offered exclusively through Venmo."></meta>
        <meta property="og:title" content="Simple SMS | Real USA Phone Numbers for SMS Text Verification" />
        <meta property="og:site_name" content="Simple SMS" ></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://simple-sms.io" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/751108166284214352/1066915335665631232/logo.png" />
        <meta property="og:description" content="Buy temporary USA phone numbers for sms account verification. Over 100+ services offered. Tired of topups and wallets? No account or balance required. Instant payments and refunds offered exclusively through Venmo." />
        <meta name="theme-color" content="#fbbf24"></meta>
        <meta name="robots" content="all" />
        <link rel="icon" href="/static/favicon-144x144.png" />
      </Head>

      <>

        {/* Banner popup */}
        {isOrderConfirmed && (

          <div>

            <div className="alert alert-success shadow-lg rounded-none">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Your order has been confirmed!</span>
              </div>
            </div>

            <div className="modal modal-open modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  <p className="font-bold text-lg">Order: #{orderId}</p>
                  Your order has been confirmed!
                </h3>

                <p className="py-4 animate-pulse">
                  {isPhoneNumberReady
                    ? "Your number is ready! Redirecting..."
                    : "You will be redirected once your number is ready..."}
                </p>
              </div>
            </div>
          </div>
        )
        }

        {isOrderRefunded && (
          <div>
            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="order-refunded-modal"
              className="modal-toggle"
            />
            <div className="modal modal-open modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  The selected service is currently unavaliable
                </h3>
                <p className="py-4">
                  Your order <span className="font-bold">#{orderId}</span> has
                  been refunded
                </p>
                <div className="modal-action">
                  <label onClick={() => location.reload()} htmlFor="order-refunded-modal" className="btn">
                    Close
                  </label>
                  <label htmlFor="order-refunded-modal" className="btn">
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/YWrdUzDups">Support</a>
                  </label>

                </div>
              </div>
            </div>
          </div>
        )
        }

        <WaveBanner serviceSelectorRef={serviceSelectorRef} featureRef={featureRef} />
        <ServiceSelector service={service} setService={setService} serviceSelectorRef={serviceSelectorRef} serviceList={data} startVenmoOrder={startVenmoOrder} venmoRef={venmoRef} isOrderConfirmed={isOrderConfirmed} />
        <Feature featureRef={featureRef} />
      </>

      <Footer />
    </div >
  );
}



