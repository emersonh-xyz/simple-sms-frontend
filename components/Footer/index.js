import { Icon } from "@iconify-icon/react";
export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-base-200 text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved by simple-sms.io</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="ic:baseline-discord"></Icon>
        <Icon className="hover:text-primary hover:cursor-pointer" width="20px" icon="mdi:twitter"></Icon>
      </div>
    </footer>
  );
}
