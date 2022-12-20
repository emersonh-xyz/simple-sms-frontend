import { useEffect, useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(window.localStorage.getItem("theme"));
  }, []);

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="flex font-medium ">
            <p className="ml-8">Simple SMS</p>
          </a>
        </div>
        <div className="flex-none">
          <p className="hover:border-b-2 mr-8">Login</p>
          <p className="hover:border-b-2 mr-8">About</p>
          <div
            className=""
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
                window.localStorage.setItem("theme", "dark");
              } else {
                setTheme("light");
                window.localStorage.setItem("theme", "light");
              }
            }}
          >
            sdsdsd
          </div>
        </div>
      </div>
    </>
  );
}
