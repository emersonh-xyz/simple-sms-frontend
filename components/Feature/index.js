import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section ref={featureRef} className="bg-base-300">

      <div class="p-8 lg:mr-14">
        <div class="flex felx-col items-center justify-center ">
          <span
            class="rounded-full bg-primary px-2 py-1 text-gray-900 text-sm"
          >
            About
          </span>
        </div>
        <h1 class="text-md w-full lg:text-3xl font-medium text-center mt-6">
          Simple SMS is a secure and easy to use service.
        </h1>
        <p class="text-center mt-6 text-lg font-light ">
          Premium SMS numbers, easy checkout, 100% refund guarantee.
        </p>
      </div>

      <div class="flex lg:flex-row flex-col justify-center items-center text-center">
        <div class="p-8 ">

          <Icon className="" width="50px" icon="material-symbols:no-accounts"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            No SignUp
          </h2>
          <p class="">
            Enjoy privacy benefits and avoid sharing personal information.
          </p>

        </div>

        <div class="p-8">


          <Icon class="" width="50px" icon="bxl:venmo"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            Venmo Secured
          </h2>
          <p class="">
            Checkout is secure and seamless through Venmo, ensuring the safety of your transaction.
          </p>


        </div>
        <div class="p-8">

          <Icon width="50px" class="" icon="ic:baseline-discord"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            <a class="underline" href="https://discord.gg/YWrdUzDups">Support Discord</a>
          </h2>
          <p class="">
            Do not hesitate to reach out to us on our Discord channel for any assistance you may need.
          </p>
        </div>
      </div>
    </section >
  );
}
