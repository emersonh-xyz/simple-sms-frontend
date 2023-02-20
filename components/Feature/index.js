import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section ref={featureRef} className="bg-base-300">

      <div className="flex flex-col items-center">

        <span
          className="rounded-full bg-primary px-2 py-1 text-gray-900 text-sm"
        >
          About
        </span>

        <h1 className="text-md w-full lg:text-3xl font-medium text-center mt-6">
          Simple SMS is a secure and easy to use service.
        </h1>

      </div>

      <div className="flex flex-col items-center text-center">
        <div className="p-8 ">

          <Icon className="" width="50px" icon="material-symbols:no-accounts"></Icon>

          <h2 className="uppercase text-primary font-medium mb-2">
            No SignUp
          </h2>
          <p className="font-light">
            Enjoy privacy benefits and avoid sharing personal information.
          </p>

        </div>

        <div className="p-8">


          <Icon width="50px" icon="bxl:venmo"></Icon>

          <h2 className="uppercase text-primary font-medium mb-2">
            Venmo Secured
          </h2>
          <p >
            Checkout is secure and seamless through Venmo, ensuring the safety of your transaction.
          </p>


        </div>
        <div className="p-8">

          <Icon width="50px" icon="ic:baseline-discord"></Icon>

          <h2 className="uppercase text-primary font-medium mb-2">
            <a className="underline" href="https://discord.gg/YWrdUzDups">Support Discord</a>
          </h2>
          <p >
            Do not hesitate to reach out to us on our Discord channel for any assistance you may need.
          </p>
        </div>
      </div>
    </section>

  );
}
