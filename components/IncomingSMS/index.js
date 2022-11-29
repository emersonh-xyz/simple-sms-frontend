import {
  faCancel,
  faClipboard,
  faHashtag,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IncomingSMS() {
  return (
    <div className="card w-96 drop-shadow-lg bg-base-100">
      <div className="card-body">
        <div className="card-title drop-shadow-xl">
          <p className="text-2xl font-bold btn">(123) 456-789</p>
        </div>

        <div></div>

        <div className="divider ">Extracted Code</div>

        {/* <div className=" border-2 text-center">
          <div className="animate-pulse mx-center">
            Waiting for new messages...
          </div>
        </div> */}

        {/*Extracted codes container*/}

        <div className="container">
          <div className="border-2 text-center p-5 rounded-md">
            <div className="indicator w-full">
              <span className="indicator-item badge">new</span>
              <div className="border-2 rounded-md border-success w-full">
                <p>#3030</p>
              </div>
            </div>

            <div className="mx-center rounded-md border-2 border-success mt-2 ">
              <p>#5030</p>
            </div>

            <div className="mx-center rounded-md border-2 border-success mt-2 ">
              <p>#2030</p>
            </div>
          </div>
        </div>

        <div className="divider ">Raw Messages</div>

        {/*Raw messages container*/}
        <div className="container">
          <div className="border-2 rounded-md bg-base-100 text-center p-5">
            {/* <div className="animate-pulse ">Waiting for new messages...</div> */}
            <div className="mx-center rounded-md border-2 border-success mt-2">
              Your code is: #2030
            </div>
          </div>
        </div>
        <div className="divider ">Order Details</div>
        <div className="card-actions grid justify-start">
          <img
            className="absolute right-8"
            src="data:image/webp;base64,UklGRmQBAABXRUJQVlA4IFgBAACwCwCdASpAAEAAPmUskEWkIqGYDv58QAZEsgBqYsbePfJ2gnE396+6rtAbYDxJd8A/XTrY/Qv8sH2XfJuCaBgSBfjKyrcxcIM/MsQRQGgyQwAHPCyP/lNoB/eodRC+2mP9VaePFgAA/v2tD9j2QGHXy8T3V7e/2cdLeIfyTb8P+xvfOq/KjvATmQ8zTZmPT2cGMgbHABwkYnheC2+B+BCDYFCGknZsXbbv2pJ0pSG8ehVHnjrXDgFeti463c0AYeJlqjozfSFh/6s+NmKDsmhCBWPM3u22fYYNBGu2FsVybQi241hlX1sV5KNvU3IkjtXsw6e/e/5pqnJ53Ocs73OKxyV+Ykt6EYNJCty1Qj0mAiybsv1Cp96FtSYSNDsrnQff//DxHKX/4etF+17Dta00N07sdySkY8s1ljheOTROMbbZGHu2D1Bo3uTfFvx5/FANTjJnPigAAA=="
          />

          <div>
            <p className="">(123) 456-789</p>
            <p className="">Service: Netflix</p>
            <p className="">Expires in: 20:00</p>
            <p className="">Order: #xxxx-222-3333-4444</p>
          </div>

          <div className="mx-left btn btn-sm">
            <FontAwesomeIcon className="mr-1" icon={faCancel} />
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
}
