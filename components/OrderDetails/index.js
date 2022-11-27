import Image from "next/image";

export default function OrderDetails({ props }) {
  const service = props;

  return (
    <div>
      <div className="card drop-shadow-lg bg-base-100 md:ml-5 md:mt-0 mt-5">
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
            className="absolute top-24 right-16 rounded-full "
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
  );
}