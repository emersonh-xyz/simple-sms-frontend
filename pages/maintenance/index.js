
import { Icon } from "@iconify-icon/react"
import Head from "next/head"
import Image from "next/image"
import Footer from "../../components/Footer/index"
import Navbar from "../../components/Navbar"

export default function Maintenance() {
    return (
        <div className="flex flex-col h-screen ">
            <Head>
                <title>Simple SMS</title>
            </Head>

            <Navbar />

            <>

                <div className="flex justify-center items-center h-screen">
                    <div>
                        <Icon className="flex justify-center" width={100} alt="A sad face" icon={"mdi:scheduled-maintenance"} />
                        <h1 className="text-3xl font-bold text-center mb-2">Maintenance</h1>
                        <h1 className="text-xl  mb-2">We are currently in maintenance while we update our providers.</h1>
                        <h2 className="text-xl text-center mb-2">Please try again soon, we apologize for any inconvenience.</h2>

                    </div>
                </div>


            </>

            <Footer></Footer>

        </div >
    )
}