import { Icon } from "@iconify-icon/react";
export default function Feature({ featureRef }) {
  return (
    <section ref={featureRef} className="bg-base-300">



      <div class="grid lg:grid-cols-4 grid-rows gap-4 text-center tracking-wide">
        <div class="">

          <Icon className="" width="50px" icon="material-symbols:no-accounts"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            No SignUp
          </h2>
          <p class="">
            Enjoy privacy benefits and avoid sharing personal information.
          </p>

        </div>

        <div class="">


          <Icon class="" width="50px" icon="bxl:venmo"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            Venmo Secured
          </h2>
          <p class="">
            Checkout is secure and seamless through <a target="_blank" rel="noreferrer" href="https://venmo.com" class="text-primary" >Venmo</a>, ensuring the safety of your transaction.
          </p>


        </div>
        <div class="">

          <Icon width="50px" class="" icon="ic:baseline-discord"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            Support Server
          </h2>

          <p class="">
            Do not hesitate to reach out to us on our  <a class="text-primary" rel="noreferrer" target="_blank" href="https://discord.com/invite/YWrdUzDups">Discord channel</a> for any assistance you may need.
          </p>



        </div>

        <div class="">

          <Icon width="50px" class="" icon="ri:refund-2-line"></Icon>

          <h2 class="uppercase text-primary font-medium mb-2">
            Refund guarantee
          </h2>

          <p class="">
            All of our numbers are refundable before being used. If the number is never used, it will be cancelled and refunded automatically.
          </p>



        </div>

      </div>

      <div class="divider"></div>

      <div class="border border-primary mt-2 scale-50 lg:scale-100">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/O_zBaOqKj_E" title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </section >
  );
}
