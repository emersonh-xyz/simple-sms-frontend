import { Icon } from '@iconify-icon/react';
import React, { useState } from "react";
import CheckoutDetails from "../CheckoutDetails";

export default function ServiceSelector({ serviceList, startVenmoOrder, serviceSelectorRef }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");


  return (
    <>
      <section ref={serviceSelectorRef} className="bg-base-100 p-30">

        <div className="w-full flex flex-col justify-center items-center ">
          <p className=" font-thin text-2xl">Select your service below </p>
          <ul className="steps">
            <li className="step step-secondary">Select Service</li>
            <li className={service !== "" ? "step step-secondary" : "step"}>
              Checkout
            </li>
            <li className="step">Await Code</li>
          </ul>
        </div>
        <div className="md:flex md:justify-center mt-8 mb-10 ">
          <div className="card w-96 drop-shadow-lg bg-base-300 ">
            <div className="card-body" >
              <input
                type="text"
                placeholder="Search for services..."
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />

              <div className="overflow-x-auto rounded-md max-h-96 drop-shadow-lg ">
                <table className="table table-zebra w-full ">
                  <thead>
                    <tr>
                      <th>Service</th>
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
                                ? "active text-secondary hover:cursor-pointer"
                                : "hover:scale-95 hover:cursor-pointer"
                            }
                            onClick={() => setService(val)}
                          >
                            <th>
                              <a className="flex items-center">
                                <Icon width={20} height={20} icon={val.service_icon} className="mr-2 rounded-full" />
                                <p className="align-middle">
                                  {val.service_name}
                                </p>
                              </a>
                            </th>
                            <th className="text-xs">${(val.service_price / 100).toFixed(2)} USD</th>
                          </tr>
                        );
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
              className=""
            />
          )}
        </div>


        <div class="custom-shape-divider-bottom-1674078160">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </div>

      </section>
    </>
  );
}
