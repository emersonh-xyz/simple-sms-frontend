import React, { useState } from "react";
import { data } from "../../data/data";

export default function CheckoutContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");
  console.log(data);

  return (
    <>
      <div className="p-10 mt-2 bg-base-200">
        <div class="container px-5 mx-auto mt-10">
          <div class="text-center ">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Getting Started
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Start by selecting the service you plan to use and proceed to
              checkout. Afterwards you'll be redirected to your virtual phone to
              monitor incoming messages.
            </p>

            <div className="w-full flex flex-col justify-center items-center mt-5">
              <ul className="steps steps-vertical lg:steps-horizontal ">
                <li className="step step-primary">Select Service</li>
                <li className={service !== "" ? "step step-primary" : "step"}>
                  Checkout
                </li>
                <li className="step">Await Code</li>
              </ul>
            </div>

            <div class="flex mt-6 justify-center">
              <div class="w-48 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-10 ">
          <div className="p-10">
            <div className="card drop-shadow-lg bg-base-100 w-96 h-fit ">
              <div className="card-body ">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <div className="h-48 overflow-x-auto rounded-md">
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
                              <th className="flex">
                                <img
                                  className="w-5 h-5 mr-1 align-middle"
                                  src="https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/dr0.webp"
                                />
                                <span>{val.service_name}</span>
                              </th>
                              <th className="text-xs">{val.price}¢</th>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {service !== "" && (
            <div>
              <div className="card drop-shadow-lg bg-base-100 w-96 h-fit ml-5 ">
                <div className="card-body mx-auto">
                  <h2 className="card-title mx-auto text-center">
                    Verify Order Details
                  </h2>

                  <img
                    className="mx-auto w-20 h-20"
                    src="https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/dr0.webp"
                  />

                  <span className="text-center font-bold">
                    {service.service_name} | 00{service.price}¢
                  </span>

                  <div className="card-actions ">
                    <button className="btn border-none bg-[#008CFF] text-white">
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
