import {
  faCancel,
  faInfo,
  faInfoCircle,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import IncomingSMS from "../../../components/IncomingSMS";
import Navbar from "../../../components/Navbar";
import OrderDetails from "../../../components/OrderDetails";

const Order = ({ props }) => {
  const router = useRouter();
  const { uuid } = router.query;

  const Countdown = () => {
    return (
      <span className="countdown font-mono text-2xl mx-auto text-error">
        <span style={{ "--value": 20 }}></span>:
        <span style={{ "--value": 0 }}></span>
      </span>
    );
  };

  return (
    <div className="flex flex-col h-screen justify-between ">
      <Head></Head>

      <main>
        <Navbar />

        <div className="p-48 bg-base-200 flex justify-center">
          <IncomingSMS />
          <div className="ml-20">
            <OrderDetails />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Order;
