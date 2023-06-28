import { Icon } from "@iconify-icon/react";
export default function Footer({ props }) {



  return (
    // <footer className="footer items-center md:grid-cols-3 text-neutral-content bg-base-300">
    //   <div className="p-2 items-center grid-flow-col">
    //     <p className="">Copyright © 2023 - All right reserved by simple-sms.io</p>
    //   </div>

    //   <div className="grid-flow-col gap-4 md:place-self-center p-2 hover:animate-pulse hover:cursor-pointer">
    //     <a href="https://www.trustpilot.com/review/simple-sms.io" className=" flex justify-between items-center">  Review us on <Icon width={20} className=" ml-1 mr-1 text-[#007f4e]" icon={"simple-icons:trustpilot"}></Icon>TrustPilot</a>
    //   </div>

    //   <div className="p-2 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    //    
    //   </div>
    // </footer>

    // Very intelligent way to swap backgrounds for order & non order page
    <footer className={`footer footer-center p-10 ${props ? " bg-base-300" : "bg-base-200"}`}>
      <div>

        <p className="font-bold">
          Simple SMS <br />Copyright © 2023 - All right reserved
        </p>

        <p>Made with 💖 by Noah & Emerson</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://discord.gg/YWrdUzDups"><Icon className="hover:cursor-pointer" width="24px" icon="ic:baseline-discord"></Icon></a>
          <a href="https://twitter.com/theSimpleSMS"><Icon size={40} className=" hover:cursor-pointer" width="24px" icon="mdi:twitter"></Icon></a>
        </div>
      </div>
    </footer>
  );
}
