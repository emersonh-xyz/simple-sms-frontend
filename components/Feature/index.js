import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section className="bg-base-300">

      <div>

        <p className="inline-block px-3 py-px mb-5 text-xs font-semibold tracking-wider text-primary uppercase rounded-full">
          Why Simple SMS
        </p>
      </div>

      <div className="grid lg:grid-cols-4 grid-rows gap-12 text-center tracking-wide ">
        <div className="">

          <Icon width="32px" icon="material-symbols:no-accounts"></Icon>

          <h2 className="uppercase text-primary font-medium mb-2">
            No SignUp
          </h2>
          <p className="text-xs">
            Enjoy <span className="text-primary">privacy</span> benefits and avoid sharing personal information.
          </p>

        </div>

        <div>
          <Icon width="32px" icon="bxl:venmo"></Icon>
          <h2 className="uppercase text-primary font-medium mb-2">
            Venmo Secured
          </h2>
          <p className="text-xs">
            Checkout is secure and seamless through <a target="_blank" rel="noreferrer" href="https://venmo.com" className="text-primary" >Venmo</a>, ensuring the safety of your transaction.
          </p>
        </div>
        <div>
          <Icon width="32px" className="" icon="ic:baseline-discord"></Icon>
          <h2 className="uppercase text-primary font-medium mb-2">
            Support Server
          </h2>
          <p className="text-xs">
            Do not hesitate to reach out to us on our  <a className="text-primary" rel="noreferrer" target="_blank" href="https://discord.com/invite/YWrdUzDups">Discord channel</a> for any assistance you may need.
          </p>
        </div>

        <div className="">

          <Icon width="32px" className="" icon="ri:refund-2-line"></Icon>

          <h2 className="uppercase text-primary font-medium mb-2">
            Refund guarantee
          </h2>

          <p className="text-xs">
            If the number is never used, it will be cancelled and <span className="text-primary">refunded</span> automatically.
          </p>



        </div>

      </div>

      <div className="divider"></div>
      <p className="inline-block px-3 py-px mb-5 text-xs font-semibold tracking-wider text-primary uppercase rounded-full">
        How it Works
      </p>
      <div className="border border-primary mt-2 scale-75 lg:scale-100">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O_zBaOqKj_E" title="YouTube video player" frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>



    </section >
  );
}
