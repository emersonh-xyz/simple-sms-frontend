import { useState } from "react";

export default function IncomingSMS({
  phoneNumber,
  expirationDate,
  service,
  messages,
  isOrderExpired
}) {

  const [hasMessages, setHasMessages] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // prettier-ignore
  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) 
  ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;

  return (
    <div className="card w-96 drop-shadow-lg bg-base-100">



      <div className="card-body">
        <div className="card-title drop-shadow-xl">
          <div className="tooltip text-3xl font-bold mx-auto hover:cursor-pointer" data-tip={isCopied ? "Copied!" : "Click to copy to clipboard"} onClick={() => { setIsCopied(true); navigator.clipboard.writeText(phoneNumber); }} onMouseLeave={() => { setIsCopied(false); }}>{updatedNumber}</div>

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
