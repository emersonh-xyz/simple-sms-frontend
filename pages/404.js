
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

                <div className="grid h-screen place-items-center">
                    <div>
                        <Icon className="mx-auto" height={250} width={500} alt="A very sad looking cat" icon={"ci:sad"} />
                        <h1 className="text-3xl font-bold text-center mb-2">404 error</h1>
                        <h1 className="text-xl text-center mb-2">The page you were looking for could not be found.</h1>

                        <button onClick={() => window.location.href = "/"} className="btn btn-secondary w-full mt-2 hover:scale-95">Return home</button>
                    </div>
                </div>


            </>

            <Footer></Footer>

        </div >
    )
}