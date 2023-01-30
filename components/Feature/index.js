import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section ref={featureRef} className="bg-base-300">

      <div class="p-8">
        <div class="flex felx-col items-center justify-center">
          <span
            class="rounded-full bg-primary px-2 py-1 text-gray-900  text-sm"
          >
            About
          </span>
        </div>
        <h1 class="text-md w-full lg:text-4xl font-medium text-center mt-6">
          Simple SMS is a secure and easy to use service.
        </h1>
        <p class="text-center mt-6 text-lg font-light ">
          Premium SMS numbers, easy checkout, 100% refund guarantee.
        </p>
      </div>

      <div class="">
        <div class="p-8 text-center">

          <Icon className="" width="50px" icon="material-symbols:no-accounts"></Icon>

          <h2 class="uppercase mt-6 text-red-600 font-medium mb-3 ">
            No Sign up Required
          </h2>
          <p class="font-light text mb-3 text-sm ">
            Enjoy privacy benefits and avoid sharing personal information.
          </p>

        </div>

        <div class="p-8 text-center">

          <Icon width="50px" icon="mdi:encryption-secure"></Icon>

          <h2 class="uppercase mt-6 text-green-600 font-medium mb-3">
            Venmo Secured
          </h2>
          <p class="font-light mb-3 text-sm">
            Checkout is secure and seamless through Venmo, ensuring the safety of your transaction.
          </p>

        </div>
        <div class="p-8 text-center">

          <Icon width="50px" icon="ic:baseline-support-agent"></Icon>

          <h2 class="uppercase mt-6 text-indigo-500 font-medium mb-3 text-center">
            Support Discord
          </h2>
          <p class="font-light mb-3 text-sm">
            Do not hesitate to reach out to us on our Discord channel for any assistance you may need.
          </p>
          <a href="/discord" className="text-indigo-600 hover:text-indigo-700" >
            Join our Discord

          </a>
        </div>
      </div>
    </section >
  );
}
