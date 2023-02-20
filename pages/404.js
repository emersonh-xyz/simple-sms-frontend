
import { Icon } from "@iconify-icon/react"
import Head from "next/head"
import Image from "next/image"
import Footer from "../components/Footer/index"
import Navbar from "../components/Navbar"

export default function Custom404() {
    return (
        <div className="flex flex-col h-screen ">
            <Head>
                <title>Simple SMS</title>
            </Head>

            <Navbar />

            <>

                <div className="flex justify-center items-center h-screen">
                    <div>
                        <Icon className="flex justify-center" width={100} alt="A sad face" icon={"ci:sad"} />
                        <h1 className="text-3xl font-bold text-center mb-2">404 Error</h1>
                        <h1 className="text-xl  mb-2">The page you were looking for could not be found.</h1>
                        <div class="flex justify-center">
                            <button onClick={() => window.location.href = "/"} className="btn btn-primary mt-2 hover:scale-95">Return home</button>
                        </div>
                    </div>
                </div>


            </>

            <Footer></Footer>

        </div >
    )
}