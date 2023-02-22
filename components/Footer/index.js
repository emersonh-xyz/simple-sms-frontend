import { Icon } from "@iconify-icon/react";
export default function Footer() {
  return (
    <footer className="footer items-center p-4 md:grid-cols-3 text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved by simple-sms.io</p>
      </div>

      <div className="grid-flow-col gap-4 md:place-self-center p-2 hover:text-white hover:cursor-pointer font-light">
        <a href="https://www.trustpilot.com/review/simple-sms.io" class="text-lg flex justify-between items-center"> <Icon width={25} className="mr-1 text-[#007f4e]" icon={"simple-icons:trustpilot"}></Icon> Review us on TrustPilot</a>
      </div>

      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://discord.gg/YWrdUzDups"><Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="ic:baseline-discord"></Icon></a>
        <Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="mdi:twitter"></Icon>
      </div>
    </footer>
  );
}
