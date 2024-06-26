import { useState } from "react";

export default function IncomingSMS({
  phoneNumber,
  messages,
}) {

  const [hasMessages, setHasMessages] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // prettier-ignore
  let updatedNumber = `+${phoneNumber.substring(0, 1)} (${phoneNumber.substring(1, 4)}) 
  ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;

  return (


    <div className="card drop-shadow-lg bg-base-300 mt-5 mb-5 md:w-96 w-fit md:mt-0 h-fit pb-16 m-auto">
      <div className="card-body">
        <div className="card-title drop-shadow-xl">
          <div className="tooltip text-3xl mx-auto hover:cursor-pointer" data-tip={isCopied ? "Copied!" : "Click to copy to clipboard"} onClick={() => { setIsCopied(true); navigator.clipboard.writeText(phoneNumber.substring(1)); }} onMouseLeave={() => { setIsCopied(false); }}>{updatedNumber}</div>

        </div>


        <div className="divider">Extracted Codes</div>

        {/*Extracted codes container*/}

        <div className="container bg-base-200 drop-shadow-xl rounded-lg">
          <div className="text-center p-6">

            {messages.length > 0 ?

              <>

                {messages.map((message, index) => {

                  if (index == 0) {
                    return (
                      <div key={index} className="indicator w-full">

                        <span className="indicator-item badge badge-sm badge-secondary">
                          new
                        </span>

                        <div className="tooltip tooltip-left hover:cursor-pointer rounded-md bg-base-100 drop-shadow-xl w-full " data-tip={isCopied ? "Copied!" : "Click to copy"} onClick={() => { setIsCopied(true); navigator.clipboard.writeText(message.code); }} onMouseLeave={() => { setIsCopied(false); }}>
                          <p>{message.code}</p>
                        </div>

                      </div>
                    )
                  } else {

                    return (
                      <div key={index} className="tooltip tooltip-left hover:cursor-pointer rounded-md mt-2 bg-base-100 drop-shadow-xl w-full" data-tip={isCopied ? "Copied!" : "Click to copy"} onClick={() => { setIsCopied(true); navigator.clipboard.writeText(message.code); }} onMouseLeave={() => { setIsCopied(false); }}>
                        <p>{message.code}</p>
                      </div>
                    )
                  }

                })}

              </>

              :

              <div className="flex justify-center">
                <span className="loading loading-bars loading-sm"></span>
              </div>

            }


          </div>
        </div>

        <div className="divider ">Raw Messages</div>

        {/*Raw messages container*/}
        <div className="container bg-base-200 drop-shadow-xl rounded-lg">
          <div className="rounded-md text-center p-6">

            {messages.length > 0 ?

              <>

                {messages.map((message, index) => {


                  if (index == 0) {
                    return (
                      <div key={index} className="p-2 rounded-md bg-base-100 drop-shadow-xl">
                        {message.fullText}
                      </div>
                    )
                  }

                  return (
                    <div key={index} className="p-2 rounded-md bg-base-100 drop-shadow-xl mt-2">
                      {message.fullText}
                    </div>
                  )

                })}
              </>
              :
              <div className="flex justify-center">
                <span className="loading loading-bars loading-sm"></span>
              </div>
            }

          </div>
        </div>
      </div>
    </div>

  );
}
