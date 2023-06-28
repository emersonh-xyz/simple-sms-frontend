import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme"));
  }, []);

  return (

    <div className="navbar bg-base-300">


      <div className="flex-1">

        <Link className="flex font-medium ml-4 " href="/">Simple SMS</Link>

      </div>




    </div>

  );
}
