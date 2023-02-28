import { Icon } from "@iconify-icon/react";
export default function Footer() {
  return (
    <footer className="footer items-center  md:grid-cols-3 text-neutral-content bg-base-100">
      <div className="p-2 items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved by simple-sms.io</p>
      </div>

      <div className="grid-flow-col gap-4 md:place-self-center p-2 hover:animate-pulse hover:cursor-pointer font-light">
        <a href="https://www.trustpilot.com/review/simple-sms.io" className="text-lg flex justify-between items-center">  Review us on <Icon width={20} className=" ml-1 mr-1 text-[#007f4e]" icon={"simple-icons:trustpilot"}></Icon>TrustPilot</a>
      </div>

      <div className="p-2 grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://discord.gg/YWrdUzDups"><Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="ic:baseline-discord"></Icon></a>
        <a href="https://twitter.com/theSimpleSMS"><Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="mdi:twitter"></Icon></a>
      </div>
    </footer>
  );
}
