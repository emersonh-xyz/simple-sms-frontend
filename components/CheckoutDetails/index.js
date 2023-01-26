import { faCancel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify-icon/react';
import { useState } from "react";
import VenmoClientAPI from "../../src/VenmoClientAPI";

export default function CheckoutDetails({ service, startVenmoOrder, venmoRef, isOrderConfirmed, checkoutDetailsRef }) {
  const [isVenmoCheckout, setVenmoCheckout] = useState(false);
  const [cancelButtonHovered, setCancelButtonHovered] = useState(false);
  const [shouldShowConnectionError, setShouldShowConnectionError] = useState(false);

  return (
    <div >
      <div className="card drop-shadow-lg bg-base-300 md:ml-5 md:mt-0 mt-5 ">
        <div className="card-body">
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
              isOrderConfirmed ? (
                <button
                  className="flex justify-evenly btn btn-wide border-none bg-[#08a337] hover:bg-[#08a337] text-white"
                >
                  Payment Received
                </button>
              ) : (
                <button
                  onClick={() => {
                    venmoRef.current.closePaymentWindow();
                    location.reload();
                  }}
                  className="flex justify-evenly btn btn-wide border-none bg-[#008CFF] hover:bg-error text-white"
                  onMouseOver={() => { setCancelButtonHovered(true); }}
                  onMouseOut={() => { setCancelButtonHovered(false); }}
                >
                  {cancelButtonHovered ? "Cancel Transaction" : "Transaction Pending..."}
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <path
                      className=" fill-gray-400"
                      d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                    <path
                      className="fill-white"
                      d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                  </svg>
                </button>
              )
            ) : (
              <div className={shouldShowConnectionError && "tooltip tooltip-error"} data-tip="Cannot connect to server. Please refresh and try again." onMouseOut={() => { setShouldShowConnectionError(false); }}>
                <button
                  onClick={() => {
                    if (startVenmoOrder(service.service_price, service.service_name)) {
                      setVenmoCheckout(true);
                    } else {
                      setShouldShowConnectionError(true);
                    }
                  }}
                  className="btn btn-wide border-none bg-[#008CFF] text-white"
                >
                  <svg
                    id="Layer_1"
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
              </div>
            )}



          </div>
          <div className="text-sm w-64">
            By clicking Checkout with Venmo, you agree to our <a href="/tos" className="underline text-primary">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </div>
  );
}
