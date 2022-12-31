import { useState } from "react";

export default function IncomingSMS({
  phoneNumber,
  expirationDate,
  service,
  messages,
  isOrderExpired
}) {

  const [hasMessages, setHasMessages] = useState(false);

  // prettier-ignore
  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) 
  ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;

  return (
    <div className="card w-96 drop-shadow-lg bg-base-100">
      {isOrderExpired &&

        <div className="alert alert-error shadow-xl ">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className=" text-xl">This order has expired.</span>
          </div>
        </div>
      }
      <div className="card-body">
        <div className="card-title drop-shadow-xl">
          <div className="text-3xl font-bold text-center">{updatedNumber}</div>

        </div>

        <div className="divider ">Extracted Codes</div>

        {/*Extracted codes container*/}

        <div className="container bg-base-300 drop-shadow-xl rounded-lg">
          <div className="text-center p-5 rounded-md">

            {messages.length > 0 ?

              <>

                {messages.map((message, index) => {

                  if (index == 0) {
                    return (
                      <div key={index} className="indicator w-full">

                        <span className="indicator-item badge badge-sm badge-secondary">
                          new
                        </span>

                        <div className="rounded-md bg-base-100 drop-shadow-xl w-full ">
                          <p>{message.code}</p>
                        </div>

                      </div>
                    )
                  } else {

                    return (
                      <div key={index} className="rounded-md mt-2 bg-base-100 drop-shadow-xl ">
                        <p>{message.code}</p>
                      </div>
                    )
                  }

                })}

              </>

              :

              <>
                <div className="animate-pulse mx-center">
                  Waiting for new messages...
                </div>
              </>

            }


          </div>
        </div>

        <div className="divider ">Raw Messages</div>

        {/*Raw messages container*/}
        <div className="container bg-base-300 drop-shadow-xl rounded-lg">
          <div className="rounded-md text-center p-5">

            {messages.length > 0 ?

              <>

                {messages.map((message, index) => {


                  if (index == 0) {
                    return (
                      <div key={index} className="rounded-md bg-base-100 drop-shadow-xl">
                        {message.fullText}
                      </div>
                    )
                  }

                  return (
                    <div key={index} className="rounded-md bg-base-100 drop-shadow-xl mt-2">
                      {message.fullText}
                    </div>
                  )

                })}



              </>
              :
              <>
                <div className="animate-pulse ">Waiting for new messages...</div>
              </>

            }


          </div>
        </div>
      </div>
    </div>
  );
}
