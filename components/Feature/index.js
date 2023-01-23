import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section ref={featureRef} className="body-font bg-base-200">

      <div class="p-8">
        <div class="flex felx-col items-center justify-center">
          <span
            class="rounded-full bg-primary px-2 py-1 text-white uppercase text-sm"
          >
            About
          </span>
        </div>
        <h1 class="text-4xl font-medium text-center mt-6">
          Simple SMS is a secure and easy to use service.
        </h1>
        <p class="text-center mt-6 text-lg font-light text-gray-500">
          Premium SMS numbers, easy checkout, 100% refund guarantee.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="p-8">
          <div
            class="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl"
          >
            <Icon width="50px" icon="material-symbols:no-accounts"></Icon>
          </div>
          <h2 class="uppercase mt-6 text-red-500 font-medium mb-3">
            No Sign up Required
          </h2>
          <p class="font-light text mb-3 text-sm">
            Enjoy privacy benefits and avoid sharing personal information.
          </p>

        </div>

        <div class="p-8">
          <div
            class="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl"
          >
            <Icon width="50px" icon="mdi:encryption-secure"></Icon>
          </div>
          <h2 class="uppercase mt-6 text-green-500 font-medium mb-3">
            Venmo Secured
          </h2>
          <p class="font-light mb-3 text-sm">
            Checkout is secure and seamless through Venmo, ensuring the safety of your transaction.
          </p>

        </div>
        <div class="p-8">
          <div
            class="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl"
          >
            <Icon width="50px" icon="ic:baseline-support-agent"></Icon>
          </div>
          <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3">
            Support Discord
          </h2>
          <p class="font-light mb-3 text-sm">
            Do not hesitate to reach out to us on our Discord channel for any assistance you may need.
          </p>
          <a href="/discord" className="text-indigo-500 flex items-center hover:text-indigo-600" >
            Join our Discord
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
