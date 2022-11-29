export default function Navbar() {
  return (
    <>
      <div className="navbar ">
        <div className="flex-1">
          <a className="flex font-medium ">
            <p className="ml-8">Simple SMS</p>
          </a>
        </div>
        <div className="flex-none">
          <p className="hover:border-b-2 mr-8">Login</p>
          <p className="hover:border-b-2 mr-8">About</p>
        </div>
      </div>
    </>
  );
}
