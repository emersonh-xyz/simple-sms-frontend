import { Icon } from "@iconify-icon/react";
export default function WaveBanner({ serviceSelectorRef }) {



    const executeScroll = () => serviceSelectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });



    return (
        <section style={{ backgroundColor: `#FF3CAC`, background: `linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)` }}>



            <div className="absolute left-60">
                <div className="text-white ">
                    <p className="text-4xl font-thin">Simple SMS</p>
                    <p className="text-md mt-1">Premium disposable/temporary phone numbers for service registration.</p>

                </div>

                <div className="mt-4">
                    <button onClick={() => executeScroll()} class="text-white border-2 font-medium border-white hover:scale-95 hover:bg-white hover:text-black px-6 py-2 rounded-full outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                    >
                        Purchase SMS
                    </button>
                    <button onClick={() => executeScroll()} class="text-[#eab308] border-2 border-[#eab308] font-medium  hover:bg-[#eab308] hover:text-black hover:scale-95 px-6 py-2 rounded-full outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ml-2" type="button"
                    >
                        About
                    </button>
                </div>
            </div>



            <div className="custom-shape-divider-bottom-1674077680  drop-shadow-lg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


        </section>
    )
}