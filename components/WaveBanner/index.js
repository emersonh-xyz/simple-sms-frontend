import { Icon } from "@iconify-icon/react";
export default function WaveBanner({ serviceSelectorRef }) {



    const executeScroll = () => serviceSelectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });



    return (
        <section style={{ backgroundColor: `#FF3CAC`, background: `linear-gradient(225deg, #2B86C5 0%, #784BA0 50%, #FF3CAC 100%)` }}>



            <div className="absolute left-20">
                <div className="text-white ">
                    <p className="text-xl font-medium ">Simple SMS</p>
                </div>
            </div>

            <p className="text-4xl font-medium text-center ">The premium <a className="text-primary">all-in-one</a> SMS number provider</p>
            <p className="text-md font-thin mt-2">Effortlessly purchase affordable phone numbers with our user-friendly, elegant interface. </p>

            <button onClick={() => executeScroll()} className=" mt-2 text-white border-2 font-medium border-white hover:scale-95 hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
            >
                Purchase Number
            </button>



            <div className="absolute right-20">

                <button onClick={() => executeScroll()} className="text-[#eab308] border-2 border-[#eab308] font-medium  hover:bg-[#eab308] hover:text-black hover:scale-95 px-4 py-2 text-sm  rounded-full outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-2" type="button"
                >
                    About
                </button>
            </div>




            <div className="custom-shape-divider-bottom-1674077680  drop-shadow-lg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>


        </section>
    )
}