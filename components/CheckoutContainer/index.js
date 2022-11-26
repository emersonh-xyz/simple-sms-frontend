import React, { useState } from "react";
import { data } from "../../data/data";

export default function CheckoutContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [service, setService] = useState("");
  console.log(data);

  return (
    <>
      <div className="bg-base-100 p-10">
        <div className="w-full flex flex-col justify-center items-center mt-5">
          <ul className="steps steps-vertical lg:steps-horizontal ">
            <li className="step step-primary">Select Service</li>
            <li className={service !== "" ? "step step-primary" : "step"}>
              Checkout
            </li>
            <li className="step">Await Code</li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-center items-center mt-5 ">
          <div className="">
            <div className="card w-96 h-fit border-2 bg-base-100 ">
              <div className="card-body ">
                <input
                  type="text"
                  placeholder="Search for services..."
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <ul className="p-2 bg-base-200 max-h-44 rounded-box text-lg overflow-auto">
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
                        <div key={index} onClick={() => setService(val)}>
                          <li
                            className={
                              service === val
                                ? "p-2 bg-primary rounded-lg"
                                : "p-2"
                            }
                          >
                            <a className={service === val ? "text-white" : ""}>
                              {val.service_name}
                            </a>
                          </li>
                        </div>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>

          {service !== "" && (
            <div>
              <div className="card w-96 border-2 shadow-xl h-fit bg-base-100 ml-5">
                <div className="card-body">
                  <h2 className="card-title">Order Confirmation</h2>
                  <p>Selected Service: {service.service_name}</p>
                  <p>Price: {service.price}¢</p>
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
