import { Icon } from '@iconify-icon/react';
import React, { useState } from "react";
import CheckoutDetails from "../CheckoutDetails";

export default function ServiceSelector({ serviceList, startVenmoOrder }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");


  return (
    <>
      <div className="bg-base-200">
        <div class="p-20 w-full" style={{ background: "linear-gradient(90deg, #03C988 0%, #00337C 100%)" }}>
          <div class="ml-20">
            <h1 class="text-3xl font-medium title-font text-white text-left">
              simple-sms.io
            </h1>
            <h1></h1>
            <p class="text-base font-medium mx-auto text-left text-white">
              Premium disposable phone numbers
            </p>
            <p class="text-base mx-auto text-left mt-5 text-white">
              Premium disposable phone numbers
            </p>

          </div>
        </div>
        <div class="flex mt-6 justify-center">
          <div class="w-48 h-1 rounded-full bg-primary inline-flex"></div>
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <ul className="steps steps-horizontal ">
            <li className="step step-primary">Select Service</li>
            <li className={service !== "" ? "step step-primary" : "step"}>
              Checkout
            </li>
            <li className="step">Await Code</li>
          </ul>
        </div>
        <div className="md:flex md:justify-center mt-8 ">
          <div className="card w-96 drop-shadow-lg bg-base-100 ">
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
                                ? "active text-primary hover:cursor-pointer"
                                : "hover:text-primary hover:cursor-pointer"
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
                            <th className="text-xs">$0.99 USD</th>
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
      </div>
    </>
  );
}
