import Image from "next/image";
import React, { useEffect, useState } from "react";
import data from "../../data/services.json";

export default function CheckoutContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");

  data.sort(function (a, b) {
    a = a.service_name.toLowerCase();
    b = b.service_name.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });

  return (
    <>
      <div className="p-10 bg-base-200">
        <div class="container px-5 mx-auto ">
          <div class="text-center ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
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
                                  {" "}
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

          {service !== "" && (
            <div>
              <div className="card drop-shadow-lg bg-base-100 ml-5 w-96">
                <div className="card-body ">
                  <ul className="menu mx-center bg-base-100 w-full">
                    <li className="">
                      <span className="text-2xl text-black hover:bg-base-100">
                        Verify Order Details
                      </span>
                    </li>

                    <li className="menu-title">
                      <span>Service</span>
                    </li>
                    <li>
                      <a>{service.service_name}</a>
                    </li>
                    <li className="menu-title">
                      <span>Total</span>
                    </li>
                    <li>
                      <a>$0.99 USD</a>
                    </li>
                  </ul>

                  <Image
                    src={`data:image/webp;base64,${service.service_logo_encoded}`}
                    alt="Service Logo"
                    width={70}
                    height={70}
                    className="absolute  top-24 right-16 rounded-full ring-4 ring-neutral ring-offset-base-100 "
                  ></Image>

                  <div className="divider mt-0"></div>
                  <div className="card-actions ">
                    <button className="btn w-full border-none bg-[#008CFF] text-white">
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
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
