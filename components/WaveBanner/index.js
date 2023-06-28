import { Icon } from "@iconify-icon/react";
import { useEffect, useState } from "react";
export default function WaveBanner({ serviceSelectorRef, featureRef }) {



    const executeScrollOnServiceSelector = () => serviceSelectorRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const executeScrollOnFeature = () => featureRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <section style={{ backgroundColor: `#FF3CAC`, background: `linear-gradient(225deg, #2B86C5 0%, #784BA0 50%, #FF3CAC 100%)` }}>
            <div className="lg:flex  flex-col">
                <div className="lg:absolute lg:left-20 block">
                    <div className="text-white ">
                        <p className="text-lg md:text-xl transform transition-all duration-150 ease-out scale-100">Simple SMS</p>
                    </div>
                </div>
                <p className="lg:text-4xl md:text-2xl text-md font-medium lg:text-center">The premium <span href="#" className="text-primary">all-in-one</span> SMS number provider</p>
                <p className="lg:text-lg md:text-md text-sm font-thin lg:text-center">Maintain your privacy. Instant text-verification without ever revealing personal details</p>
                <div className="lg:text-center">
                    <button onClick={() => executeScrollOnServiceSelector()} className="inline-flex items-center mt-2 text-white border-2 font-medium border-white hover:scale-95 hover:bg-white hover:text-black px-4 py-2 text-sm rounded-full outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button"
                    >
                        <Icon className="mr-1" icon="ic:baseline-shopping-cart"></Icon>Purchase Number
                    </button>
                </div>
                <div className="lg:absolute right-20 mt-2 lg:mt-0">
                    <button onClick={() => executeScrollOnFeature()} className=" text-[#eab308] border-2 border-[#eab308] font-medium items-center inline-flex hover:bg-[#eab308] hover:text-black hover:scale-95 px-4 py-2 text-sm rounded-full outline-none focus:outline-none ease-linear transition-all duration-150" type="button">
                        <Icon className="mr-1" icon="ic:baseline-info"></Icon>About
                    </button>
                </div>
                <div className="invisible lg:visible custom-shape-divider-bottom-1674077680 drop-shadow-lg">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}