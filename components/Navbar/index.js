export default function Navbar() {
  return (
    <>
      <div className="navbar ">
        <div className="flex-1">
          <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <svg className="w-10" viewBox="0 0 20 20">
              <path d="M13.372,1.781H6.628c-0.696,0-1.265,0.569-1.265,1.265v13.91c0,0.695,0.569,1.265,1.265,1.265h6.744c0.695,0,1.265-0.569,1.265-1.265V3.045C14.637,2.35,14.067,1.781,13.372,1.781 M13.794,16.955c0,0.228-0.194,0.421-0.422,0.421H6.628c-0.228,0-0.421-0.193-0.421-0.421v-0.843h7.587V16.955z M13.794,15.269H6.207V4.731h7.587V15.269z M13.794,3.888H6.207V3.045c0-0.228,0.194-0.421,0.421-0.421h6.744c0.228,0,0.422,0.194,0.422,0.421V3.888z"></path>
            </svg>
            <p className="align-middle">Simple SMS</p>
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
