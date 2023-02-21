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

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="tos" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative h-1/2">
          <label htmlFor="tos" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Terms and Conditions</h3>
          <p className="py-4">
            <ol type="i">
              <li>
                <h1 className="font-bold">1. Introduction</h1>
                <p className="text-sm">Welcome to Simple SMS, a digital service for receiving text messages at temporary phone numbers. These Terms of Service (“Terms”) govern your use of our service. By using Simple SMS, you agree to be bound by these Terms. If you do not agree to these Terms, you should not use Simple SMS.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">2. Service Description</h1>
                <p className="text-sm">Simple SMS provides a platform for receiving text messages at temporary phone numbers. We strive to maintain high levels of availability and reliability, but we cannot guarantee that our service will always be available or error-free.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">3. Fees and Payments</h1>
                <p className="text-sm">Simple SMS charges a fee for the use of our service. Fees are payable through Venmo. You are responsible for paying all fees associated with using Simple SMS, including any applicable taxes.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">4. Refunds</h1>
                <p className="text-sm">We offer refunds for Simple SMS. If you are dissatisfied with our service for any reason, you may request a refund as long as the phone number associated with your order hasn’t received any texts. Refunds are automatically processed by the system if an order expires or is canceled before receiving a text. In the event of an error processing a refund, requests must be submitted in writing via the Discord server (https://discord.gg/YWrdUzDups) and include a detailed explanation of the reason for the request.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">5. User Conduct</h1>
                <p className="text-sm">You agree to use Simple SMS only for lawful purposes and in accordance with these Terms and the Terms of any service you use one of our phone numbers for. You may not use Simple SMS to send or receive any illegal or harassing messages. You are also prohibited from using Simple SMS to send spam or other unsolicited messages.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">6. Modifications to Terms of Service</h1>
                <p className="text-sm">We reserve the right to modify these Terms at any time. Your continued use of Simple SMS after any changes to these Terms constitutes your acceptance of the new Terms.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">7. Disclaimers</h1>
                <p className="text-sm">Simple SMS is provided on an “as is” basis. We make no representations or warranties of any kind, express or implied, as to the operation of Simple SMS or the information, content, materials, or products included on Simple SMS.

                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">8. Limitation of Liability</h1>
                <p className="text-sm">In no event will we be liable for any damages of any kind arising from the use of Simple SMS, including, but not limited to, indirect, incidental, punitive, and consequential damages.
                </p>
              </li>

              <li className="mt-2">
                <h1 className="font-bold">9. Contact Information</h1>
                <p className="text-sm">If you have any questions or concerns about Simple SMS or these Terms, please create a ticket on our Discord at https://discord.gg/YWrdUzDups.
                </p>

              </li>

              <p className="mt-2 font-thin">These Terms were last updated on 01/31/2023.</p>

            </ol>
          </p>
        </div>
      </div>

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
                  className="flex justify-evenly btn btn-wide border-none hover:bg-error text-white"
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

          {isVenmoCheckout && <button
            class="btn-wide border-none btn bg-[#008CFF] text-white"
            onClick={() => {
              if (startVenmoOrder(service.service_price, service.service_name)) {
                setVenmoCheckout(true);
              } else {
                setShouldShowConnectionError(true);
              }
            }}>

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
            </svg>Open Venmo</button>}

          <div className="text-sm w-64">
            By clicking Checkout with Venmo, you agree to our <label htmlFor="tos" className="underline text-primary">Terms and Conditions</label>
          </div>
        </div>
      </div>
    </div>
  );
}
