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
  socketRef
}) {

  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;

  const [timeRemaining, setTimeRemaining] = useState("...");

  useEffect(() => {

    let interval = setInterval(() => {

      let totalSeconds = Math.floor((expirationDate - Date.now()) / 1000)

      if (totalSeconds < 0) {
        clearInterval(interval);
        setTimeRemaining("Order Expired")
        setOrderRefundable(false);
        setOrderExpired(true)
        return;
      }

      let minutes = Math.floor(totalSeconds / 60)
      let seconds = (totalSeconds % 60);

      setTimeRemaining(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);


    return () => clearInterval(interval);
  });

  return (
    <div>

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
            <div className={isOrderRefundable && !isOrderExpired ? "btn btn-error btn-sm" : "btn btn-disabled btn-sm"} onClick={() => { socketRef.current.emit('cancel-order', orderId) }}>Cancel Order</div>
            <a href="google.com" className="flex text-xs mt-2 hover:underline">Have an issue with your order?</a>
          </div>

        </div>
      </div>

    </div>
  );
}
