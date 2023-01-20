import {
  faClock, faGlobe, faMobileAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify-icon/react';
import { useEffect, useState } from "react";
import serviceList from "../../data/services.json";


export default function OrderDetails({
  phoneNumber,
  expirationDate,
  service,
  messages,
  orderId,
  isOrderRefundable,
  setOrderRefundable,
  isOrderExpired,
  setOrderExpired,
  socketRef,
}) {

  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;

  const [timeRemaining, setTimeRemaining] = useState("...");
  const [isCancelPending, setIsCancelPending] = useState(false);

  useEffect(() => {

    let interval = setInterval(() => {

      let totalSeconds = Math.floor((expirationDate - Date.now()) / 1000)

      if (totalSeconds < 0) {
        clearInterval(interval);
        setTimeRemaining("Expired")
        setOrderRefundable(false);
        // setOrderExpired(true)
        return;
      }

      let minutes = Math.floor(totalSeconds / 60)
      let seconds = (totalSeconds % 60);

      setTimeRemaining(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);

    socketRef.current.on("order-cancellation-error", ({ err }) => {
      setIsCancelPending(false);
    })

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsCancelPending(false);
  }, [isOrderExpired]);

  return (
    <div>

      {/* Cancel order modal */}
      <input type="checkbox" id="cancel-order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-sm">Order: {orderId}</h3>
          {!isOrderExpired ?

            <div>
              <p className="py-4">Are you sure you want to refund this order?</p>
              <p className="">You will no longer be able to use this number for new accounts. </p>
              <div className="modal-action">
                <div className={(isOrderRefundable && !isOrderExpired && !isCancelPending) ? "btn btn-error flex justify-evenly" : "btn btn-disabled flex justify-evenly"} onClick={() => { setIsCancelPending(true); socketRef.current.emit('cancel-order', orderId) }}>
                  {
                    isCancelPending ? (
                      <>
                        Cancelling Order
                        <svg class=" animate-spin h-5 w-5 ml-3" viewBox="0 0 24 24">
                          <path
                            class=" fill-gray-400"
                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                          <path
                            class="fill-white"
                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                        </svg>
                      </>
                    ) : (
                      "Cancel Order"
                    )
                  }
                </div>
                <label htmlFor="cancel-order-modal" className="btn">Nevermind</label>
              </div>
            </div>

            :
            <div>
              <p className="py-4">This order was succesfully cancelled.</p>
              <p className="">You will receive your refund back to your original payment method shortly.</p>
              <div className="modal-action">
                <label htmlFor="cancel-order-modal" className="btn">Close</label>
              </div>
            </div>
          }

        </div>
      </div>



      <div className="card w-96 bg-base-100 drop-shadow-xl relative">


        <div className="card-body">
          <div className="card-title drop-shadow-xl">
            <p className="text-3xl font-bold ">Order Details</p>
          </div>
          <p className="card-title text-sm">{orderId}</p>

          <div className="divider"></div>
          <div className="mb-2">

            <Icon
              className="absolute top-40 right-10"
              width={80}
              height={80}
              icon={serviceList.find(element => element.service_name == service).service_icon} />

            <div className="tooltip tooltip-right" data-tip={`Your disposable phone number for ${service}`}>
              <p><FontAwesomeIcon className="mr-1" icon={faMobileAlt} />{updatedNumber}</p>
            </div>

            <p><FontAwesomeIcon className="mr-1" icon={faGlobe} />{service}</p>



            <div className="tooltip tooltip-right" data-tip="Time remaining on your order">
              <p><FontAwesomeIcon className="mr-1" icon={faClock} />{!isOrderExpired ? timeRemaining : "Expired"}</p>
            </div>

          </div>

          <div className="card-action justify-start">
            <label htmlFor="cancel-order-modal" className={(isOrderRefundable && !isOrderExpired && !isCancelPending) ? "btn btn-error btn-sm" : "btn btn-disabled btn-sm"}>
              {
                isCancelPending ? (
                  <>
                    Cancelling Order
                    <svg class=" animate-spin h-5 w-5 ml-2" viewBox="0 0 24 24">
                      <path
                        class=" fill-gray-400"
                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                      <path
                        class="fill-white"
                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                    </svg>
                  </>
                ) : (
                  "Cancel Order"
                )
              }
            </label>
            <a href="google.com" className="flex text-xs mt-2 hover:underline">Have an issue with your order?</a>
          </div>

        </div>
      </div>

    </div>
  );
}
