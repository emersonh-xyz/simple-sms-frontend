import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceSelector from "../components/ServiceSelector";
import rawJSON from "../data/services.json";
import VenmoClientAPI from "../src/VenmoClientAPI";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);

  const socket = props.socket.current;

  const router = useRouter();

  let venmo;

  // TODO: Invalid Payment event: invalid-payment

  // TODO: Refunded event: refunded

  // TODO: Refund Error event: refund-error

  // TODO: Error getting number event: error-getting-number

  // Start a new venmo order
  function startVenmoOrder(price, service) {
    const orderId = uuid();
    venmo = new VenmoClientAPI();
    venmo.generatePaymentLink(
      "simple-sms",
      price,
      `Order:${service}:${orderId}`
    );

    socket.emit("new-order", orderId);
    venmo.openPaymentWindow();
  }

  useEffect(() => {
    // ** Invalid Payment event: invalid-payment
    socket.on("invalid-payment", () => {
      console.log("Invalid payment");
    });

    // ** Order Confirmed event: order-confirmed
    socket.on("order-confirmed", (data) => {
      console.log(`Order confirmed ${data}`);
      setOrderConfirmed(true);
      venmo.closePaymentWindow();
      // router.push(`order/${}`)
    });

    return () => {
      socket.removeAllListeners("invalid-payment");
      socket.removeAllListeners("order-confirmed");
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Sort the data alphabetically on first load;
    function sortServicesAlphabetically() {
      rawJSON.sort(function (a, b) {
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
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>Simple SMS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        {/* Main Service selection card */}
        {isOrderConfirmed && (
          <div>
            <p className="text-primary text-xl">
              Your order has been confirmed!!
            </p>
          </div>
        )}
        <ServiceSelector props={data} startVenmoOrder={startVenmoOrder} />
        <Feature />

        {/* Pop-up if order confirmation goes through */}
      </main>

      <Footer />
    </div>
  );
}
