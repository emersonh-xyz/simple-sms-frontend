import { Icon } from '@iconify-icon/react';
import React, { useRef, useState } from "react";
import CheckoutDetails from "../CheckoutDetails";

export default function ServiceSelector({ serviceList, startVenmoOrder, serviceSelectorRef, venmoRef, isOrderConfirmed, service, setService }) {

  const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <section ref={serviceSelectorRef} className="p-10">

        <div className="w-full flex flex-col justify-center items-center ">
          <p className=" lg:text-2xl font-thin text-xl mb-5 mt-5">Select your service below </p>
          <ul className="steps">
            <li className="step step-primary font-thin">Select Service</li>
            <li className={service !== "" ? "step step-primary font-thin" : "step font-thin"}>
              Checkout
            </li>
            <li className="step font-thin">Await Code</li>
          </ul>
        </div>
        <div className="md:flex md:justify-center mt-5 mb-12 ">
          <div className="card drop-shadow-lg bg-base-300">
            <div className="card-body" >
              <input
                type="text"
                placeholder="Search for services..."
                className="input input-bordered w-full"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />

              <div className="overflow-x-auto rounded-md max-h-96 drop-shadow-lg">
                <table className="table table-zebra w-full ">
                  <thead>
                    <tr>
                      <th>Service</th>
                      {/* <th></th> */}
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map over all data and filter by search results */}
                    {serviceList
                      .filter((item) => {
                        return searchTerm.toLowerCase() === ""
                          ? item
                          : (item.service_name.toLowerCase().includes(searchTerm.toLowerCase())) || item.is_other;
                      })
                      .map((val, index) => {
                        return (

                          <tr
                            key={index}
                            className={
                              service === val
                                ? `${val.disabled ? "text-gray-700" : "active text-[#eab308] hover:cursor-pointer"}`
                                : `${val.disabled ? "hover:cursor-not-allowed" : "hover:scale-95 hover:cursor-pointer"}`
                            }

                            onClick={() => {
                              if (val.disabled) {
                                return
                              } else {
                                setService(val);
                              }

                            }}
                          >

                            <th>
                              <div className={`${val.disabled && "tooltip tooltip-error "}`} data-tip="Service offline">
                                <a href="#checkout" className="flex items-center">
                                  <Icon width={20} height={20} icon={val.service_icon} className={`mr-2 rounded-full ${val.disabled ? "text-gray-700" : ""}`} />
                                  <p className={`align-middle ${val.disabled ? " text-gray-700" : ""}`}>
                                    {val.service_name}
                                  </p>
                                </a>
                              </div>
                            </th>
                            {/* <th><div className={`${val.disabled ? "badge badge-error rounded-md" : ""}`}>{val.disabled && "disabled"}</div></th> */}
                            <th className="text-xs">${(val.service_price / 100).toFixed(2)} USD</th>

                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* If our service isn't blank then render the order details */}
          {service !== "" && (
            <CheckoutDetails
              service={service}
              startVenmoOrder={startVenmoOrder}
              venmoRef={venmoRef}
              isOrderConfirmed={isOrderConfirmed}
              className=""
              id="checkout"
            />
          )}
        </div>


        {/* <div className="invisible lg:visible custom-shape-divider-bottom-1674078160 drop-shadow-lg">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div> */}

      </section>
    </>
  );
}
