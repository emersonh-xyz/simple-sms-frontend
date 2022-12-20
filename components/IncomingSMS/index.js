import { useState } from "react";

export default function IncomingSMS({
  phoneNumber,
  expirationDate,
  service,
  messages,
}) {
  const [hasMessages, setHasMessages] = useState(false);

  // prettier-ignore
  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1,4)}) 
  ${phoneNumber.substring(4,7)}-${phoneNumber.substring(7)}`;

  return (
    <div className="card w-96 drop-shadow-lg bg-base-100">
      <div className="card-body">
        <div className="card-title drop-shadow-xl">
          <p className="text-3xl font-bold text-center">{updatedNumber}</p>
        </div>

        <div className="divider ">Extracted Codes</div>

        {/*Extracted codes container*/}

        <div className="container bg-base-300 drop-shadow-xl rounded-lg">
          <div className="text-center p-5 rounded-md">
            {/* <div className=" indicator w-full">
              <span className="indicator-item badge badge-sm badge-secondary">
                new
              </span>
              <div className="rounded-md w-full bg-base-100 drop-shadow-xl ">
                <p>#3030</p>
              </div>
            </div>

            <div className="mx-center rounded-md mt-2 bg-base-100 drop-shadow-xl ">
              <p>#5030</p>
            </div>

            <div className="mx-center rounded-md mt-2 bg-base-100 drop-shadow-xl ">
              <p>#2030</p>
            </div> */}
            <div className="animate-pulse mx-center">
              Waiting for new messages...
            </div>
          </div>
        </div>

        <div className="divider ">Raw Messages</div>

        {/*Raw messages container*/}
        <div className="container bg-base-300 drop-shadow-xl rounded-lg">
          <div className="rounded-md text-center p-5">
            <div className="animate-pulse ">Waiting for new messages...</div>
            {/* <div className="rounded-md bg-base-100 drop-shadow-xl hover:scale-105">
              Your code is: #3030
            </div>
            <div className="rounded-md mt-2 bg-base-100 drop-shadow-xl hover:scale-105">
              Your verifcation code is: #5030
            </div>
            <div className="rounded-md mt-2 bg-base-100 drop-shadow-xl hover:scale-105">
              Enter your verifcation code of: #2030
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
