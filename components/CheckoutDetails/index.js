import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify-icon/react';
import { useState } from "react";
import VenmoClientAPI from "../../src/VenmoClientAPI";

export default function CheckoutDetails({ service, startVenmoOrder, venmoRef }) {
  const [isVenmoCheckout, setVenmoCheckout] = useState(false);

  return (
    <div>
      <div className="card drop-shadow-lg bg-base-300 md:ml-5 md:mt-0 mt-5 ">
        <div className="card-body ">
          <ul className="mx-center w-full ">

            <li className="text-2xl mb-4">
              Verify Order Details
            </li>

            <li className="text-sm base-300 font-bold mt-2">
              <span>Service</span>
            </li>

            <li>
              {service.service_name}
            </li>

            <li className="text-sm base-300 font-bold mt-2">
              Total
            </li>

            <li>
              ${(service.service_price / 100).toFixed(2)} USD
            </li>
          </ul>

          <Icon width={70} height={70} icon={service.service_icon} className="absolute top-20 right-20 rounded-full " />

          <div className="divider mt-0"></div>
          <div className="card-actions">
            {isVenmoCheckout ? (
              <button
                onClick={() => {
                  venmoRef.current.closePaymentWindow();
                  location.reload();
                }}
                className="btn btn-wide border-none bg-error  text-white"
              >
                Cancel Transaction
              </button>
            ) : (
              <button
                onClick={() => {
                  setVenmoCheckout(true);
                  startVenmoOrder(service.service_price, service.service_name);
                }}
                className="btn btn-wide border-none bg-[#008CFF] text-white"
              >
                <svg
                  id="Layer_1"
                  o
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.6C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.8,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM278,387H174.32L132.75,138.44l90.75-8.62,22,176.87c20.53-33.45,45.88-86,45.88-121.87,0-19.62-3.36-33-8.61-44L365.4,124.1c9.56,15.78,13.86,32,13.86,52.57C379.25,242.17,323.34,327.26,278,387Z"
                    fill="white"
                  ></path>
                </svg>
                Checkout with Venmo
              </button>

            )}


          </div>
        </div>
      </div>
    </div>
  );
}
