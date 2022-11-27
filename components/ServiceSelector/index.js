import Image from "next/image";
import React, { useState } from "react";
import OrderDetails from "../OrderDetails";

export default function ServiceSelector({ props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");

  // Import all service data from props
  const data = props;

  return (
    <>
      <div className="p-10 bg-base-200">
        <div class="container px-5 mx-auto ">
          <div class="text-center ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font  mb-4">
              Getting Started
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Start by selecting the service you plan to use and proceed to
              checkout. Afterwards you'll be redirected to your virtual phone to
              monitor incoming messages.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-48 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-5">
              <ul className="steps steps-vertical lg:steps-horizontal ">
                <li className="step step-primary">Select Service</li>
                <li className={service !== "" ? "step step-primary" : "step"}>
                  Checkout
                </li>
                <li className="step">Await Code</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center mx-auto mt-10 ">
          <div className="card drop-shadow-lg bg-base-100 w-96">
            <div className="card-body">
              <input
                type="text"
                placeholder="Search for services..."
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
              <div className="overflow-auto rounded-md max-h-56 shadow-xl">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map over all data and filter by search results */}
                    {data
                      .filter((item) => {
                        return searchTerm.toLowerCase() === ""
                          ? item
                          : item.service_name
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase());
                      })
                      .map((val, index) => {
                        return (
                          <tr
                            key={index}
                            className={
                              service === val
                                ? "active hover:text-primary hover:cursor-pointer"
                                : "hover:text-primary hover:cursor-pointer"
                            }
                            onClick={() => setService(val)}
                          >
                            <th>
                              <a className="flex items-center">
                                <Image
                                  src={`data:image/webp;base64,${val.service_logo_encoded}`}
                                  alt="Service Logo"
                                  width={20}
                                  height={20}
                                  className="mr-2"
                                ></Image>
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
          {service !== "" && <OrderDetails props={service} />}
        </div>
      </div>
    </>
  );
}
