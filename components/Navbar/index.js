export default function Navbar() {
  return (
    <>
      <div className="navbar ">
        <div className="flex-1">
          <a className="ml-10 backdrop:normal-case text-2xl font-sans">
            Simple SMS
          </a>
        </div>
        <div className="flex-none">
          <p className="text-lg text-gray-500 hover:text-black mr-8 font-semibold hover:border-b-2">
            Login
          </p>
          <p className="text-lg text-gray-500 hover:text-black mr-48 font-semibold hover:border-b-2">
            About
          </p>
        </div>
      </div>
    </>
  );
}
